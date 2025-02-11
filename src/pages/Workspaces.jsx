import React from "react";
import "./workspaces.css"
import Header from "../Components/Header";
import Options from "../Components/Options";
import BoardsSection from "../Components/sections/BoardsSection";
import TemplatesSection from "../Components/sections/TemplatesSection";
import HomeSection from "../Components/sections/HomeSection";
import PopUpBuildWorkspace from "../Components/PopUpBuildWorkspace";




export default function Workspaces(){

    return (
        <div className="Workspaces">
            <Header/>
            <Options/>
            <BoardsSection/>
            {/*<PopUpBuildWorkspace/>*/}
        </div>
    )

}
