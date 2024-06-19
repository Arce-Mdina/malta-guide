import React from 'react'

import { hotelInfo } from './data-visit'

const Hotels = () => {

  const hotels = hotelInfo.map(hotel => 
    <div key={hotel.id} id={hotel.id} className="visit-card">
      <img src={hotel.image} style={{ width: "50%", justifyContent: "center", alignSelf: "center"}}/>
      <h2>{hotel.name}</h2>
      <p><span style={{ fontWeight: "bold" }}>Highlights:</span> {hotel.highlights}</p>
      <p><span style={{ fontWeight: "bold" }}>Location:</span> {hotel.location}</p>
      <p><span style={{ fontWeight: "bold" }}>Cost (per person) - on average:</span> {hotel.cost}</p>
    </div>
  )
    
  return (
    <>
      <h1>Recommended Hotels in Malta</h1>
      <h3>(The following hotels are on the Northern Coast)</h3>
      <div className="card-grid-triple">
        {hotels}
      </div>

      <h3><a href="https://www.google.com/maps/search/Hotels/@35.9445621,14.2566668,11.24z/data=!4m8!2m7!3m6!1sHotels!2sMalta!3s0x130e45281d8647c5:0xf582d86136be4239!4m2!1d14.375416!2d35.937496?entry=ttu" target="_blank" style={{ textDecoration: "none" }}>All Hotels in Malta (Google Maps)</a></h3>
    </>
  )
}

export default Hotels