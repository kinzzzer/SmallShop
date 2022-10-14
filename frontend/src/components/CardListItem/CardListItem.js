import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function CardListItem(props) {
    const { nameMaterial, category, price, image, id, amount } = props;

    const navigate = useNavigate();
    return (
        <Card sx={{
            ":hover": {
                cursor: "pointer",
                boxShadow: 15,

            },
            boxShadow: 3,
            borderRadius: 2,
            m: 2,
            minWidth: '30%',
            border: '2px solid black'
        }}>
            <CardMedia onClick={() => navigate(`/card/${id}`)}
                component="img"
                height="640"
                image={image}
                alt={nameMaterial}
            />
            <CardContent onClick={() => navigate(`/card/${id}`)}>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    {nameMaterial}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {category}
                    <br />
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent: 'center'
            }}>
            </CardActions>
        </Card>
    );
}