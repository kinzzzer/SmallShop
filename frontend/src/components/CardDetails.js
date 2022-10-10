import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppTopBar from './ShoppingList';
import { Box } from '@mui/system';
import { useNavigate, useParams } from "react-router-dom"
import getCardById from '../API/getCardById';



export default function CardDetails(props) {
    const [state, setState] = React.useState({});
    const { name_material, category, price, image } = state;
    const { id } = useParams()
    const navigate = useNavigate();



    const cardInfo = async () => {
        const res = await getCardById(id)
        setState(res.data)
    }
    React.useEffect(() => {
        cardInfo()
    }, []);

    console.log(state);


    return (
        <Box>
            <Card sx={{
                maxWidth: 500,
                boxShadow: 3,
                borderRadius: 2,
                m: 2,
            }}>
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="Material"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name_material} 
                        <br/>
                        Amount: 123
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Category: {category}
                        <br />
                        Price: {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    {123 > 0 ? <Button variant="outlined">Buy</Button> : <Button variant="outlined" disabled>Out of stock</Button>}
                    <button onClick={() => navigate("/card")}>Back to list</button>
                </CardActions>
            </Card>
        </Box>

    );
}