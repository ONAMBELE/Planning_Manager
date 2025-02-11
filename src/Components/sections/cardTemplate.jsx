import "./cardTemplate.css"


export default function CardTemplate(props){

    return (
        <div className="cardTemplate"
            style={{
                backgroundImage: `url(${props.image})`
            }}
        >
            <span>Template</span>
            <h4>{props.name}</h4>
        </div>
    )

}