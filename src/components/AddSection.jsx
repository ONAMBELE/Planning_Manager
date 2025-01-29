import React from "react";
import "./addSection.css"


export default function AddSection(){

    return (
        <div className="right">
            <div className="today-date">
                <div className="event-day">wed</div>
                <div className="event-date">12th december 2022</div>
            </div>
            <div className="events"></div>
            <div className="add-event-wrapper">
                <div className="add-event-header">
                    <div className="title">Add Event</div>
                    <i className="fas fa-times close"></i>
                </div>
                <div className="add-event-body">
                    <div className="add-event-input">
                        <input type="text" placeholder="Event Name" className="event-name" />
                    </div>
                    <div className="add-event-input">
                        <input
                            type="text"
                            placeholder="Event Time From"
                            className="event-time-from"
                        />
                    </div>
                    <div className="add-event-input">
                        <input
                            type="text"
                            placeholder="Event Time To"
                            className="event-time-to"
                        />
                    </div>
                </div>
                <div className="add-event-footer">
                    <button className="add-event-btn">Add Event</button>
                </div>
            </div>
      </div>
    )

}