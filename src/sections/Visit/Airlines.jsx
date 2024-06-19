import React from 'react'

const Airlines = () => {

  const airlinesInfo = [{
    id: 0,
    name: "KM Malta Airlines Ltd",
    link: "https://kmmaltairlines.com/en"
  }, {
    id: 1,
    name: "Lufthansa",
    link: "https://www.lufthansa.com/"
  }, {
    id: 2,
    name: "easyJet",
    link: "https://www.easyjet.com/en"
  }, {
    id: 3,
    name: "Emirates",
    link: "https://www.emirates.com/"
  }, {
    id: 4,
    name: "Wizz Air",
    link: "https://wizzair.com/en-gb"
  }, {
    id: 5,
    name: "Aegean Airlines",
    link: "https://en.aegeanair.com/"
  }, {
    id: 6,
    name: "Brussels Airlines",
    link: "https://www.brusselsairlines.com/"
  }, {
    id: 7,
    name: "Norwegian Air Shuttle",
    link: "https://www.norwegian.com/"
  }, {
    id: 8,
    name: "Swiss International Air Lines",
    link: "https://www.swiss.com/"
  }, {
    id: 9,
    name: "Tunisair",
    link: "https://www.tunisair.com/en"
  }, {
    id: 10,
    name: "Ryanair",
    link: "https://www.ryanair.com/"
  }, {
    id: 11,
    name: "British Airways",
    link: "https://www.britishairways.com/"
  }, {
    id: 12,
    name: "Turkish Airlines",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjahvmvg-OGAxUXkFAGHQgID0AYABAAGgJkZw&ase=2&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2tXKeGs_Oq2Mt0tEEBt7A2l78LFOZQrqfLeN6_vmvU9pPhaRXKNvNUaArtTEALw_wcB&ei=E2BwZrGwDKuahbIPmPu1yA8&ohost=www.google.com&cid=CAESVeD2NWnHwoVVO-deLLVGYmNI3EVyGqcpy1mvix32rwnfU1sdVQZdEQY6-hHrt8zNXZC0BQEd6rnPJ7QRrKFfxT5YzJjNB159hiVdUovOyYOhpOIDf9Q&sig=AOD64_08wUWnUjA6urPlKttBNhcezFNBbA&q&sqi=2&nis=4&adurl&ved=2ahUKEwjxhfSvg-OGAxUrTUEAHZh9DfkQ0Qx6BAgKEAE"
  }, {
    id: 13,
    name: "Qatar Airways",
    link: "https://www.qatarairways.com/"
  }, {
    id: 14,
    name: "Alitalia",
    link: "https://www.ita-airways.com/en_en"
  }, {
    id: 15,
    name: "Austrian Airlines",
    link: "https://www.austrian.com/"
  }, {
    id: 16,
    name: "EgyptAir",
    link: "https://www.egyptair.com/en/pages/homepage.aspx"
  }, {
    id: 17,
    name: "SAS Scandinavian Airlines",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiYzMHTg-OGAxVpklAGHRwNCX4YABABGgJkZw&ase=2&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2tQJiV1W0dPVACPZDkgZDQC0QdvgL8AsQsW1Hi6mkRn7XY5zcHMI8kaAqvgEALw_wcB&ei=XWBwZvyDMPazhbIPivmvuAI&ohost=www.google.com&cid=CAESVeD2zbBRxTrttDcii-qZOLoUz5Mslt8ClxepVAMu3DwpkxHnp35KERNcjBlACAHJEsBaN7JnjyaSIuQLKkPyImB-GAs5zKfrtpef1byaJ_OsIFRU3A0&sig=AOD64_0XG6obvrcl-NEcgIrjXyuGTUomSA&q&sqi=2&nis=4&adurl&ved=2ahUKEwi8przTg-OGAxX2WUEAHYr8CycQ0Qx6BAgKEAE"
  }, {
    id: 18,
    name: "TAP Air Portugal",
    link: "https://booking.flytap.com/lite/"
  }, {
    id: 19,
    name: "Air France",
    link: "https://wwws.airfrance.ie/"
  }]

  const airlines = airlinesInfo.map(airline => 
    <div key={airline.id} className="airline-card">
      <h3><a href={airline.link} className="airline-link" target="_blank">{airline.name}</a></h3>
    </div>
  )

  return (
    <div>
      <h1 className="history-heading">Airlines that fly to Malta</h1>
      <div className="card-grid-triple" style={{ width: "70vw" }}>
        {airlines}
      </div>
    </div>
  )
}

export default Airlines