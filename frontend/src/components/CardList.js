import React, { useState, useEffect } from 'react';
import CardsInfo from './CardListItem';
import getCardList from '../API/getCardList';
import AppTopBar from './ShoppingList';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CardPage from "./CardDetails";


function CardList(props) {

    const [allCards, setAllCards] = useState([]);
    const [addPurchase, setAddPurchase] = useState([]);
    const [watchPurchase, setWatchPurchase] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const navigate = useNavigate();

    const fetchData = async () => {
        const res = await getCardList()
        setAllCards(res.data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    const list = watchPurchase ? addPurchase : allCards

    return (
        <Box>
            
            <Box>
                {allCards.map((card) => { 
                    return (
                        <CardsInfo onClick
                            nameMaterial={card.name_material}
                            category={card.category}
                            price={card.price}
                            image={card.image}
                            id={card.id}

                        />)
                })}

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