import React from 'react'
import { eventsInfo } from './History/data-history'

import NextButton from '../components/NextButton'

const History = () => {

    const events = eventsInfo.map(event => 
        <div key={event.id} id={event.id} className="visit-card">
            <h2>{event.heading} ({event.time})</h2>
            <div>{event.desc}</div>
        </div>
    )

  return (
    <>
        <NextButton page="/influence" desc="Influence"/>
        <div style={{ width: "75vw" }}>
            <h1 className="history-heading">Significant Events of Maltese History</h1>
            <div>
                {events}
            </div>
        </div>
    </>
  )
}

export default History