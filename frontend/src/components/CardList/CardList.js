import React, { useState, useEffect } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import getCardList from '../../API/getCardList';
import { Box, SpeedDial } from '@mui/material';
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import MultistepForm from '../MultistepForm/MultistepForm';

import InfiniteScroll from 'react-infinite-scroll-component';
import ShoppingSpeedDial from '../SnackbarShoppinList/SnackbarShoppingList'


function CardList(props) {

    const [allCards, setAllCards] = useState([]);
    const [watchPurchase, setWatchPurchase] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const fetchData = async () => {
        const res = await getCardList()
        setAllCards(res.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    



    return (
        <InfiniteScroll
            next={fetchData}
            hasMore={true}
            loader={<h4>Transport too heavy materials...</h4>}
            dataLength={allCards.length}
        >

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#F7FAFA',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    maxWidth: '70%',
                    border: '1px solid black'
                }}>

                    {allCards.map((card) => {
                        return (
                            <CardListItem
                                nameMaterial={card.nameMaterial}
                                category={card.categoryMaterial}
                                price={card.price}
                                image={card.image}
                                id={card.id}
                                
                            />)
                    })}
                </Box>
                <Box>
                    <ShoppingSpeedDial />
                </Box>
            </Box >
        </InfiniteScroll>




    )
}
export default CardList;