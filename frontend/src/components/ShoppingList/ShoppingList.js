import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function CardsInfo(props) {
    const { nameMaterial, category, price, image } = props
    return (
        <Card sx={{
            minWidth: 500,
            boxShadow: 3,
            borderRadius: 2,
            m: 2,
        }}>
            <CardMedia
                component="img"
                height="340"
                image={image}
                alt="Material"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nameMaterial}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {category}
                    <br/>
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <button >Buy</button>
            </CardActions>
        </Card>
    );
}