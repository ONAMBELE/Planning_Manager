import { useState } from "react"
import "./popUpBuildWorkspace.css"



export default function PopUpBuildWorkspace(props) {
    const [visibilityPopUpBuildWorkspace,setVisibilityPopUpBuildWorkspace] = useState(props.display)
    const  [color,setColor] = useState("var(--grey1)")
    const [formValue,setFormValue] = useState("")
    const handleValue = (e)=>{
        setFormValue(e.target.value)
        setColor("#fff")
    }
    
    function setPopUpVisible(){
        setVisibilityPopUpBuildWorkspace("none")
    }
    

    return (
        <div className="PopUpBuildWorkspace" 
            style={{display: visibilityPopUpBuildWorkspace}}

        >
            <button className="remove"
                onClick={setPopUpVisible}
            >
                <img src="/delete1.png" alt=""/>
            </button>
            <form onSubmit={(e)=>{e.preventDefault()}}>

                <h2>Let's build a workspace</h2>
                <span className="boost">Boost your productivity by making it easier for
                    everyone to access boards in one location.
                </span>
                <section className="name">
                    <h4>Workspace name</h4>
                    <input type="text" name="name" id="name" placeholder="Name of your worspace" required/>
                    <p>This is the name your company, team or organisation.</p>
                </section>
                <section className="type">
                    <h4>Workspace type</h4>
                        <select name="categorie" id="categorie" 
                            value={formValue}
                            onChange={handleValue}
                            style={{color:`${color}`}}
                            required
                            
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
                </section>
                <section className="description">
                    <h4>
                        Workspace description <span>Optional</span>
                    </h4>
                    <textarea name="description" 
                        rows={8}
                        maxLength={500}
                        id="description" 
                        style={{resize: "none"}}
                        required
                        placeholder="Our team organizes something here.">
                    </textarea>
                    <span>Get your members on board with a few words about your workspace.</span>
                </section>
                <button type="submit">Continue</button>
            </form>
        </div>
    )

}