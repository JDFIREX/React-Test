import React, {useEffect, useState} from "react"
import "./Kalendarz.css"



const GetMonthName = (m) => {
    switch(m){
        case 1 :
            return "JANUARY"; 
        case 2 :
          return "FEBRUARY"; 
        case 3 :
           return "MARCH"; 
        case 4 :
           return "APRIL"; 
        case 5 :
           return "MAY"; 
        case 6 :
           return "JUNE";
        case 7 :
           return "JULY"; 
        case 8 :
           return "AUGUST"; 
        case 9 :
           return "SEPTEMBER";
        case 10 :
            return "OCTOBER"; 
        case 11 :
           return "NOVEMBER";
        case 12 :
        return "DECEMBER";
        default : return "";
    }
}




export const Kalendarz = () => {

    const [date, setDate] = useState(new Date())
    const [Month, setMonth] = useState(date.getMonth())
    const [Year, setYear] = useState(date.getFullYear())
    const currentDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const [selectDay, setSelectDay] = useState(currentDay)
    const [show, setShow] = useState("days")
    const [YearPart, setYearPart] = useState([2019,2030])

    console.log(Year)

    useEffect(() => {
        if(Year < YearPart[0]){
            setYearPart([YearPart[0] - 10, YearPart[1] - 10])
        }else if(Year > YearPart[1]){
            setYearPart([YearPart[0] + 10, YearPart[1] + 10])
        }
    },[Year,setYear])

    const ChangeMonth = (e) => {
        if(e.target.dataset.c === "dec"){
            let nm = Number(Month) - 1;
            if(nm < 0) {
                setYear(Year - 1)
                setMonth(11)
            }else{
                setMonth(nm)
            }
        }else{
            let nm = Month + 1;
            if(nm > 11) {
                setYear(Year + 1)
                setMonth(0)
            }else{
                setMonth(nm)
            }
        }
    }
    const ChangeYear = (e) => {
        if(e.target.dataset.c === "dec"){
            setYear(Year - 1)
        }else{
            setYear(Year + 1)
        }
    }
    const DayOtherMonth = (e,d) => {
        ChangeMonth(e)
        setSelectDay(d)
    }

    const SetKal = () => {
        let sDay = 1
        let dayInWeek = new Date(Year,Month,sDay).getDay();
        let back = 2 - dayInWeek;
        let days = []
        let l = 0;
        while(l < 42){
            let ld =[]
            for(let i = 0 ; i <= 6; i++){
                let d = new Date(Year,Month,back)
                ld.push({
                    day : d.getDate(),
                    month : d.getMonth() + 1,
                    Year : d.getFullYear()
                })
                back++;
                l++
            }
            days.push(ld)
        }
        return GenerateCal(days)
    }

    const NotThisMonth =({x,d,f}) => {
        return (
            <div 
                onClick={(e) => DayOtherMonth(e,d)}
                data-c={f}
                className="day not_this_month" 
                style={{backgroundColor: "green"}}
            >
                {x.day}
        </div>
        )
    }

    const Day = ({x,d,s,c}) => {
        return(
            <div 
                className={`day  ${c}`} 
                onClick={() => setSelectDay(d)}
                style={s}
            >
                    {x.day}
                    <br />
                    {
                        selectDay === d && (
                            <div>wybrany </div>
                        )
                    }
            </div>
        )
    }

    const GenerateCal = (days) => {
        return days = days.map((a,b) => {
            let f = b < 3 ? "dec" : "inc";
            
            return(
                <div className="kal_row" key={`${Year}-${Month + 1}-Week-${b + 1}`}>
                    {
                        a.map(x => { 
                            let d = `${x.Year}-${x.month}-${x.day}`;

                            if(x.month !== Month + 1){
                                return <NotThisMonth x={x} d={d} f={f} key={d} />
                            }
                            
                            if(currentDay === d) {
                                return <Day x={x} d={d} s={{backgroundColor : "red"}} c={"current_day"} key={d}/>
                            }

                            return <Day x={x} d={d} key={d}/>

                        })
                    }
                </div>
            )
        })
    }
                    
    const CenterButton = ({show}) => {

        const HandleClick = (e) => {
            switch(show){
                case "days" :
                    setShow("months")
                ; break;
                case "months" :
                    setShow("years")
                    // setInner(`${YearPart[0]}-${YearPart[1]}`)
                ; break;
                default : setShow(show); break;
            }
        } 
        
        return (
            <button className="K_current"  onClick={HandleClick}>
                {
                    show === "days" ? (
                        `${GetMonthName(Month + 1)} ${Year}`
                    ) : 
                    show === "months" ? (
                        Year
                    ) : (
                        `${YearPart[0]}-${YearPart[1]}`
                    )
                }
            </button>
        )
    }


    const MonthCell = ({x}) => {

        const HandleClick = (e) => {
            setMonth(e.target.dataset.m - 1)
            setShow("days")
        }

        return (
            <div className="Month" data-m={x.monthId} onClick={HandleClick} >
                {x.month}
            </div>
        )
    }

    const MonthRow = ({a}) => {

        return (
            <div className="Month_row" >
                {
                    a.map(x => {
                        return (
                            <MonthCell  key={`${x.year}-${x.month}`} x={x}/>
                        )
                    })
                }
            </div>
        )

    }

    const SetMonths = () => {

        let months = [];
        let c = 1;
        while(c <= 12){
            let m = [];
            for(let j = 0; j < 4; j++){
                m.push({
                    monthId : c,
                    month : GetMonthName(c),
                    year : Year
                })
                c++;
            }
            months.push(m)
        }

        return (
            <>
            {
                months.map((a,b) => {
                    return(
                        <MonthRow key={`${Year}-Months-${b}`} a={a}/>
                    )
                })
            }
            </>
        )
    }

    const SetYears = () => {
        
    }

    return (
        <div
        className="Kalendarz_box"
        >
            
            <div className="Kalendarz">

                <div className="K_btn">
                    <button onClick={ChangeYear} data-c="dec">R--</button>
                    {show === "days" && <button onClick={ChangeMonth} data-c="dec">M--</button>}
                    <CenterButton show={show}/>
                    {show === "days" && <button onClick={ChangeMonth} data-c="inc">M++</button>}
                    <button onClick={ChangeYear} data-c="inc">R++</button>
                </div>
                    
                {
                    show === "days" && (
                        <div className="days">
                            <p>Mon</p>
                            <p>Thue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                            <p>Sat</p>
                            <p>Sun</p>
                        </div>
                    )
                }

                <div className="kal">
                {
                    show === "days" ? (
                        <SetKal />
                    ):
                    show === "months" ? (
                        <SetMonths />
                    ) : (
                        <SetYears />
                    )
                }
                </div>

            </div>


        </div>
    )
}