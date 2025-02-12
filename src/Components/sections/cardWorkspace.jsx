import "./cardWorkspace.css"
import CardTemplate from "./cardTemplate"
import PopUpCreateBoard from "../PopUpCreateBoard"
import { useState } from "react"

export default function CardWorkspace(props) {
    const [popUp,setPopUp] = useState("")


    function createBoard() {
        console.log("Hello")
        setPopUp(<PopUpCreateBoard 
            style={
                { 
                    top :"-5em",
                }
            }
            styleBtn={
                {   top :"-2em",
                    width: "1em",
                    height: "1em",
                    padding: "2em",
                }
            }
            styleBtns={
                {
                    width:"21.5em"
                }
            }
        />)

    }

    return (
        <div className="cardWorkspace">
            {
                popUp
            }
            <div className="head">
                <p>T</p>
                <p>Teste</p>
            </div>
            <div className="content">
                <CardTemplate 
                    name="Basic Board"
                />
                <CardTemplate 
                    name="Basic Board"
                    image="/img.jpg"
                />
            </div>
            <button 
                onClick={createBoard}
            >Create a board</button>
        </div>
    )

}