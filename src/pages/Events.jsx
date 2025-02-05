import React from "react";
import "./events.css"
import Header from "../components/Header";
import Event from "../components/event"

export default function Events(){

    return(
        <div className="Events bg-gray-900 p-2 box-border">
            <Header/>
            <div className="content flex flex-col">
                <header>
                    <h1>Events</h1>
                    <p className="">Workshops, Demos & Conferences</p>
                </header>

                <main>
                    <Event/>
                    <Event/>
                    <Event/>
                </main>

                <footer className="">
                    <div className="llogo">
                        <a href="#">
                            <img src="rescuetime.svg" alt="ResueTime" />
                            <p>RescueTime</p>
                        </a>
                    </div>
                    <div className="product">
                        <h3>Company</h3>
                        <a href="">Contact</a>
                        <a href="">Product</a>
                    </div>
                    <div className="getStarted">
                        <h3 className="text-1xl ">Get started</h3>
                        <a href="" className="download">
                            <img src="/cloud-download-outline.svg" alt="Download" />
                            <p>Download</p>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )

}