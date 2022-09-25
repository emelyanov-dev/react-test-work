import React from 'react'
import './Card.css'

function Card(props) {
  const { image, title } = props

  return (
    <div className="Card">
      <img src={image} alt={title} className="Card__image" />
      <div className="Card__body">
        <h3 className="Card__title">{title}</h3>
      </div>
    </div>
  )
}

export default Card
