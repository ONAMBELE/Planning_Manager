import React from "react";
import "./workspaces.css"
import Header from "../Components/Header";
import Options from "../Components/Options";
import BoardsSection from "../Components/sections/BoardsSection";
import TemplatesSection from "../Components/sections/TemplatesSection";
import HomeSection from "../Components/sections/HomeSection";
import PopUpBuildWorkspace from "../Components/PopUpBuildWorkspace";
import PopUpCreateBoard from "../Components/PopUpCreateBoard";
import { useState } from "react";




export default function Workspaces(){
    const [section,setSection] = useState(<BoardsSection/>)



    return (
        <div className="Workspaces">
            <Header/>
            <Options
                onSelected={(value)=>{
                    setSection(value)
                }}
            />
            {  
                section
            }
            {/*<PopUpCreateBoard/>*/}
            {/*<PopUpBuildWorkspace/>*/}
        </div>
    )

}
