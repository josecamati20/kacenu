import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar'

import Banner from './components/Banner/Banner';
import Trusted from './components/Trusted/Trusted';
import Resource from './components/Resource/Resource';
import Designed from './components/Designed/Designed';
import Why from './components/Why/Why';
import FAQ from './components/FAQ/FAQ';
import Saying from './components/Saying/Saying.';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>

      <NavBar />
      <Banner/>
      <Trusted/>
      <Resource />
      <Saying/>
      <Why/>
      <FAQ/>
      <Designed/>
      <Footer/>
    </>
  )
}

export default App
