import React ,{useState, useTransition, useDeferredValue}from "react"
import {createResource} from "./fetch"
import {Person} from "./person"
import {Num}  from "./num"
import {ErrorBoundary} from "./ErrorBoundry"

const Initialresource = createResource();


const Test3 = () => {

    // const [resource, setResource] = useState(() => createResource())
    const [resource, setResource] = useState(Initialresource)
    // const [startTransition, isPending] = useTransition({
    //     timeoutMs: 5000
    // })
    // const deferredResource = useDeferredValue(resource,{
    //     timeoutMs : 5000
    // })

    // const isStale = deferredResource !== resource

    return(
        <div>
        {/* <React.SuspenseList  revealOrder="forwards || backwards || together ( bez tail )"  tail="hidden || collapse"> */}
            <React.Suspense fallback={<h1>Loading person</h1>}>
                <ErrorBoundary >
                    <Person resource={resource} />
                </ErrorBoundary>
            </React.Suspense>
            <React.Suspense fallback={<h1>Loading num</h1>}>
                <Num resource={resource} />
                {/* <Num resource={defferedResource} /> */}
            </React.Suspense>
        {/* </React.SuspenseList> */}
            <button onClick={() => {
                    // startTransition(() => {
                    //     setResource(createResource())
                    // })
                    setResource(createResource())
                }}>
                refresh data
            </button>
        </div>
    )
}


export default Test3