import React from 'react'
import Card from '../../components/Card'

const Places = () => {
  return (
    <div>
      <h1>Places To Go</h1>
      <div className="card-grid-double" style={{ width: "75vw" }}>
        <Card heading="Valletta" desc={(
          <div>The fortified city of Valletta holds many things: Maltese culture, history and World Heritage Sites.</div>
        )}/>
        <Card heading="Mdina" desc={(
          <div>Walking in between the walls of Mdina takes you back to the ancient times, when it was first built! This city is a symbol of Malta's strength.</div>
        )}/>
        <Card heading="Malta's Churches" desc={(
          <div>Malta is famous for its churches. There is approximately 365 churches around Malta - meaning you can visit one per day in Malta!</div>
        )}/>
        <Card heading="Gozo" desc={(
          <div>The island holds rugged landscapes, charming villages, and historical sites, including the ancient Ġgantija temples and stunning coastal cliffs.</div>
        )}/>
        <Card heading="Comino" desc={(
          <div>Comino is renowned for its crystal-clear Blue Lagoon, stunning beaches, and tranquil, unspoiled natural beauty.</div>
        )}/>
        <Card heading="Sicily" desc={(
          <div>You can take a ferry from Malta to Sicily, the largest island in the Mediterranean, known for its rich history, stunning coastlines, vibrant cities like Palermo and Catania, and the imposing Mount Etna volcano.</div>
        )}/>
        <Card heading="Boat Tours" desc={(
          <div>Boat tours around Malta offer an exciting way to explore its beautiful coastline, including visits to the Blue Grotto, Comino's Blue Lagoon, and hidden coves. </div>
        )}/>
        <Card heading="Beaches" desc={(
          <div>Malta's beaches, such as Golden Bay, Mellieħa Bay, and Paradise Bay, are renowned for their clear waters and stunning beauty. However, be cautious of high winds and strong waves, which can create dangerous swimming conditions and may impact beach activities. </div>
        )}/>
        <Card heading="Natural Sites" desc={(
          <div>These sites showcase the island's rich natural beauty and historical significance. These include the stunning Blue Grotto, the scenic Dingli Cliffs, the ancient Ħaġar Qim and Mnajdra temples, and the picturesque Għadira Nature Reserve.</div>
        )}/>
        <Card heading="Fort Manoel" desc={(
          <div>Heard or watched Game of Thrones? Do you know where some of the most famous scenes are filmed? Fort Manoel! Check out the unsung hero of the series!</div>
        )}/>
      </div>
    </div>
  )
}

export default Places