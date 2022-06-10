import React, {useEffect, useState} from "react";
import set = Reflect.set;

export default {
    title: 'UseEffect demo',
}




export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();

    })
    useEffect(() => {
        console.log("useEffect only first render(componentDidMount)");
        document.title = counter.toString();

    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();

    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    console.log("SetTimeoutExample");

    useEffect(() => {
        const x = setInterval (() => {
            console.log("setHours")
            setHours(state => state >= 23 ? 0 : state + 1)
        }, 1000*60*60);
        return () => {clearInterval(x)}
    }, [])

    useEffect(() => {
        const x = setInterval (() => {
            console.log("setMinutes")
            setMinutes(state => state >= 59 ? 0 : state + 1)
        }, 1000*60);
        return () => {clearInterval(x)}
    }, [])

    useEffect(() => {

        const x = +setInterval (() => {
            console.log("setSeconds")
           setSeconds(state => state >= 59 ? 0 : state + 1 )
        }, 1000);
        return () => {clearInterval(x)}
    }, [])




    return <>
        {hours}: hours {minutes}: minutes {seconds}: seconds
     {/*   <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered" + counter);

    useEffect(() => {
        console.log("Effect occured" + counter)

        return () => {
            console.log("RESET EFFECT" + counter);
        }
    }, [counter])

    const increase = () => {setCounter(counter + 1)}
    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) =>  {
            console.log(e.key)
            setText((state)=>state + e.key)
        }

        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
            Typed text: {text}
        </>
}


export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {
        const intervalId = setInterval (()=> {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter}
        </>
}

export const SetTimeoutExample1 = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText('3 secconds passed')
        }, 3000)
        return() => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
        </>
}