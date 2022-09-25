import React from 'react'
import './GamesListPage.css'
import GamesListContainer from "../../features/gamesList/containers/GamesListContainer/GamesListContainer";
import GamesFiltersContainer from "../../features/gamesList/containers/GamesFiltersContainer/GamesFiltersContainer";

function GamesListPage() {

  return (
    <div className="GamesListPage">
      <div className="GamesListPage__filters">
        <GamesFiltersContainer />
      </div>
      <GamesListContainer />
    </div>
  )
}

export default GamesListPage
