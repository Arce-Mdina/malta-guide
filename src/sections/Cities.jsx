import React from 'react'
import { citiesInfo } from './Cities/data-cities'

import { useNavigate } from 'react-router-dom'

import NextButton from '../components/NextButton'

const Cities = () => {

  let navigate = useNavigate()

  const cities = citiesInfo.map(city => 
    <div key={city.id} className="city-card" onClick={() => navigate(`/cities${city.link}`)} style={{ backgroundImage: `url(${city.image})` }}>
      <div className="cover"></div>
      <h2>{city.heading}</h2>
    </div>
  )

  return (
    <div>
      <NextButton page="/landmarks" desc="Landmarks"/> 
      <h1>5 major cities in Malta</h1>
      <div className="cards">
        {cities}
      </div>

      <a style={{ color: "gray", cursor: "pointer", textDecoration: "none" }} onClick={() => navigate('/sources')}>Learn more about where I found the images</a>
    </div>
  )
}

export default Cities