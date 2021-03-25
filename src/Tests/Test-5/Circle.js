import React,{useState,useEffect} from "react"

export const Circle = () => {

    const [rad,setRad] = useState(0)
    const [mouseDown, setMouseDown] = useState(false)
    

    const MouseDown = (e) => {
        setMouseDown(true)
    }
    const MouseUp = (e) => {
        setMouseDown(false)
    }

    const Mousemove = (e) => {
        const Atan = Math.atan2( e.clientY - 250, e.clientX - (window.innerWidth / 2)) * (180 / Math.PI);
        setRad(Atan)
    } 

    useEffect(() => {
        if(mouseDown){
            document.querySelector(".circleBox").addEventListener("mousemove", Mousemove)
        }

        return () => {
            document.querySelector(".circleBox").removeEventListener("mousemove", Mousemove)
        }
    },[mouseDown, setMouseDown])

    return(
        <div
            className="circleBox"
            style={{
                width: "100vw",
                height: "500px",
                display: "flex",
                justifyContent : "center",
                alignItems: "center",
                border: "1px solid black"
            }}
            onMouseUp={MouseUp}
        >
            <div
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius : "100%",
                    border : "1px solid red",
                    display: "flex",
                    justifyContent : "center",
                    alignItems: "flex-start",
                    transform : `rotateZ(${rad + 90}deg)`
                }}
                onMouseDown={MouseDown}
            >
                <div
                    style={{
                        width: "30px",
                        height: "30px",
                        borderBottom : "30px solid black",
                        borderRight: "15px solid transparent",
                        borderLeft: "15px solid transparent"
                    }}
                ></div>
            </div>
        </div>
    )
}
