import { React } from "react";
import Calender from "./components/Calender";
import AddSection from "./components/AddSection";
import "./container.css"

export default function Container(){

    return (
        <div className="container">
            <Calender/>
            <AddSection/>
        </div>
    )

}