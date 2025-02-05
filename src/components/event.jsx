import React from "react";
import "./event.css"
import { useState } from "react";


const Event = (props)=>{


    

    return(
        <div className='container border-1 w-48 h-35 
        bg-cover bg-center
        p-1' style={{backgroundImage:`url(${props.image})`}}>
            <div className="contenair border-1 w-full h-full p-3
            bg-gray-900/90
            ">
                <section className="date">
                    <p className="day text-xs text-gray-100">
                        {props.day}
                    </p>
                    <p className="hour text-2xl text-white font-bold">
                        {props.hour}
                    </p>
                </section>
                <section className="event h-12 overflow-hidden overflow-ellipsis ">
                    <span className="title text-white text-sm font-semibold">
                        {props.title}
                    </span>
                    <span className="description ml-1 text-gray-400 text-xs">
                        {props.message}
                    </span>
                </section>
                <section className="localisation text-xs text-blue-200 font-[500]">
                    <span className="country ">
                        {props.country}
                    </span>,
                    <span className="town">
                        {props.town}
                    </span>
                </section>
            </div>
        </div>
    )

}

export default Event;