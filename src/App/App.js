import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

import GamesListPage from "../pages/GamesListPage/GamesListPage";
import GameDetailPage from "../pages/GameDetailPage/GameDetailPage";
import {fetchGamesList} from "../features/gamesList/gamesListSlice";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchGamesList())
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate to="/games" replace />}
          />
          <Route path="games" exact element={<GamesListPage/>} />
          <Route path="games/:provider/:gameId" exact element={<GameDetailPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
