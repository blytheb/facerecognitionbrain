import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
      <div className="ma4 mt0">
        <Tilt className="br3" shadow-2>
            <div className="tilt">👀</div>
        </Tilt>
      </div>  
    );
}

export default Logo