import Recommendation from "../../components/Recommendation"

import { useNavigate } from "react-router-dom"

const Link = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Go to the <span onClick={() => navigate('/landmarks')} style={{ cursor: "pointer", color: "#242424", fontWeight: "bold" }}>landmarks</span> page and found out what they have! Have fun!</div>
        </>
    )
}

export const transportationInfo = [{
    id: 0,
    heading: "Airplane",
    description: (
        <>Possibly the most frequently-used and convenient way of getting to Malta.</>
    ),
    icon: "✈",
    color: "dodgerblue"
}, {
    id: 1,
    heading: "Ferry",
    description: (
        <>The cheapest (and fastest) way (by ferry) to go to Malta is probably from Sicily to Malta.</>
    ),
    icon: "⛴",
    color: "forestgreen"
}, {
    id: 2,
    heading: "???",
    description: (
        <>Any other ways, such as walking, or swimming, or driving (if possible) is not recommended.</>
    ),
    icon: "䷀",
    color: "#FFCF13"
}]

export const restaurantsInfo = [{
    id: 0,
    name: "U Bistrot",
    location: "St. Julian's",
    cost: "€20-€40",
    recommendation: (
        <>
            <Recommendation />
        </>
    )
}, {
    id: 1,
    name: "ION – The Harbour",
    location: "Valletta",
    cost: "€100-€150",
}, {
    id: 2,
    name: "Bahia ",
    location: "Balzan",
    cost: "€80-€120",
}, {
    id: 3,
    name: "De Mondion",
    location: "Mdina",
    cost: "€90-€140",
}, {
    id: 4,
    name: "Noni",
    location: "Valletta",
    cost: "€70-€110",
}, {
    id: 5,
    name: "Wigi's Kitchen",
    location: "St. Julians",
    cost: "€45-€50",
    recommendation: (
        <>
            <Recommendation />
        </>
    )
}]

export const hotelInfo = [{
    id: 0,
    image: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/386383609_712467157583143_8756492464136082387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7rMlYB7ql8wQ7kNvgHmNQaj&_nc_ht=scontent-dub4-1.xx&oh=00_AYBGd5PzD4SMamnltLvGH1FxIMZD06smQdueywx_P-7cvA&oe=6675E41D",
    name: "Malta Marriott Hotel & Spa",
    cost: "€193 / £166",
    highlights: "Rooftop outdoor pool, spa with various treatments, multiple dining options.",
    location: "St. Julians",
}, {
    id: 1,
    image: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/385310956_715323483969444_7887861423800555829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QiHbi3-5OrMQ7kNvgEbgDhU&_nc_ht=scontent-dub4-1.xx&oh=00_AYD8-t0gDhfc5b3ValZ6v_PhM24T6y5thWQABFaN_Q92cg&oe=6675E855",
    name: "Hilton Malta",
    cost: "€135 / £117",
    highlights: "Suitable for families and travelers looking for a comprehensive resort experience.",
    location: "St. Julians",
}, {
    id: 2,
    image: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/250418801_413974770419518_4680296540218945571_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TBcwVxIo_60Q7kNvgHDTI8b&_nc_ht=scontent-dub4-1.xx&oh=00_AYBlPXDCOEMlS1E9lzvDmu5KFlAvhuFDerd3eIdIDhTkww&oe=667603A6",
    name: "Iniala Harbour House",
    cost: "€209 / £180",
    highlights: "Perfect for those seeking an upscale and intimate stay with top-notch dining options.",
    location: "Valletta",
}]

export const mallsInfo = [{
    id: 0,
    name: "The Point Shopping Mall",
    location: "Sliema",
    type: "Offers a wide range of shops including international fashion brands, electronics, beauty products, jewelry, household items, and dining options.",
    hotel: "The Palace Hotel",
}, {
    id: 1,
    name: "Bay Street Shopping Complex",
    location: "St Julian’s",
    type: "Features fashion stores, electronics, toys, books, beauty products, restaurants, and a play area for children.",
    hotel: "Hilton Malta",
}, {
    id: 2,
    name: "Arkadia Commercial Centre",
    location: "Victoria, Gozo",
    type: "Includes fashion boutiques, electronics stores, a large supermarket, and various specialty shops.",
    hotel: "The Duke Boutique Hotel",
}, {
    id: 3,
    name: "Savoy Shopping Arcade",
    location: "Valletta",
    type: "Hosts international and local designer boutiques, traditional Maltese designer wear, and handmade footwear.",
    hotel: "Iniala Harbour House",
}, {
    id: 4,
    name: "Main Street Shopping Complex",
    location: "Paola",
    type: "Home to brands like Mango, Accessorize, Debenhams, Peacocks, and Pull & Bear, along with various local shops.",
    hotel: "Grand Hotel Excelsior",
}, {
    id: 5,
    name: (<>Valletta Daily Market <br></br></>),
    location: "Valletta",
    type: "Sells fresh produce, clothes, local souvenirs, ceramics, blown glass, and traditional Maltese food items.",
    hotel: "Casa Ellul",
}]

export const annualEventsInfo = [{
    id: 0,
    heading: "Diving and Snorkeling",
    desc: "Explore underwater caves and vibrant marine life at Gozo's Blue Hole and Comino's Blue Lagoon.",
}, {
    id: 1,
    heading: "Boat Tours",
    desc: "Enjoy scenic boat tours to Comino and the Blue Lagoon, and harbor cruises around Valletta.",
}, {
    id: 2,
    heading: "Jet Skiing & Sailing",
    desc: "Experience thrilling jet ski rides at Bugibba and Mellieha Bay or rent a sailboat to discover hidden coves around the Maltese Islands.",
}, {
    id: 3,
    heading: "Rolex Middle Sea Race",
    desc: "This is an annual event where sailors sets off from Malta, and sails across the Mediterranean islands. You can watch on TV or live!",
    note: (
        <>
            <div style={{ padding: "5px" }}></div>
            <Recommendation />
        </>
    )
}, {
    id: 4,
    heading: "Malta Marathon",
    desc: "A scenic marathon held every February through historic sites.",
}, {
    id: 5,
    heading: "Malta International Airshow",
    desc: "A spectacular event showcasing aerobatic displays and aircraft.",
}, {
    id: 6,
    heading: "Carnival (Il-Karnival ta' Malta)",
    desc: "February celebrations with parades, costumes, and street parties in Valletta and Nadur.",
}, {
    id: 7,
    heading: "Malta Jazz Festival",
    desc: "A prestigious jazz event held every July.",
}, {
    id: 8,
    heading: "Birgu Fest (Birgufest)",
    desc: "October festival in Birgu with candle-lit streets, cultural events, music, and food stalls.",
}, {
    id: 9,
    heading: "Visit the landmarks!",
    desc: (<><Link/></>),
}]