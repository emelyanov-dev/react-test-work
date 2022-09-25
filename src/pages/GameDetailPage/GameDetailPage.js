import React from 'react'
import './GamesDetailPage.css'
import GamesDetailContainer from "../../features/gamesList/containers/GamesDetailContainer/GamesDetailContainer";
import {Link} from "react-router-dom";

function GameDetailPage() {

  return (
    <div className="GameDetailPage">
      <Link to="/games" className="GameDetailPage__link">← Back to games</Link>
      <GamesDetailContainer />
    </div>
  )
}

export default GameDetailPage
