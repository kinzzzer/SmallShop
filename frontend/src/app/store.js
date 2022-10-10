import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        cards: cardsReducer
    },
})
// state все карточки 
// curent и конрктено вібранная карта 