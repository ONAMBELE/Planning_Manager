import React from "react";
import "./calender.css"
import { useState } from "react";
import DaysOfMonths from "./daysOfMonth";import Day from "./day";
 "./daysOfMonth"

function Calender(){
    const [date,setDate] = useState("");
    const months = [
        "January","February","March","April","May",
        "June","July","August","September","October"
        ,"November","December",
    ];
    const days = [
        "monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ]
    let today = new Date();
    let day = today.getDate();
    let dayOfWeek = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    


    return (
        <div className="left">
            <div className="calendar">
            <div className="month">
                <i className="fas fa-angle-left prev"></i>
                <div className="date">{days[dayOfWeek] +" " + day + " " + months[month] + " " + year}</div>
                <i className="fas fa-angle-right next"></i>
            </div>
            <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <Day/>
            <div className="days"></div>
            <div className="goto-today">
                <div className="goto">
                <input type="text" placeholder="mm/yyyy" className="date-input" />
                <button className="goto-btn">Go</button>
                </div>
                <button className="today-btn">Today</button>
            </div>
            </div>
        </div>
    )

}

export default Calender;