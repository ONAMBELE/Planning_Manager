import { useState } from "react"
import "./options.css"
import PopUpBuildWorkspace from "./PopUpBuildWorkspace"



export default function Options(){
    const [select,setSelect] = useState(false)
    const [putPopUp,setPutPopUp] = useState("")

    function CreateWorkspace(){
        setPutPopUp(
            <PopUpBuildWorkspace 
                display={"flex"}
            />
        )
        console.log("Hello")
    }

    return (
        <div className="options">
            {
                putPopUp
            }
            <div className="listOptions">
                <li>
                    <img src="/trello.svg" alt="" />
                    <h3>Boards</h3>
                </li>
                <li>
                    <img src="/templates.png" alt="" />
                    <h3>Templates</h3>
                </li>
                <li>
                    <img src="/pulse.svg" alt="" />
                    <h3>Home</h3>
                </li>
            </div>
            <div className="createWorkspace">
                <h3>Workspaces</h3>
                <button onClick={CreateWorkspace}>
                    <img src="/add.png" alt="" />
                    <p>Create a workspace</p>
                </button>
            </div>
        </div>
    )

}