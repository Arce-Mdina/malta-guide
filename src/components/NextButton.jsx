import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextButton = ({ page, desc }) => {

  let navigate = useNavigate()

  return (
    <div className="next-button">
      <button onClick={() => navigate(`${page}`) }>
        <span style={{ color: "black" }}>Next</span>
        <span style={{ color: "dodgerblue" }}>&#8594;</span>
      </button>
      <br></br>
      <span className="btn-desc">{desc}</span>
    </div>
  )
}

export default NextButton