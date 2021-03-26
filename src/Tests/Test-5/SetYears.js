const YearCell = ({x,setYear,setShow}) => {

    const HandleClick = (e) => {
        setYear(e.target.dataset.y)
        setShow("months")
    }

    return (
        <div className="Year" data-y={x} onClick={HandleClick}>
            {x}
        </div>
    )
}

const YearRow = ({a,setYear,setShow}) => {
    return(
        <div className="YearRow">
        {
            a.map(x => {
                return (
                    <YearCell x={x} key={x} setYear={setYear} setShow={setShow} />
                )
            })
        }
        </div>
    )
}

export const SetYears = ({setYear,setShow,YearPart}) => {
    
    let sy = []
    let st = YearPart[0]
    while(st < YearPart[1]){
        let sn = [];
        for(let i = 0; i < 4 ; i++){
            sn.push(st)
            st++;
        }
        sy.push(sn)
    }


    return(
        <>
        {
            sy.map((a,b) => {
                return (
                    <YearRow key={`Year-row-${b}`} a={a} setYear={setYear} setShow={setShow} />
                )
            })
        }
        </>
    )
}