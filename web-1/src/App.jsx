import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import AnimalList from './components/AnimalList'
import ZooMap from './components/ZooMap'
import Maps from './components/Maps'
import Event from './components/Event'
import Reservasi from './components/Reservasi'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Event></Event>
      <AnimalList></AnimalList>
      <Reservasi></Reservasi>
      <Maps></Maps>
      <AboutUs></AboutUs>
    </>
  )
}

export default App
