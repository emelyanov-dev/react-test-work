import React from 'react'
import './Button.css'

function Button(props) {
  const { children, ...rest } = props

  return (
    <button className="Button" {...rest}>
      {children}
    </button>
  )
}
export default Button
