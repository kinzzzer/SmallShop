import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removePurchase, addPurchase, setCardList, getCurrentCard } from '../../app/slice/cardSlice';
import getCardById from '../../API/getCardById';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//import SnackbarShoppingList from '../SnackbarShoppinList/SnackbarShoppingList';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export default function CardDetails(props) {

    // const [isOpen, setIsOpen] = React.useState();
    const currentCard = useSelector((state) => state.cards.currentCard)
    const shoppingList = useSelector((state) => state.cards.shoppingList)
    const { nameMaterial, categoryMaterial, price, image, amount, materialInfo } = currentCard;

    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(currentCard);

    const isInsideCart = shoppingList.find((item) => item.id === currentCard.id)

    const cardInfo = async () => {
        const res = await getCardById(id)
        dispatch(getCurrentCard(res.data))
        console.log(res.data);
    }

    React.useEffect(() => {
        cardInfo()
    }, []);

    const handleAddPurchase = (card) => {
        if (isInsideCart) {
            dispatch(removePurchase(card))
        } else {
            dispatch(addPurchase(card))
        }
    }
    console.log(currentCard);


    // function AddInShoppingListButton() {
    //     SnackbarShoppingList();
    //     addInShoppingList();
    // }


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
                    maxWidth="60"
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
                        <Button onClick={() => handleAddPurchase(currentCard)} variant="inhert" startIcon={< AddBoxIcon />}> { isInsideCart ? "Remove": "Add in Shopping List" }</Button>
                        :
                        <Button variant="outlined" disabled>Out of stock</Button>}

                    <Button onClick={() => navigate("/")} variant="inhert" startIcon={<ArrowBackIosNewIcon />}>
                        Back to list
                    </Button>



                </CardActions>


            </Card>
            <Box>
                <IconButton color="primary" aria-label="add to shopping cart" >
                    <AddShoppingCartIcon />
                </IconButton>

            </Box>
        </Box>

    );
}