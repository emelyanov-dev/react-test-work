import React from 'react'
import './GamesListContainer.css'
import Grid from "../../../../components/Grid/Grid";
import Card from "../../../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { gamesListSelector, nextPage} from "../../gamesListSlice";
import Button from "../../../../components/Button/Button";

function GamesListContainer() {
  const { games, isLastPage } = useSelector(gamesListSelector)
  const dispatch = useDispatch()

  const handleNextPage = () => {
    dispatch(nextPage())
  }

  return (
    <div className="GamesListContainer">
      <Grid>
        {games.map((game) => (
          <Link key={game.id} to={`/games/${game.id}`}>
            <Card image={`https://cdn2.softswiss.net/i/s2/${game.id}.png`} title={game.title}/>
          </Link>
        ))}
      </Grid>
      {!isLastPage && (
        <div className="GamesListContainer__loadMore">
          <Button onClick={handleNextPage}>Load more...</Button>
        </div>
      )}
    </div>
  )
}

export default GamesListContainer
