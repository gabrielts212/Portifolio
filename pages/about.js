import React from "react";
import Sobre from "./../src/components/sobre/sobre";
import Programar from "./../src/components/programar/programar";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
const about = () => {
  return (
    <div>
      <Header  title="Título do Header" />
      <Sobre />
      <Programar />
      <Footer />
    </div>
  );
};

export default about;
