import React from "react";
import "./calender.css"

function Calender(){

    return (
        <div className="left">
            <div className="calendar">
            <div className="month">
                <i className="fas fa-angle-left prev"></i>
                <div className="date">december 2015</div>
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