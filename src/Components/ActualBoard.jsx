import "./actualBoard.css"


export default function ActualBoard(props){

    return(
        <div className="ActualBoard">
            <div className="typeOfSpace">
                <h3>
                    <span>P</span>
                    <span>Personal space</span>
                </h3>
                <img src="/back.svg" alt="" />
            </div>
            <div className="actualBoard">
                <h3>Your Board</h3>
                <figure>
                    <img src={props.image} alt="" />
                    <figcaption>{props.boardName}</figcaption>
                </figure>
            </div>
        </div>
    )

}