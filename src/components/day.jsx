import React from "react";
import "./day.css"

export default function Day(props){

    return(
        <td className="day">
            <p>{props.day}</p>
        </td>
    )

}