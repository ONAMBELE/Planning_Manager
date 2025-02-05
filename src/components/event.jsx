import React from "react";
import "./event.css"


const Event = ()=>{

    return(
        <div className="container border-1 w-48 h-35 
        bg-[url(/img.jpg)] bg-cover bg-center
        p-1
        ">
            <div className="contenair border-1 w-full h-full p-3
            bg-gray-900/90
            ">
                <section className="date">
                    <p className="day text-xs text-gray-100">
                        Fri
                    </p>
                    <p className="hour text-2xl text-white font-bold">
                        8:50
                    </p>
                </section>
                <section className="event border-1 h-12 overflow-hidden overflow-ellipsis ">
                    <span className="title text-white text-sm font-semibold">
                        Lorem:
                    </span>
                    <span className="description ml-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe et quo ipsa natus accusantium harum.
                    </span>
                </section>
                <section className="localisation">
                    <span>
                        France,Paris
                    </span>
                </section>
            </div>
        </div>
    )

}

export default Event;