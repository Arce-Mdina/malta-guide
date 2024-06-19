import React from 'react'
import NextButton from '../../components/NextButton'

const Mdina = () => {
  return (
    <div>
      <NextButton page="/cities/st-julians" desc="St. Julian's"/>
      <h1>Mdina</h1>
      <div style={{ width: "60vw" }}>
        <h2>Historical Background</h2>
        <div style={{ textAlign: "left" }}>
          <p>Mdina, known as the "Silent City," is one of Malta's oldest inhabited locations, with a history spanning over 4,000 years. Originally established as Maleth by the Phoenicians around 700 BC, it served as a key administrative center due to its strategic inland position. Under Roman rule, it was renamed Melite and became a flourishing city with important public buildings.</p>
          <p>The city thrived during the Byzantine and Arab periods. The Arabs fortified Mdina, introducing architectural elements still visible today. After the Norman conquest in 1091, Mdina became the seat of Malta's nobility and religious authority. Although its prominence declined when the Knights of St. John moved the capital to Valletta in the 16th century, Mdina remained a cultural and religious center.</p>
        </div>

        <h2>Geographic Importance</h2>

        <div style={{ textAlign: "left" }}>
          <p>Mdina is located on a plateau in central Malta, offering commanding views of the countryside and the Mediterranean Sea. This elevated position provided a strategic advantage for monitoring and defending against threats. The city’s robust fortifications, thick defensive walls, and narrow winding streets made it a formidable stronghold during sieges.</p>
          <p>The city’s inland location contributed to its nickname, the "Silent City," known for its peaceful and serene atmosphere. This geographic isolation made Mdina a natural refuge and a symbol of Malta’s historical resilience.</p>
        </div>

        <h2>Cultural and Economic Impact</h2>

        <div style={{ textAlign: "left" }}>
          <p>Mdina's well-preserved architecture reflects its rich history, with notable structures like St. Paul’s Cathedral and various noble palaces. Despite its small size, Mdina hosts cultural events such as the Medieval Mdina Festival, attracting visitors and locals with reenactments and traditional crafts.</p>
        </div>
      </div>
    </div>
  )
}

export default Mdina