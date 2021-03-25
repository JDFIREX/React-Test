import React, {useState} from "react"
import "./Kalendarz.css"



const GetMonthName = (m) => {
    switch(m){
        case 0 :
            return "JANUARY"; 
        case 1 :
          return "FEBRUARY"; 
        case 2 :
           return "MARCH"; 
        case 3 :
           return "APRIL"; 
        case 4 :
           return "MAY"; 
        case 5 :
           return "JUNE";
        case 6 :
           return "JULY"; 
        case 7 :
           return "AUGUST"; 
        case 8 :
           return "SEPTEMBER";
        case 9 :
            return "OCTOBER"; 
        case 10 :
           return "NOVEMBER";
        case 11 :
        return "DECEMBER";
        default : return "";
    }
}




export const Kalendarz = () => {

    const [date, setDate] = useState(new Date())
    const [Month, setMonth] = useState(date.getMonth())
    const [Year, setYear] = useState(date.getFullYear())


    const ChangeMonth = (e) => {
        if(e.target.name === "dec"){
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
        if(e.target.name === "dec"){
            setYear(Year - 1)
        }else{
            setYear(Year + 1)
        }
    }

    const SetKal = (Year,Month) => {
        let sDay = 1
        let dayInWeek = new Date(Year,Month,sDay).getDay();
        let back = 1 - dayInWeek;
        let days = []
        let daysInMonth = new Date(Year,Month + 1,0).getDate();
        

        for(let i = 0 ; i > back; i--){
            let d = new Date(Year,Month,i)
            days.unshift({
                day : d.getDate(),
                month : d.getMonth() + 1,
                Year : d.getFullYear()
            })
        }
        for(let i = 1; i <= daysInMonth; i++){
            let d = new Date(Year,Month,i)
            days.push(
                ({
                    day : d.getDate(),
                    month : d.getMonth() + 1,
                    Year : d.getFullYear()
                })
            )
        }

        let daysRes = (6 * 7) - days.length;

        for(let i = 1; i <= daysRes; i++){
            let d = new Date(Year,Month + 1,i)
            days.push(
                ({
                    day : d.getDate(),
                    month : d.getMonth() + 1,
                    Year : d.getFullYear()
                })
            )
        }
        days  = [
            [days[0],days[1],days[2],days[3],days[4],days[5],days[6]],
            [days[7],days[8],days[9],days[10],days[11],days[12],days[13]],
            [days[14],days[15],days[16],days[17],days[18],days[19],days[20]],
            [days[21],days[22],days[23],days[24],days[25],days[26],days[27]],
            [days[28],days[29],days[30],days[31],days[32],days[33],days[34]],
            [days[35],days[36],days[37],days[38],days[39],days[40],days[41]],
        ]
        console.log(days)
        days = days.map((a,b) => {
            return(
                <div className="kal_row" key={`${Year}-${Month + 1}-Week-${b + 1}`}>
                    {
                        a.map(x => {
                            let m = x.month;
                            if(m !== Month + 1){
                                return (
                                    <div 
                                            className="day" 
                                            key={`${x.Year}-${x.month}-${x.day}`} 
                                            style={{backgroundColor: "green"}}
                                        >
                                            {x.day}
                                    </div>
                                )
                            }else{
                                return (
                                    <div 
                                        className="day" 
                                        key={`${x.Year}-${x.month}-${x.day}`} 
                                    >
                                            {x.day}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )
        })
        return days
    }

    // console.log(new Date(Year,Month,40), new Date(Year,Month,40).toString().split(" ")[0])
    // console.log(new Date(Year,Month,40).getDate())



    return (
        <div
        className="Kalendarz_box"
        >
            
            <div className="Kalendarz">

                <div className="K_btn">
                    <button onClick={ChangeYear} name="dec">R--</button>
                    <button onClick={ChangeMonth} name="dec">M--</button>
                    <button className="K_current">{GetMonthName(Month)} {Year}</button>
                    <button onClick={ChangeMonth} name="inc">M++</button>
                    <button onClick={ChangeYear} name="inc">R++</button>
                </div>
                    
                <div className="days">
                    <p>Mon</p>
                    <p>Thue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                    <p>Sun</p>
                </div>

                <div className="kal">
                        {SetKal(Year,Month)}
                </div>

            </div>


        </div>
    )
}