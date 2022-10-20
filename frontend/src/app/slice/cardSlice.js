import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCards: [],
    currentCard: [],
    shoppingList: []
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCardList: (state, action) => {
            state.allCards = [...state.allCards, ...action.payload]
        },
        getCurrentCard: (state, action) => {
            state.currentCard = action.payload
        },
        addPurchase: (state, action) => {
            state.shoppingList = [...state.shoppingList, action.payload]
        },
        removePurchase: (state, action) => {
            state.shoppingList = state.shoppingList.filter((item) => item.id !== action.payload.id)
        },
        setSortedCards: (state, action) => {
            state.allCards = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setCardList, addPurchase, removePurchase, getCurrentCard, setSortedCards } = cardSlice.actions

export default cardSlice.reducer