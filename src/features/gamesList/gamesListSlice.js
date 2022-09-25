import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
  objects: {},
  totalObjects: 0,
  page: 1,
  filters: {
    provider: null,
    currency: null,
  },
}


export const fetchGamesList = createAsyncThunk(
  'gamesList/fetchGamesList',
  async (_, thunkAPI) => {
    const response = await fetch('/api/games.json')

    thunkAPI.dispatch(setGames(await response.json()))
  }
)

export const gamesListSlice = createSlice({
  name: 'gamesList',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.objects = action.payload
      state.totalObjects = Object.keys(action.payload).length
    },
    nextPage: (state) => {
      state.page = state.page + 1
    },
    setFilter: (state, action) => {
      state.filters[action.payload.name] = action.payload.value
    },
  },
})

const mapObjects = (state) => Object.entries(state.gamesList.objects).map(([id, value]) => ({id, ...value}))

export const gamesListSelector = (state) => {
  const page = state.gamesList.page;
  const filters = state.gamesList.filters;
  const objects = mapObjects(state)
    .filter((g) => !filters.provider ? true : g.provider === filters.provider)
    .filter((g) => !filters.currency ? true : g.real.hasOwnProperty(filters.currency));

  return { games: objects.filter((g, i) => i < page * 12), isLastPage: objects.length <= page * 12 }
}

export const providersSelector = (state) => mapObjects(state).map((g) => g.provider).filter((v, i, a) => a.indexOf(v) === i)
export const currencySelector = (state) => mapObjects(state).map((g) => Object.keys(g.real)).flat().filter((v, i, a) => a.indexOf(v) === i)

export const filtersSelector = (state) => state.gamesList.filters

export const { setGames, setFilter, nextPage } = gamesListSlice.actions

export default gamesListSlice.reducer
