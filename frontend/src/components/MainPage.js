import React, { useState, useEffect } from 'react';
import CardsInfo from './CardsInfo';
import getCardList from './getCardList';


function MainPage(props) {

    const [allCards, setAllCards] = useState([]);
    const [addPurchase, setAddPurchase] = useState([]);
    const [link, setLink] = useState('http://localhost:3001/api/card');

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCardList() 
            setAllCards(res)
        }
        fetchData()
    }, []);


    console.log(allCards);

    
    return( 
        <div> 
            <CardsInfo />
        </div>
    )
}
 export default MainPage;