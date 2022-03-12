import React from "react";
import web from "../src/images/img.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (  
    <div>
      <Common 
      name = " You name it, We have it " 
      imgsrc={web}
      visit="/Service"
      btname="Lets Start"  
      />
    </div>    
  );
};

export default Home ;
