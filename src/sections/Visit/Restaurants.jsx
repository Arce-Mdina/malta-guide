import React from 'react'
import { restaurantsInfo } from './data-visit'

const Restaurants = () => {

  const restaurants = restaurantsInfo.map(restaurant => 
    <div key={restaurant.id} id={restaurant.id} className="visit-card">
      <h2>{restaurant.name}</h2>
      <p><span style={{ fontWeight: "bold" }}>Location:</span> {restaurant.location}</p>
      <p><span style={{ fontWeight: "bold" }}>Cost (per person) - on average:</span> {restaurant.cost}</p>
      <div style={{ fontSize: "0.85em", color: "gray",  }}>{restaurant.recommendation}</div>
    </div>
  )

  return (
    <>
      <h1>Recommended Restaurants in Malta</h1>
      <h3>(All cuisine listed here is Mediterranean)</h3>
      <div className="card-grid-triple">
        {restaurants}
      </div>
    </>
  )
}

export default Restaurants