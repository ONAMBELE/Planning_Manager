import CardHomeRecently from "./cardHomeRecently"
import "./homeSection.css"
import PopUpCreateBoard from "../PopUpCreateBoard"
import { useState } from "react"


export default function HomeSection() {
    const [popUp,setPopUp] = useState("")
    
    
    function createBoard() {
        console.log("Hello")
        setPopUp(<PopUpCreateBoard 
            style={
                { 
                    //top :"-5em",
                    padding:"1em"
                }
            }
            /*styleBtn={
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
            }*/
        />)
    }
    
    return (
        <div className="HomeSection">
            {
                popUp
            }
            <div className="recentlyViewed-Home">
                <h3>
                    <img src="/time.png" alt="" />
                    <p>Recently viewed</p>
                </h3>
                <div className="content">
                    <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                    <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                </div>
            </div>
            <div className="links">
                <h3>Links</h3>
                <div onClick={createBoard}>
                    <button>
                        +
                    </button>
                    <p>Create a board</p>
                </div>
            </div>
        </div>
    )

}
