import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, SpeedDial } from '@mui/material';
import { setCardList, setSortedCards } from '../../app/slice/cardSlice';
import { useNavigate } from "react-router-dom";
import CardListItem from '../CardListItem/CardListItem';
import getCardList from '../../API/getCardList';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dashboard from '../Dashboard/Dashboard';
import ShoppingListDialog from '../ShoppingListDialog/ShoppingListDialog';


function CardList(props) {
    const [pagination, setPagination] = useState({ limit: 20, offset: 0 });
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allCards = useSelector((state) => state.cards.allCards)

    const fetchData = async () => {
        const res = await getCardList(pagination)
        dispatch(setCardList(res.data.items))
        setPagination(currentPagination => {
            return { limit: 20, offset: currentPagination.offset + pagination.limit }
        })
        if (res.data.cardCount < pagination.offset) {
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (allCards.length === 0) {
            fetchData()
        }
    }, []);

    const lowPriceFilter = () => {
        const sorted = [...allCards].sort((a, b) => a.price - b.price);
        dispatch(setSortedCards(sorted))
    }

    const hightPriceFilter = () => {
        const sorted = [...allCards].sort((a, b) => b.price - a.price);
        dispatch(setSortedCards(sorted))
    }

    const categoryFilter = () => {
        const sorted = [...allCards].sort((a, b) => a.categoryMaterial.length > b.categoryMaterial.length ? 1 : -1);
        dispatch(setSortedCards(sorted))
    }

    const nameFilterAlphabet = () => {
        const sorted = [...allCards].sort((a, b) => a.nameMaterial > b.nameMaterial ? 1 : -1)
        dispatch(setSortedCards(sorted))
    }
    const nameFilterLength = () => {
        const sorted = [...allCards].sort((a, b) => a.nameMaterial.length > b.nameMaterial.length ? 1 : -1)
        dispatch(setSortedCards(sorted))
    }

    return (
        <InfiniteScroll
            next={fetchData}
            hasMore={hasMore}
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
                    flexWrap: 'wrap',
                    maxWidth: '70%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '96%',
                    }}>
                        <Dashboard
                            allCards={allCards}
                            lowPriceFilter={lowPriceFilter}
                            hightPriceFilter={hightPriceFilter}
                            nameFilterAlphabet={nameFilterAlphabet}
                            nameFilterLength={nameFilterLength}
                            categoryFilter={categoryFilter}
                        />
                        <ShoppingListDialog color="inherit" />
                    </Box>
                    {allCards.map((card) => {
                        return (
                            <CardListItem
                                key={card.id}
                                nameMaterial={card.nameMaterial}
                                category={card.categoryMaterial}
                                price={card.price}
                                image={card.image}
                                id={card.id}
                            />)
                    })}
                </Box>
            </Box >
        </InfiniteScroll>
    )
}
export default CardList;