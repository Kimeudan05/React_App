import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Home from './pages/Home'
import HelpLayout from './pages/help/HelpLayout'
import Faq from './pages/help/Faq'
import EmailUs from './pages/help/EmailUs'
import RockPaper from './pages/projects/RockPaper'
import Calculator from './pages/projects/Calculator'
import Dom from './pages/projects/Dom'
import NotFound from './pages/NotFound'
import ProjectsLayout from './pages/ProjectsLayout'

const routerDev = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='project' element={<ProjectsLayout />} >
      <Route path='rock' element={<RockPaper/>} />
      <Route path='calculator' element={<Calculator/> } />
      <Route path='dom' element={ <Dom/>} />
    </Route>
    <Route path='help' element={<HelpLayout />} >
      <Route path='faq' element={<Faq />} />
      <Route path='email' element={ <EmailUs/>} />
    </Route>
    <Route path='*' element={ <NotFound/>} />
  </Route>
)

);



const App = () => {
  return (
    <RouterProvider router={routerDev} />
  )
}

export default App