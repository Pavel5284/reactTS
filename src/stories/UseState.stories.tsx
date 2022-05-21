import React, {useState} from "react";
import set = Reflect.set;

export default {
    title: 'UseState demo',
}

function generateData() {
    //difficult counting
    console.log("generateData")
    return 1;
}


export const Example1 = () => {
    console.log("Example1");
    const [counter, setCounter] = useState<number>(generateData); // [1, function(newValue){}]



    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
        </>
}