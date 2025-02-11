import "./cardRecentlyView.css"


export default function CardRecentlyView(props) {
    
    return (
        <div className="cardRecentlyView"
            style={{
                backgroundImage: `url(${props.image})`
            }}
        >
            <h4>{props.name}</h4>
            <div className="footer">
                <img src="/globe.png" alt="" className="globe"/>
                <img src="/globe.png" alt="" className="star"/>
            </div>
        </div>
    )

}