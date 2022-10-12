import React, { useState, useEffect } from 'react';
import CardListItem from './CardListItem';
import getCardList from '../API/getCardList';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import MultistepForm from './MultistepForm';
import { removePurchase } from '../app/slice/cardSlice';


function CardList(props) {

    const [allCards, setAllCards] = useState([]);
    const [addPurchase, setAddPurchase] = useState([]);
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

    const handleAddFavorite = (card) => {
        if (purchase.find((item) => item.id === card.id)) {
            dispatch(removePurchase(card))
        } else {
            dispatch(addPurchase(card))
        }
    }

    const purchase = ((state) => state.cards.purchase)


    return (
        <Box sx={{
            backgroundColor: '#F7FAFA'
        }}>
            <Box >
                <Box>
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

            </Box>
        </Box>


        /* //     <InfiniteScroll
        //     next={fetchData}
        //     hasMore={searchInputValue ? searchNext : !!link}
        //     loader={<h4>Loading...</h4>}
        //     dataLength={list.length}
        // >

        // </InfiniteScroll> */



    )
}
export default CardList;