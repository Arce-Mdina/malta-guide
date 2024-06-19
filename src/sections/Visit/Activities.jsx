import React from 'react'

import { annualEventsInfo } from './data-visit'

const Activities = () => {


  const annualEvents = annualEventsInfo.map(event => 
    <div className="visit-card" key={event.id}>
      <h2>{event.heading}</h2>
      <div>{event.desc}</div>
      <div>{event.note}</div>
    </div>
  )

  return (
    <div>
      <h1>Things you could do in Malta</h1>
      <div className="card-grid-double" style={{ width: "80vw" }}>
        {annualEvents}
      </div>
    </div>
  )
}

export default Activities