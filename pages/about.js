import React from "react";
import Sobre from "./../src/components/sobre/sobre";
import Programar from "./../src/components/programar/programar";
import Headersobre from "@/src/components/Headersobre/Headersobre";
import Footersobre from "@/src/components/Footersobre/Footersobre";
const about = () => {
  return (
    <div>
      <Headersobre />
      <Sobre />
      <Programar />
      <Footersobre />
    </div>
  );
};

export default about;
