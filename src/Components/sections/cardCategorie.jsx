import "./cardCategorie.css"


export default function CardCategorie(props) {
    
    return (
        <div className="cardCategorie">
            <figure>
                <img src={props.image} alt="" />
                <figcaption>{props.name}</figcaption>
            </figure>            
        </div>
    )

}