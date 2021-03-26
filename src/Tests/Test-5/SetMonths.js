import {GetMonthName} from "./KalFunction"


const MonthCell = ({x,setMonth,setShow}) => {

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

const MonthRow = ({a,setMonth,setShow}) => {

    return (
        <div className="Month_row" >
            {
                a.map(x => {
                    return (
                        <MonthCell  key={`${x.year}-${x.month}`} x={x}  setMonth={setMonth} setShow={setShow} />
                    )
                })
            }
        </div>
    )

}

export const SetMonths = ({Year,setMonth,setShow}) => {

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
                    <MonthRow key={`${Year}-Months-${b}`} a={a} setMonth={setMonth} setShow={setShow} />
                )
            })
        }
        </>
    )
}