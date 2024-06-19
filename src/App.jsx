import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import BackButton from './components/BackButton'

import Landing from './sections/Landing'
import Cities from './sections/Cities'
import Landmarks from './sections/Landmarks/Landmarks'
import Visit from './sections/Visit/Visit'
import Sources from './sections/Sources'
import Facts from './sections/Facts'
import History from './sections/History'

import Activities from './sections/Visit/Activities'
import Places from './sections/Visit/Places'
import Restaurants from './sections/Visit/Restaurants'
import Hotels from './sections/Visit/Hotels'
import Malls from './sections/Visit/Malls'

import Airlines from './sections/Visit/Airlines'

import Valletta from './sections/Cities/Valletta'
import StJulians from './sections/Cities/StJulians'
import StPaulsBay from './sections/Cities/StPaulsBay'
import Mdina from './sections/Cities/Mdina'
import Sliema from './sections/Cities/Sliema'

import Influence from './sections/Influence'

import NotFound from './sections/NotFound'

const RouterConfig = () => {
  const routes = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '*',
      element: (
        <>
          <BackButton />
          <div className="content">
            {useRoutes([
              { path: 'cities', element: <Cities /> },
              { path: 'cities/valletta', element: <Valletta /> },
              { path: 'cities/st-julians', element: <StJulians /> },
              { path: 'cities/st-pauls-bay', element: <StPaulsBay /> },
              { path: 'cities/mdina', element: <Mdina /> },
              { path: 'cities/sliema', element: <Sliema /> },
              { path: 'landmarks', element: <Landmarks /> },
              { path: 'influence', element: <Influence /> },
              { path: 'history', element: <History /> },
              { path: 'visit-malta', element: <Visit /> },
              { path: 'visit-malta/activities', element: <Activities /> },
              { path: 'visit-malta/places-to-go', element: <Places /> },
              { path: 'visit-malta/restaurants', element: <Restaurants /> },
              { path: 'visit-malta/hotels', element: <Hotels /> },
              { path: 'visit-malta/airlines', element: <Airlines /> },
              { path: 'visit-malta/malls', element: <Malls /> },
              { path: 'fun-facts', element: <Facts /> },
              { path: 'sources', element: <Sources /> },
              { path: '*', element: <NotFound /> },
            ])}
          </div>
        </>
      ),
    },
  ];

  return useRoutes(routes);
};


const App = () => {

  return (
    <>
      <BrowserRouter basename="/malta-guide">
        <ScrollToTop />
        <RouterConfig />
      </BrowserRouter>
    </>
  )
}

export default App