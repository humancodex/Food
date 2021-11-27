import React ,{useState}from 'react'
import Sidebar from '../components/Sidebar/index'
import Navbar from '../components/Navbar/index'
import LandSection from '../components/LandSection/index'



//Landing page/ Nav with direct access to 
// / (recipes > id detail & search by name )--
// (CREATE ONE  )-- 
// (ABOUT )
//SIDEBAR WITH RECIPES / BEST DIETS FILTER / CREATE ONE / ABOUT 

function LandingPage () {
const [isOpen,setIsOpen]=useState(false)

const toggle = ()=>{
    setIsOpen(!isOpen)
}





    return (
     <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <LandSection/>
     </>
    )
}

export default LandingPage
