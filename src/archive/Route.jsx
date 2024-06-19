import React from 'react'

const Route = () => {
  return (
    <>
          <Routes>
            <Route path="/" element={<Landing />} />
              <Route
                path="*"
                element={
                  <>
                    <BackButton />
                    <div className="content">
                      <Routes>

                        {/* City Routes */}
                        <Route path="/cities" element={<Cities />}/>

                        <Route path="/cities/valletta" element={<Valletta />}/>
                        <Route path="/cities/st-julians" element={<StJulians />}/>
                        <Route path="/cities/st-pauls-bay" element={<StPaulsBay />}/>
                        <Route path="/cities/mdina" element={<Mdina />}/>
                        <Route path="/cities/sliema" element={<Sliema />}/>

                        {/* Landmarks */}
                        <Route path="/landmarks" element={<Landmarks />}/>

                        {/* Islands */}
                        <Route path="/influence" element={<Influence />}/>

                        {/* History */}
                        <Route path="/history" element={<History />}/>

                        {/* Visit Malta */}
                        <Route path="/visit-malta" element={<Visit />}/>
                        <Route path="/visit-malta/activities" element={<Activities />}/>
                        <Route path="/visit-malta/places-to-go" element={<Places />}/>
                        <Route path="/visit-malta/restaurants" element={<Restaurants />}/>
                        <Route path="/visit-malta/hotels" element={<Hotels />}/>
                        <Route path="/visit-malta/airlines" element={<Airlines />}/>
                        <Route path="/visit-malta/malls" element={<Malls />}/>

                        {/* Fun facts */}
                        <Route path="fun-facts" element={<Facts />}/>

                        {/* Sources */}
                        <Route path="/sources" element={<Sources />}/>

                        <Route path="/*" element={<NotFound />}/>
                      </Routes>
                    </div>
                  </>
                }
            />
          </Routes>
    </>
  )
}

export default Route