import React from 'react'
import './Grid.css'

function Grid(props) {
  const { children } = props

  return (
    <div className="Grid">
      {children}
    </div>
  )
}

export default Grid
