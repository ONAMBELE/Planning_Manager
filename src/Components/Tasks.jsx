import "./tasks.css"

//Les composants en rapport avec cette page seront codés à l'interieur de ce fichier
export default function Tasks() {

    return (
        <div className="Tasks">
            <TasksHeader/>
            <TaskContainer/>

        </div>
    )
    
}

function TasksHeader(props) {
    return (
        <div className="TasksHeader">
            <header>
                <h2 title="Mdica">{props.boardName}</h2>
                <img src="/star.svg" alt="" />
                <img src="/globe.png" alt="" />
                <button>
                    <img src="/stats.svg" alt="" />
                    <span>Board</span>
                </button>
                <img src="/chevron-down.svg" alt="" />
            </header>
            <div className="AddOptions">
                {/*Ici nous inserrerons les icons corresondants aux services additionnelles*/}
            </div>
            <div className="users">
                <p>{props.user}</p>
                <button>...</button>
            </div>
        </div>
    )
}

function TaskContainer(props) {

    return (
        <div className="TaskContainer">
            <header>
                <span>{props.title}</span>
                <button>...</button>
            </header>
            <main>
                <Task/>
                <Task/>
            </main>
            <footer>
                <button className="add">
                    <img src="/add1.png" alt="" />
                    <span>Add a Card</span>
                </button>

            </footer>
        </div>
    )
    
}

function Task(props){
    return (
        <div className="Task">
            <header>
                <img src="/checkmark1.svg" alt="" title="Valider la tache"/>
                <img src="/trash.svg" alt="" />
                <img src="/pencil.svg" alt="" />
            </header>
            <main className="content">
                {props.task}
            </main>
            <footer>
                <div className="date">
                    <img src="/time.png" alt="" />
                    <span>{props.date}</span>
                </div>
                <div className="user">
                    {/*<span>KB</span>*/}
                </div>
            </footer>
        </div>
    )
}