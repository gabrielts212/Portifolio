import React from 'react'
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Sobre from "./../src/components/sobre/sobre";
import Programar from "./../src/components/programar/programar";
const about = () => {
  return (
    <div>
<Header/>
<Sobre/>
<Programar/>
<Footer/>

    </div>
  )
}

export default about