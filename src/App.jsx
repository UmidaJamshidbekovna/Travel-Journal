import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Data from './Data'

export default function App (){

  const [darkMode, setDarkmode] = React.useState(false)

  function toggleDarkMode(){
    setDarkmode (prevMode => !prevMode)
  }

  const heroPart = Data.map(hero =>{
    return ( 
        <Hero 
            key ={hero.id}
            imgUrl = {hero.imgUrl}  
            title = {hero.title}
            location = {hero.location}
            googleMap = {hero.googleMapsUrl}
            startDate = {hero.startDate}
            endDate = {hero.endDate}
            desc = {hero.desc}   
            darkMode={darkMode}                 
        />
    )
})

  return (
    <div>
        <Navbar darkMode={darkMode}  toggleDarkMode={toggleDarkMode}/>
        {heroPart}
    </div>
  )
}

