import React from 'react'
import Card from '../components/Card'

const Facts = () => {
  return (
    <div style={{ width: "65vw" }}>
      <h1>Fun Facts about Malta</h1>
      <h3>Sound smart with these top 10 facts about Malta!</h3>

      <Card heading="Film Location Hotspot" desc={(
        <div>Malta's stunning landscapes and historical architecture have made it a popular filming location for major movies and TV shows, including "Gladiator," "Troy," "Game of Thrones," and "World War Z."</div>
      )}/>

      <Card heading="World War II George Cross" desc={(
        <div>Malta was awarded the George Cross by King George VI of the United Kingdom in 1942 for the bravery of its people during World War II. The George Cross is now displayed on the Maltese flag.</div>
      )}/>

      <Card heading="Singing Wells" desc={(
        <div>In Mdina, also known as the "Silent City," some wells are known to produce a musical sound when the wind blows across their openings. This phenomenon adds to the mystical and ancient aura of the city.</div>
      )}/>

      <Card heading="Language Mystery" desc={(
        <div>Maltese is the only Semitic language written in the Latin alphabet. It evolved from Siculo-Arabic and was influenced by Italian, particularly Sicilian, and later English. This unique blend of influences makes Maltese a linguistic curiosity.</div>
      )}/>

      <Card heading="Tiny Yet Mighty" desc={(
        <div>Despite its small size (316 square kilometers), Malta is one of the most densely populated countries in the world, with around 500,000 residents.</div>
      )}/>

      <Card heading="Oldest Theater" desc={(
        <div>The Manoel Theatre in Valletta, built in 1731, is one of the oldest working theaters in Europe. Its intimate Baroque interior and excellent acoustics make it a cultural gem in Malta.</div>
      )}/>

      <Card heading="Climate Exception" desc={(
        <div>Malta enjoys an average of 300 sunny days a year, making it one of the sunniest places in Europe. This exceptional climate has contributed to its popularity as a tourist destination and its vibrant outdoor culture.</div>
      )}/>

      <Card heading="Diverse Flora and Fauna" desc={(
        <div>The Maltese Islands are home to unique and diverse plant and animal life. One fascinating example is the Maltese Honeybee, which produces honey with a distinct flavor due to the island's unique flora.</div>
      )}/>

      <Card heading="Catacombs of Rabat" desc={(
        <div>The St. Paul's Catacombs in Rabat are an extensive network of underground Roman cemeteries. These catacombs date back to the 4th century AD and are considered the earliest and largest evidence of Christianity in Malta.</div>
      )}/>

      <Card heading="Microstate Resilience" desc={(
        <div>Despite its minuscule size, Malta has a highly developed economy. It ranks high in economic freedom, human development, and quality of life indices, showcasing an extraordinary level of resilience and success.</div>
      )}/>


    </div>
  )
}

export default Facts