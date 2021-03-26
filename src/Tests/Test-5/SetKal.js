import {ChangeMonth} from "./KalFunction"

const DayOtherMonth = (e,d,Year,setYear,Month,setMonth,setSelectDay) => {
    ChangeMonth(e,Year,setYear,Month,setMonth)
    setSelectDay(d)
}

const NotThisMonth =({x,d,f,setYear,Year,Month,setMonth,setSelectDay}) => {
    return (
        <div 
            onClick={(e) => DayOtherMonth(e,d,Year,setYear,Month,setMonth,setSelectDay)}
            data-c={f}
            className="day not_this_month" 
            style={{backgroundColor: "green"}}
        >
            {x.day}
    </div>
    )
}

const Day = ({x,d,s,c,setSelectDay,selectDay}) => {
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

const GenerateCal = (days,Year,Month,currentDay,setSelectDay,selectDay,setYear,setMonth) => {
    return days = days.map((a,b) => {
        let f = b < 3 ? "dec" : "inc";
        
        return(
            <div className="kal_row" key={`${Year}-${Month + 1}-Week-${b + 1}`}>
                {
                    a.map(x => { 
                        let d = `${x.Year}-${x.month}-${x.day}`;

                        if(x.month !== Month + 1){
                            return <NotThisMonth x={x} d={d} f={f} key={d} setYear={setYear} Year={Year} Month={Month} setMonth={setMonth} setSelectDay={setSelectDay} />
                        }
                        
                        if(currentDay === d) {
                            return <Day x={x} d={d} s={{backgroundColor : "red"}} c={"current_day"} key={d} setSelectDay={setSelectDay} selectDay={selectDay} />
                        }

                        return <Day x={x} d={d} key={d} setSelectDay={setSelectDay} selectDay={selectDay}/>

                    })
                }
            </div>
        )
    })
}


export const SetKal = ({Year,Month,currentDay,setSelectDay,selectDay,setYear,setMonth}) => {
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
    return GenerateCal(days,Year,Month,currentDay,setSelectDay,selectDay,setYear,setMonth)
}