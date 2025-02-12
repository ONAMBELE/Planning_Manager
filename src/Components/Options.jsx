import { useState } from "react"
import "./options.css"
import PopUpBuildWorkspace from "./PopUpBuildWorkspace"
import BoardsSection from "./sections/BoardsSection"
import TemplatesSection from "./sections/TemplatesSection"
import HomeSection from "./sections/HomeSection"



export default function Options(props){
    const [style1,setStyle1] = useState("selected")
    const [style2,setStyle2] = useState("")
    const [style3,setStyle3] = useState("")
    
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
                <li className={style1}
                    onClick={()=>{
                        setStyle1("selected")
                        setStyle2("")
                        setStyle3("")
                        props.onSelected?.(<BoardsSection/>)
                    }}
                >
                    <img src="/trello.svg" alt="" />
                    <h3>Boards</h3>
                </li>
                <li className={style2}
                    onClick={()=>{
                        setStyle1("")
                        setStyle2("selected")
                        setStyle3("")
                        props.onSelected?.(<TemplatesSection/>)
                    }}
                >
                    <img src="/templates.png" alt="" />
                    <h3>Templates</h3>
                </li>
                <li className={style3}
                    onClick={()=>{
                        setStyle1("")
                        setStyle2("")
                        setStyle3("selected")
                        props.onSelected?.(<HomeSection/>)
                    }}
                >
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