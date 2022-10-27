import * as React from 'react';
import { Box } from '@mui/system';
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removePurchase, addPurchase, getCurrentCard } from '../../app/slice/cardSlice';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Snackbar, IconButton } from '@mui/material';
import getCardById from '../../API/getCardById';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingListDialog from '../ShoppingListDialog/ShoppingListDialog'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CloseIcon from '@mui/icons-material/Close';


export default function CardDetails() {

    const currentCard = useSelector((state) => state.cards.currentCard)
    const shoppingList = useSelector((state) => state.cards.shoppingList)
    const { nameMaterial, categoryMaterial, price, image, amount, materialInfo } = currentCard;
    const [isWindowOpen, setIsWindowOpen] = React.useState(false);
    const [isInsideCard, setIsInsideCard] = React.useState(false);

    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log();
    const cardInfo = async () => {
        const res = await getCardById(id)
        dispatch(getCurrentCard(res.data))
    }

    React.useEffect(() => {
        cardInfo()
    }, []);

    const handleAddPurchase = (card) => {
        if (shoppingList.find((item) => item.id === card.id)) {
            dispatch(removePurchase(card))
            setIsInsideCard(false)
        } else {
            dispatch(addPurchase(card))
            setIsInsideCard(true)
        }

    }

    const handleClick = () => {
        setIsWindowOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsWindowOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#F7FAFA',
        }}>

            <Card sx={{
                maxWidth: 1000,
                boxShadow: 20,
                borderRadius: 3,
                borderBottom: '2px solid #1F5AB5',
                borderTop: '3px solid #1F5AB5',
                m: 5,

            }}>
                <CardMedia
                    component="img"
                    height="700"
                    image={image}
                    alt='material'
                />
                <CardContent sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',

                }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        m: 2
                    }}>
                        {nameMaterial}
                        <br />
                        {categoryMaterial}
                    </Typography>
                    <Typography variant="h5" color="div" sx={{
                        m: 2
                    }}>
                        Amount: {amount}
                        <br />
                        Price: {price}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        {materialInfo}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'space-around',
                    m: 1,
                }}>
                    {amount > 0
                        ?
                        <Button onClick={() => { handleAddPurchase(currentCard); handleClick() }} variant="inhert" startIcon={isInsideCard ? <DisabledByDefaultIcon /> : < AddBoxIcon />}> {isInsideCard ? "Remove" : "Add in Shopping List"}</Button>
                        :
                        <Button variant="outlined" disabled>Out of stock</Button>}

                    <Button onClick={() => navigate("/")} variant="inhert" startIcon={<ArrowBackIosNewIcon />}>
                        Back to list
                    </Button>
                </CardActions>
            </Card>
            <Box>
                <Snackbar
                    open={isWindowOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={isInsideCard ? "Added Material" : "Remove Material"}
                    action={action}
                />
                <ShoppingListDialog color="inherit"
                    handleAddPurchase={handleAddPurchase} />
            </Box>

        </Box>

    );
}