import React from "react"
import {Droppable, Draggable} from "react-beautiful-dnd"


export const  AuthorList = ({listId, listType, tasks}) => {


    return(
        <Droppable
            droppableId={listId}
            type={listType}
            direction="horizontal"
            isCombineEnabled={false}
        >
            {
                dropProvided => (
                    <div {...dropProvided.droppableProps}>
                        <div style={{display:"flex", border : "1px solid red"}}  ref={dropProvided.innerRef}>
                            {tasks.map((task,index) => (
                                <Draggable key={task} draggableId={task} index={index} >
                                    {dragProvided => (
                                        <div
                                            {...dragProvided.dragHandleProps}
                                            {...dragProvided.draggableProps}
                                            ref={dragProvided.innerRef}
                                        >
                                            <div style={{padding: "5px 15px", margin : "1rem", backgroundColor : "black", color : "white"}}>{task}</div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {dropProvided.placeholder}
                        </div>
                    </div>
                )
            }
        </Droppable>
    )
}
