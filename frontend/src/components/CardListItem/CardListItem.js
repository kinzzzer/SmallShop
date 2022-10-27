import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function CardListItem(props) {
    const { nameMaterial, category, price, image, id, handleAddPurchase, isButtonShown } = props;
    const navigate = useNavigate();
    return (
        <Card sx={{
            ":hover": {
                cursor: "pointer",
                boxShadow: 15,
                borderBottom: '3px solid #39818F',
                color: '9E3F5A',
            },
            width: '300',
            textAlign: 'center',
            borderBottom: '5px solid #F5F5F5',
            display: 'block',
            borderRadius: 2,
            m: 2,
            width: '30%',

        }}>
            <CardMedia onClick={() => navigate(`/card/${id}`)}
                sx={{
                    display: 'block',
                    width: '100%',
                }}
                component="img"
                height="300"
                image={image}
                alt={nameMaterial}
            />
            <CardContent onClick={() => navigate(`/card/${id}`)}
                sx={{
                    padding: '15px 0',
                }}>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#444444',
                        margin: '0 0 10px 0'
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
                {isButtonShown && <Button onClick={() => handleAddPurchase({ id })} color="error" endIcon={<DeleteForeverIcon />} >Delete</Button>}
            </CardActions>
        </Card>
    );
}