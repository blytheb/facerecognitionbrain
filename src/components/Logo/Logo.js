import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="tilt br3 shadow-3">
                <div className="pa3">
                    <img style={{paddingTop: '5px'}} src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
        );
}

export default Logo