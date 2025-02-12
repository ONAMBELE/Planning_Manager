import "./cardWorkspace.css"
import CardTemplate from "./cardTemplate"

export default function CardWorkspace(props) {
    
    return (
        <div className="cardWorkspace">
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
            <button>Create a board</button>
        </div>
    )

}