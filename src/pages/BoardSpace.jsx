import ActualBoard from "../Components/ActualBoard"
import Header from "../Components/Header"
import Tasks from "../Components/Tasks"
import "./boardSpace.css"



export default function BoardSpace() {

    return (
        <div className="BoardSpace">
            <Header/>
            <ActualBoard
                image="/img.jpg"
                boardName="Madica"
            />
            <Tasks/>
        </div>
    )
    
}