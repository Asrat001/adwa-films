import React from "react"
import Hero from "./componets/Hero"
import Work from "./componets/Work"
import Team from "./componets/Team/Team"
import Service from "./componets/Service"
import Contact from "./componets/Contact"
import Footer from "./componets/Footer"




function App() {

  return (
    <>
    <div className=" bg-[#04152d]">
    <Hero/>
    <Work/>
    <Service/>
    <Team/>
    <Contact/>
    <Footer/>
    </div>
    
     
    </>
  )
}

export default App
