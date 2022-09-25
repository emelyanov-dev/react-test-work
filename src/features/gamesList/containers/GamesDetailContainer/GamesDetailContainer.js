import React from 'react'
import { useParams } from 'react-router-dom';
import './GamesDetailContainer.css'
import {useSelector} from "react-redux";

function GamesDetailContainer() {
  const { provider, gameId } = useParams();
  const games = useSelector(state => state.gamesList.objects)

  const game = games[`${provider}/${gameId}`] || null

  if (!game) return <>loading...</>

  return (
    <div className="GamesDetailContainer">
      <div className="GamesDetailContainer__title">
        {game.title}
      </div>
    </div>
  )
}
export default GamesDetailContainer
