import React from 'react'
import NextButton from '../../components/NextButton'

const Sliema = () => {
  return (
    <div>
      <NextButton page="/landmarks" desc="Landmarks"/>
      <div style={{ width: "60vw", position: "relative" }}>
        <h1>Sliema</h1>
      
        <h2>Historical Background</h2>
        <div style={{ textAlign: "left" }}>
          <p>Sliema, located on the northeastern coast of Malta, has evolved from a quiet fishing village into a bustling urban center. Its name, meaning "peace" or "comfort," is believed to have originated from a chapel dedicated to Our Lady of Good Voyage, which provided solace to fishermen and sailors.</p>
          <p>In the 19th century, during the British colonial period, Sliema began to develop rapidly. It transformed into a summer retreat for the affluent, with the construction of elegant Victorian-style villas and townhouses. The town’s growth continued into the 20th century, and post-World War II, it became one of Malta’s primary residential and commercial areas.</p>
        </div>

        <h2>Geographic Importance</h2>

        <div style={{ textAlign: "left" }}>
          <p>Sliema is strategically located across Marsamxett Harbour from the capital city, Valletta. This prime coastal position offers stunning views of Valletta’s skyline and provides easy access to the harbor. The town's waterfront stretches from Tigné Point to the Tower Road promenade, known for its scenic beauty and recreational spaces.</p>
          <p>The coastline of Sliema features a mix of rocky shores and bathing spots, popular for swimming, sunbathing, and water sports. The promenade, a long coastal walk, is a favorite spot for both locals and tourists, offering picturesque views and a lively atmosphere.</p>
        </div>

        <h2>Cultural and Economic Impact</h2>

        <div style={{ textAlign: "left" }}>
          <p>The commercial growth of Sliema has also seen a rise in modern residential developments, including luxury apartments and office complexes, particularly in areas like Tigné Point. This blend of residential and commercial spaces makes Sliema a bustling hub of activity.</p>
          <p>Tourism is a major economic driver in Sliema. The town's seafront hotels, ranging from boutique inns to luxury resorts, attract a steady stream of international visitors. The availability of ferries and boat tours from Sliema to Valletta and other parts of the island makes it a convenient base for tourists.</p>
        </div>
      </div>
    </div>
  )
}

export default Sliema