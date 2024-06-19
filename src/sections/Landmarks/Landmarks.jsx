import React from 'react'
// import { useNavigate } from 'react-router-dom'

import { landmarksInfo } from './data-landmarks'

import NextButton from '../../components/NextButton'

const Landmarks = () => {

  // const navigate = useNavigate();

  const landmarks = landmarksInfo.map(landmark => 
    <div className="landmark-card" key={landmark.id}>
      <img src={landmark.img} className="landmark-image" alt={`landmark image ${landmark.id}`}/>
      <h2>{landmark.heading}</h2>
      <div style={{ marginLeft: "7px", marginRight: "7px" }}>{landmark.desc}</div>
      <h3>{landmark.location}</h3>
    </div>
  )

  return (
    <>
      <NextButton page="/history" desc="History"/>
      <div className="landmarks">
        <h1>Landmarks of Malta</h1>
        <div className="card-grid-triple">
          {landmarks}
        </div>
      </div>
    </>
  )
}

export default Landmarks