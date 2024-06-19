import React from 'react'

import Card from '../components/Card'
import CardSmall from '../components/CardSmall'

const Influence = () => {
  return (
    <div>
      <h1>Malta's Power & Sovereignty</h1>
      <div style={{ width: "80vw" }}>

        <h2 style={{ fontSize: "2.3em" }}>Sovereignty and Influence</h2>
        <div className="card-grid-double">
          <Card heading="Territorial Waters" classes="influence-card-heading-2" desc={(
            <div>Malta has sovereignty over its territorial waters, which extend up to 12 nautical miles from its coast.</div>
          )}/>

          <Card heading="Exclusive Economic Zone (EEZ)" classes="influence-card-heading-2" desc={(
            <div>Malta has rights to exploit resources, such as fishing and energy resources, within its EEZ, which extends up to 200 nautical miles from its coast.</div>
          )}/>
        </div>

        <h2 style={{ fontSize: "2.3em" }}>Malta's Islands & Islets</h2>
        <div className="card-grid-double">
          <Card heading="Malta (Main Island)" classes="influence-card-heading" desc={(
            <div>The largest and most populated island, hosting the capital city, Valletta.</div>
          )}/>

          <Card heading="Gozo (Għawdex)" classes="influence-card-heading" desc={(
            <div>The second-largest island, known for its rural and agricultural character.</div>
          )}/>

          <Card heading="Comino (Kemmuna)" classes="influence-card-heading" desc={(
            <div>A small island situated between Malta and Gozo, famous for the Blue Lagoon.</div>
          )}/>

          <Card heading="Cominotto (Kemmunett)" classes="influence-card-heading" desc={(
            <div>A tiny islet off the coast of Comino.</div>
          )}/>

          <Card heading="Fifla" classes="influence-card-heading" desc={(
            <div>An uninhabited small rocky islet located to the south of Malta.</div>
          )}/>

          <Card heading="St. Paul's Islands (Il-Gżejjer ta' San Pawl)" classes="influence-card-heading" desc={(
            <div>Two small uninhabited islands near St. Paul's Bay.</div>
          )}/>
        </div>

        <h1>International Organisations</h1>
        <h2>General International Organisations</h2>
        <div className="card-grid-triple">
          <CardSmall heading="United Nations (UN)"/>
          <CardSmall heading="European Union (EU)"/>
          <CardSmall heading="Commonwealth of Nations"/>
          <CardSmall heading="Council of Europe (CoE)"/>
          <CardSmall heading="Organization for Security and Co-operation in Europe (OSCE)"/>
          <CardSmall heading="Interpol (International Criminal Police Organization)"/>
          <CardSmall heading="World Trade Organization (WTO)"/>
        </div>

        <h2>Financial and Development Organizations</h2>
        <div className="card-grid-triple">
          <CardSmall heading="International Monetary Fund (IMF)"/>
          <CardSmall heading="World Bank Group"/>
          <CardSmall heading="European Bank for Reconstruction and Development (EBRD)"/>
        </div>

        <h2>Specialized and Regional Organizations</h2>
        <div className="card-grid-triple">
          <CardSmall heading="International Organization for Migration (IOM)"/>
          <CardSmall heading="Schengen Agreement"/>
          <CardSmall heading="Organisation for the Prohibition of Chemical Weapons (OPCW)"/>
          <CardSmall heading="Union for the Mediterranean"/>
          <CardSmall heading="Forum of Small States (FOSS)"/>
        </div>

      </div>
    </div>
  )
}

export default Influence