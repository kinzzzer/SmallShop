import React, { useState, useEffect } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import getCardList from '../../API/getCardList';
import { Box, SpeedDial } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import MultistepForm from '../MultistepForm/MultistepForm';
import InfiniteScroll from 'react-infinite-scroll-component';
import { setCardList, setSortedCards } from '../../app/slice/cardSlice';
import Dashboard from '../Dashboard/Dashboard';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { width } from '@mui/system';



function CardList(props) {

    // const [allCards, setAllCards] = useState([]);
    const [watchPurchase, setWatchPurchase] = useState(false);
    const [pagination, setPagination] = useState({ limit: 20, offset: 0 });
    const [hasMore, setHasMore] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const allCards = useSelector((state) => state.cards.allCards)

    const fetchData = async () => {
        const res = await getCardList(pagination)
        dispatch(setCardList(res.data.items))
        setPagination(currentPagination => {
            return { limit: 20, offset: currentPagination.offset + 10 }
        })
        if (res.data.cardCount < pagination.offset) {
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (allCards.length === 0) {
            fetchData()
            console.log(allCards.length);
        }

    }, []);

    const lowPrice = () => {
        const sorted = [...allCards].sort((a, b) => a.price - b.price);
        dispatch(setSortedCards(sorted))
    }

    console.log(allCards);



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
                        border: '2px solid black',
                        width: '96%',

                    }}>
                        <Dashboard
                            allCards={allCards}
                            lowPrice={lowPrice}
                        />
                        <IconButton color="primary" aria-label="add to shopping cart" >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Box>


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
            </Box >
        </InfiniteScroll>




    )
}
export default CardList;