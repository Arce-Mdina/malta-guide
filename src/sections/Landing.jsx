import React from 'react'

import { useNavigate } from 'react-router-dom'

import coatOfArms from '../assets/Coat_of_arms_of_Malta.webp'

const Landing = () => {

  let navigate = useNavigate();

  return (
    <div className="header">
      <img src={coatOfArms} className="coat-of-arms"/>
      <h1 className="heading">Malta</h1>
      <p className="heading-desc">A Mediterranean gem with rich history, stunning landscapes, and vibrant culture.</p>
      <div className="link-buttons">
        <a className="link-1" onClick={() => navigate('/cities')}>Learn more</a>
        <a className="link-2" onClick={() => navigate('/visit-malta')}>Visit Malta</a>
      </div>
    </div>
  )
}

export default Landing