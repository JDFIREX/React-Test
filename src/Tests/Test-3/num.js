import React from "react"


export const Num = ({resource}) => {

    const n = resource.num.read()

    return(
        <div>
            random numebr : {n}
        </div>
    )
}