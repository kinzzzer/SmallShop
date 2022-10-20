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
    const { nameMaterial, category, price, image, id} = props;

    const navigate = useNavigate();
    return (
        <Card sx={{
            ":hover": {
                cursor: "pointer",
                boxShadow: 15,
                borderBottom: '3px solid #39818F',
                color: '9E3F5A'
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
                <Typography variant="body2" color="text.secondary" 
                sx={{
                    
                }}>
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