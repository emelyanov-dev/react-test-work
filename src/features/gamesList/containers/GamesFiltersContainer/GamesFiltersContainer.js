import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import './GamesFiltersContainer.css'
import {currencySelector, filtersSelector, providersSelector, setFilter} from "../../gamesListSlice";

function GamesFiltersContainer() {
  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)
  const providers = useSelector(providersSelector)
  const currencies = useSelector(currencySelector)

  const handleSetFilter = (name) => (event) => {
    dispatch(setFilter({ name, value: event.target.value || null }))
  }

  return (
    <div className="GamesFiltersContainer">
      <section className="GamesFiltersContainer__filter">
        <label htmlFor="provider">
          Provider
        </label>
        <select name="provider" id="provider" value={filters.provider} onChange={handleSetFilter('provider')}>
          <option value="">None</option>
          {providers.map((v) => (
            <option value={v} key={v}>{v}</option>
          ))}
        </select>
      </section>
      <section className="GamesFiltersContainer__filter">
        <label htmlFor="currency">
          Currency
        </label>
        <select name="currency" id="currency" value={filters.currency} onChange={handleSetFilter('currency')}>
          <option value="">None</option>
          {currencies.map((v) => (
            <option value={v} key={v}>{v}</option>
          ))}
        </select>
      </section>
    </div>
  )
}

export default GamesFiltersContainer
