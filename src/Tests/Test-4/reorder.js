export const reorder = (list,startIndex,endIndex) => {
    const result =Array.from(list);
    const [removed] = result.splice(Number(startIndex),1);
    result.splice(Number(endIndex),0,removed);

    return result
}

export const reorderTasksMap = (
    tasks,
    source,
    destination
) => {

    const current = [...tasks[source.droppableId]];
    const next = [...tasks[destination.droppableId]];
    const target =  current[source.index]

    if(source.droppableId === destination.droppableId){
        const reordered = reorder(
            current, source.index, destination.index
        );
         return {
            ...tasks,
            [source.droppableId] : reordered
        }
    }

    current.splice(source.index,1);
    next.splice(destination.index,0,target);

    return {
        ...tasks, 
        [source.droppableId] : current,
        [destination.droppableId]: next
    }
}