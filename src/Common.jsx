import React from "react";
import web from "../src/images/img.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (  
    <div>
      <section id="header" className="d-flex align-items-center  ">
      <div className="container-fluid ">
        <div className='row'>
          <div className = "col-10 mx-auto">
            <div className="row ">
            <div className="col-md-6 pt-15 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
              <h1>
               {props.name}
              </h1>
              <h1 ><strong className="brand-name" >"Your Dream Dress"</strong></h1>
              <h2 className="my-3">
                We are the passionate costume designers
              </h2>
              <div className="mt-3">
                <NavLink to={props.visit} 
                 className="btn-get-started">
                    {props.btname}
                </NavLink>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-lg-2 header-img justify-content-center  d-flex  ">
              <img src={props.imgsrc}
               className="img-fluid animated" 
               alt="common img"/>
            </div>
            </div>


    </div>
  </div>
</div>  
      </section>
    </div>
  );
};

export default Common ;
