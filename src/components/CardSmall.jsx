import React from 'react'

const CardSmall = ({ heading, desc, classes, colour }) => {
  return (
    <div className="visit-card">
      <h3 className={classes} style={{ color: colour }}>{heading}</h3>
      <div>{desc}</div>
    </div>
  )
}

export default CardSmall