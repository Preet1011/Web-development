
import React, { useEffect } from 'react';
export default function Home() {

  return (
    <div className='home' style={{backgroundImage:"pick.jpg"}} >
     <div className="slider">
        
        <div className="slide active" id="s1">
          <img src={require("../../images/pick.jpg")}></img>
        </div>
        
    </div>
    <div id="heading"> 
      <h1>
        JW MARRIOTT
      </h1>
      <h4>
        Hotels & Resorts
      </h4>
    </div>
    </div>
  )
};
