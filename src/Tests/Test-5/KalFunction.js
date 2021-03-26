export const GetMonthName = (m) => {
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
export const Days = () => {
    return (
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

export const ChangeMonth = (e,Year,setYear,Month,setMonth) => {
    if(e.target.dataset.c === "dec"){
        let nm = Number(Month) - 1;
        if(nm < 0) {
            setYear(Number(Year) - 1)
            setMonth(11)
        }else{
            setMonth(nm)
        }
    }else{
        let nm = Number(Month) + 1;
        if(nm > 11) {
            setYear(Number(Year) + 1)
            setMonth(0)
        }else{
            setMonth(nm)
        }
    }
}
const ChangeYear = (e,Year,setYear) => {
    if(e.target.dataset.c === "dec"){
        setYear((Number(Year) - 1))
    }else{
        setYear((Number(Year) + 1))
    }
}
const ChangeYearPart = (e,setYearPart,YearPart) => {
    if(e.target.dataset.c === "dec"){
        setYearPart([Number(YearPart[0]) - 10, Number(YearPart[1]) - 10])
    }else{
        setYearPart([Number(YearPart[0]) + 10, Number(YearPart[1]) + 10])
    }
}

const CenterButton = ({show,setShow,YearPart,Year,Month}) => {

    const HandleClick = (e) => {
        switch(show){
            case "days" :
                setShow("months")
            ; break;
            case "months" :
                setShow("years")
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

export const Btns = ({show,setShow,setMonth,setYear,setYearPart,Year,Month,YearPart}) => {
    return (
        <div className="K_btn">
            {show === 'years' && <button onClick={(e) => ChangeYearPart(e,setYearPart,YearPart)} data-c="dec">R--</button>} 
            {show !== "years" && <button onClick={(e) => ChangeYear(e,Year,setYear)} data-c="dec">R--</button>}
            {show === "days" && <button onClick={(e) => ChangeMonth(e,Year,setYear,Month,setMonth)} data-c="dec">M--</button>}
            <CenterButton show={show} setShow={setShow} Year={Year} YearPart={YearPart} Month={Month} />
            {show === "days" && <button onClick={(e) => ChangeMonth(e,Year,setYear,Month,setMonth)} data-c="inc">M++</button>}
            {show !== "years" && <button onClick={(e) => ChangeYear(e,Year,setYear)} data-c="inc">R++</button>}
            {show === 'years' && <button onClick={(e) => ChangeYearPart(e,setYearPart,YearPart)} data-c="inc">R++</button>} 
        </div>
    )
}
