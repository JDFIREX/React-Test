import React ,{useState} from "react"
import { DragDropContext } from "react-beautiful-dnd"
import {reorderTasksMap} from "./reorder"
import {AuthorList} from "./AuthorList"

const Test4  = () => {

    const [tasks, setTasks] = useState({
        todo : ["task5","task4"],
        order : ["task3"],
        finish : ["task2","task1"]
    })


    return(
        <DragDropContext 
            onDragEnd={(({destination,source}) => {
                if(!destination){
                    return;
                }

                setTasks(
                    reorderTasksMap(
                        tasks,
                        source,
                        destination
                    )
                )
            })}
        >
            <div>
                {Object.entries(tasks).map( ([key,tasks]) => (
                    <AuthorList 
                        internalScroll
                        key={key}
                        listId={key}
                        listType="CARD"
                        tasks={tasks}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}


export default Test4