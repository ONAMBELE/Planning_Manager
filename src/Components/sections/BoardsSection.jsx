import { useState } from "react"
import "./boardSection.css"
import CardRecentlyView from "./cardRecentlyView"
import CardTemplate from "./cardTemplate"
import CardWorkspace from "./cardWorkspace"

export default function BoardsSection(){

    const [select, setSelect] = useState("")

    function handle(event) {
        setSelect(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="BoardsSection">
            
            <div className="mostPopular">
                <img src="/delete1.png" alt="" className="close" />
                <h2>
                    <img src="/templates.png" alt="" />
                    <p>Most Popular templates</p>
                </h2>
                <div className="content">
                    <header>
                        <label htmlFor="categorie">Get going faster with a template from the Trello-x community or </label>
                        <select name="categorie" id="categorie" 
                            value={select}
                            onChange={handle}
                        >
                            <option value="" disabled hidden>choose a category</option>
                            <option value="business">Business</option>
                            <option value="design">Design</option>
                            <option value="education">Education</option>
                            <option value="engeniering">Engeniering</option>
                            <option value="marketing">Marketing</option>
                            <option value="project-management">Project Management</option>
                            <option value="network">Network</option>
                        </select>
                    </header>
                    <main>
                        <CardTemplate 
                            name="Basic Board"
                        />
                        <CardTemplate 
                            name="Basic Board"
                            image="/img.jpg"
                        />
                        <CardTemplate 
                            name="Basic Board"
                            image="/img.jpg"
                        />
                        <CardTemplate 
                            name="Basic Board"
                            image="/img.jpg"
                        />
                        <CardTemplate 
                            name="Basic Board"
                            image="/img.jpg"
                        />
                        
                    </main>
                </div>
            </div>

            <div className="yourWorkspace">
                <h2>YOUR WORKSPACES</h2>
                <div className="container">
                    <CardWorkspace/>

                </div>
            </div>

            <div className="recentlyViewed">
                <h3>
                    <img src="/time.png" alt="" />
                    <p>Recently viewed</p>
                </h3>
                <div className="container">
                    <CardRecentlyView
                        name="Basic Board"
                            image="/img.jpg"
                    />  
                </div>
            </div>

        </div>
    )

}