import React from "react";
import "./header.css"


export default function Header() {

    return(
        <div className="header">
            <div className="logo">
                <img src="rescuetime.svg" alt="ResueTime" />
                <p>RescueTime</p>
            </div>
            <div className="sections">
                <li><a href="">New</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">E-mails</a></li>
            </div>
        </div>
    )
    
}