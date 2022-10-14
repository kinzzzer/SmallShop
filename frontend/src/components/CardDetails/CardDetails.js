import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import getCardById from '../../API/getCardById';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SnackbarShoppingList from '../SnackbarShoppinList/SnackbarShoppingList';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { removePurchase, addPurchase } from '../../app/slice/cardSlice';


export default function CardDetails(props) {
    const [state, setState] = React.useState({});
    const { nameMaterial, categoryMaterial, price, image, amount, materialInfo } = state;
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const purchase = useSelector((state) => state.cards.purchase)
    // const [isOpen, setIsopen] = useState(false);
    console.log(purchase);


    const cardInfo = async () => {
        const res = await getCardById(id)
        setState(res.data)
    }
    React.useEffect(() => {
        cardInfo()
    }, []);
    console.log(state);

    const handleAddFavorite = (card) => {
        if (purchase.find((item) => item.id === card.id)) {
            dispatch(removePurchase(card))
        } else {
            dispatch(addPurchase(card))
        }
    }
    console.log(purchase);






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
                        {nameMaterial},
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
                        <Button onClick={() => handleAddFavorite} variant="inhert" startIcon={< AddBoxIcon />}>Add in Shopping List</Button>
                        :
                        <Button variant="outlined" disabled>Out of stock</Button>}

                    <Button onClick={() => navigate("/")} variant="inhert" startIcon={<ArrowBackIosNewIcon />}>
                        Back to list
                    </Button>

                </CardActions>

            </Card>
            <Box>
                <IconButton color="primary" aria-label="add to shopping cart" >
                    <AddShoppingCartIcon onClick/>
                </IconButton>
            </Box>
        </Box>

    );
}