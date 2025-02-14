import { useState } from "react"
import "./tasks.css"

//Les composants en rapport avec cette page seront codés à l'interieur de ce fichier
export default function Tasks() {
    const [popAdd,setPopAdd] = useState("")



    return (
        <div className="Tasks">
            <TasksHeader
                boardName="Medica"
                user="KB"
            />
            <div className="space">
                {
                    popAdd
                }
                <TaskContainer 
                    title="A faire"
                />
                <TaskContainer 
                    title="En cours"
                />
                <TaskContainer 
                    title="Fait"
                />
            </div>
        </div>
    )
    
}

function TasksHeader(props) {
    return (
        <div className="TasksHeader">
            <header>
                <h2 title="Medica">{props.boardName}</h2>
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
    const [dispPopUp,setDispPopUp] = useState("none")
    const [newTask,setNewTask] = useState("")
    const [addTaskList,setAddTaskList] = useState([])

    let taskList = [{
        value:"name",
        date: "Nov 25, 2025"
    }]

    function getCurrentDate() {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth() + 1
        const date = currentDate.getDate()

        return `${month} ${date}, ${year}`
    }

    function add(e) {
        //console.log(e)
        //if (e.target.localName == "img") {
            //console.log("Clique sur img")
            taskList.push({
                value:newTask,
                date:getCurrentDate()
            })
        //}
        setAddTaskList(taskList)
        //console.log(taskList)
        setDispPopUp("none")
        e.target.textContent = ""
    }

    return (
        <div className="TaskContainer">
            <header>
                <span>{props.title}</span>
                <button>...</button>
            </header>
            <main className="main">
                {
                    addTaskList.map((task,index)=>{
                        //console.log("Task...")
                        return <Task value={task.value} date={task.date}  key={index}/>
                    })
                }
            </main>
            <footer>
                <button className="add"
                    onClick={()=>{
                        //console.log("Yes Click")
                        setDispPopUp("flex")
                        //console.log("Hello")
                    }}
                >
                    <img src="/add1.png" alt="" />
                    <span>Add a Card</span>
                </button>
            </footer>

            <div className="PopUpAddTask"
                style={{
                    display: dispPopUp
                }}
            >
                <div className="value" contentEditable
                    onInput={(e)=>{
                        //console.log(e.target.textContent)
                        setNewTask(e.target.textContent)
                    }}
                >

                </div>
                <button className="add"
                    onClick={
                        (e)=>{
                            add(e)
                        }
                    }
                >
                    <img src="/add1.png" alt=""/>
                    <span>Add a Task</span>
                </button>
            </div>
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
                {props.value}
            </main>
            <footer>
                <div className="date">
                    <img src="/time.svg" alt="" />
                    <span>{props.date}</span>
                </div>
                <div className="user">
                    {/*<span>KB</span>*/}
                </div>
            </footer>
        </div>
    )
}


// function PopUpAddTask() {

//     return (
//         <div className="PopUpAddTask">
//             <div className="value" contentEditable>

//             </div>
//             <button className="add">
//                 <img src="/add1.png" alt="" />
//                 <span>Add a Card</span>
//             </button>
//         </div>
//     )
    
// }