import "./cardHomeRecently.css"





export default function CardHomeRecently(props) {
    
    return (
        <div className="cardHomeRecently">
            <div className="figure">
                <img src={props.image} alt="" />
                <div className="point"></div>
            </div>
            <div className="infos">
                <h4>{props.name}</h4>
                <span className="type">Personnal space</span>
            </div>
        </div>
    )

}