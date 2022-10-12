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
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function CardDetails(props) {
    const [state, setState] = React.useState({});
    const { nameMaterial, categoryMaterial, price, image, amount } = state;
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
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#F7FAFA'
        }}>
            <Card sx={{
                maxWidth: 1000,
                boxShadow: 3,
                borderRadius: 2,
                m: 2
            }}>
                <CardMedia
                    component="img"
                    height="640"
                    maxWidth="650"
                    image={image}
                    alt="Material"
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
                        Amount: {amount}
                    </Typography>
                    <Typography variant="h5" color="div" sx={{
                        m: 2
                    }}>
                        Category: {categoryMaterial}
                        <br />
                        Price: {price}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'space-around',
                }}>
                    {amount > 0
                        ?
                        <Button variant="inhert" startIcon={< AddBoxIcon />}>Add in Shopping List</Button>
                        :
                        <Button variant="outlined" disabled>Out of stock</Button>}

                    <Button onClick={() => navigate("/")} variant="inhert" startIcon={<ArrowBackIosNewIcon />}>
                        Back to list
                    </Button>
                </CardActions>
            </Card>
        </Box>

    );
}