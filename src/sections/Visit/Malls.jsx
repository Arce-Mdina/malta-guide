import React from 'react'

import { mallsInfo } from './data-visit'

const Malls = () => {

  const malls = mallsInfo.map(mall => 
    <div key={mall.id} id={mall.id} className="visit-card">
      <h2>{mall.name} ({mall.location})</h2>
      <p><span style={{ fontWeight: "bold" }}>Types of stuff (General)</span> {mall.type}</p>
      <p><span style={{ fontWeight: "bold" }}>Close hotel:</span> {mall.hotel}</p>
    </div>
  )

  return (
    <>
      <h1>Recommended Shopping Malls/Stores in Malta</h1>
      <h3>*These are just suggestions, go to the one according to your needs</h3>
      <div className="card-grid-triple">
        {malls}
      </div>
    </>
  )
}

export default Malls