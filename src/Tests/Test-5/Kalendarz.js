import React, {useEffect, useState} from "react"
import "./Kalendarz.css"
import {Btns,Days} from "./KalFunction"
import {SetKal} from "./SetKal"
import {SetMonths} from "./SetMonths"
import {SetYears } from "./SetYears"

export const Kalendarz = () => {

    const date = new Date()
    const [Month, setMonth] = useState(date.getMonth())
    const [Year, setYear] = useState(date.getFullYear())
    const currentDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const [selectDay, setSelectDay] = useState(currentDay)
    const [show, setShow] = useState("days")
    const [YearPart, setYearPart] = useState([2019,2030])


    useEffect(() => {
        if(Year < YearPart[0]){
            setYearPart([Number(YearPart[0]) - 10, Number(YearPart[1]) - 10])
        }else if(Year > YearPart[1]){
            setYearPart([Number(YearPart[0]) + 10, Number(YearPart[1]) + 10])
        }
    },[Year,setYear])


    return (
        <div
        className="Kalendarz_box"
        >
            
            <div className="Kalendarz">

                <Btns show={show} setShow={setShow} setMonth={setMonth} setYear={setYear} setYearPart={setYearPart} Year={Year} Month={Month} YearPart={YearPart} />
                    
                {
                    show === "days" && (
                        <Days />
                    )
                }

                <div className="kal">
                {
                    show === "days" ? (
                        <SetKal Year={Year} Month={Month} currentDay={currentDay} setSelectDay={setSelectDay} selectDay={selectDay} setYear={setYear} setMonth={setMonth} />
                    ):
                    show === "months" ? (
                        <SetMonths Year={Year} setMonth={setMonth} setShow={setShow} />
                    ) : (
                        <SetYears  setYear={setYear} setShow={setShow} YearPart={YearPart} />
                    )
                }
                </div>

            </div>


        </div>
    )
}