import React from "react";
import "./header.css"

function Header(){

    return(
        <div className="Header">
            <div className="left">
                <div className="logo">
                    <img src="/calendar.png" alt="calendar" />
                    <h1>Trello-X</h1>
                </div>
                <ul>
                    <li>
                        <button>Workspaces</button>
                        <img src="/expand_arrow.png" alt="" />
                    </li>
                    <li>
                        <button>Recent</button>
                        <img src="/expand_arrow.png" alt="" />
                    </li>
                    <li>
                        <button>Starred</button>
                        <img src="/expand_arrow.png" alt="" />
                    </li>
                    <li>
                        <button>Templates</button>
                        <img src="/expand_arrow.png" alt="" />
                    </li>
                    <li>
                        <button className="create">Create</button>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="search" name="Search" id="search" placeholder="Search"/>
                </div>
                <div className="user">
                    <a href="">
                        <img src="/notifications.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/help.svg" alt="" />
                    </a>
                    <a href="" className="profil">
                       KB
                    </a>
                </div>
            </div>

        </div>
    )

}


export default Header
