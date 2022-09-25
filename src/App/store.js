import { configureStore } from '@reduxjs/toolkit'
import gamesListReducer from "../features/gamesList/gamesListSlice";

export const store = configureStore({
  reducer: {
    gamesList: gamesListReducer
  },
})
