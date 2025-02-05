import React from "react";
import "./header.css"


export default function Header() {

    function changeColor(){
        console.log("SRC")
    }

    return(
        <div className="header bg-gray-900 p-2">
            <a className="logo" href="#">
                <img src="rescuetime.svg" alt="ResueTime" />
                <p>RescueTime</p>
            </a>
            <div className="sections">
                <a href="">
                    <img src="/add-sharp.svg" alt="" />
                    <p>New</p>
                </a>
                <a href="">
                    <img src="/timer-outline.svg" alt="" />
                    <p>Events</p>
                </a>
                <a href="">
                    <img src="/mail-unread-outline.svg" alt="New" />
                    <p>Mails</p>
                </a>
            </div>
        </div>
    )
    
}