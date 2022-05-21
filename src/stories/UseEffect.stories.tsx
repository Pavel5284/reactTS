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