import React from 'react'

import { useNavigate } from 'react-router-dom'

import { transportationInfo } from './data-visit'

const Visit = () => {

  const navigate = useNavigate();

  const transportations = transportationInfo.map(transportation => 
    <div key={transportation.id} id={transportation.id} className="visit-card">
      <div style={{ fontSize: "5em", color: transportation.color }}>{transportation.icon}</div>
      <h2>{transportation.heading}</h2>
      <div>{transportation.description}</div>
    </div>
  )

  const travelInfo = [{
    id: "airlines",
    heading: "Airlines that fly to Malta",
    link: "/airlines",
  }, {
    id: "hotels",
    heading: "Hotels in Malta",
    link: "/hotels",
  }, {
    id: "restaurants",
    heading: "Restaurants in Malta",
    link: "/restaurants",
  }, {
    id: "malls",
    heading: "Shopping Malls in Malta",
    link: "/malls",
  }, {
    id: "things",
    heading: "Things to do in Malta",
    link: "/activities",
  }, {
    id: "places",
    heading: "Places to go in Malta",
    link: "/places-to-go",
  }]

  const travels = travelInfo.map(travel => 
    <div className="visit-card travel-visit" key={travel.id} onClick={() => navigate(`/visit-malta${travel.link}`)}>
      <h2>{travel.heading}</h2>
    </div>
  )

  

  return (
    <div className="visit">
      <h1>Ways of Getting to Malta</h1>
      <div className="card-grid-triple">
        {transportations}
      </div>

      <h1>See other travel information...</h1>
      <div className="card-grid-triple">
        {travels}
      </div>
      
    </div>
  )
}

export default Visit