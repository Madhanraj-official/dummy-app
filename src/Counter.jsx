import {useDispatch, useSelector} from "react-redux";
import {decrementReducer, incramentReducer ,resetReducer} from "./store/Store.js";

export const Counter = () =>{
    const dispatcher = useDispatch()
    const counter = useSelector((state)=> state.counter.count)



    return (
    <>
        <p>{ counter }</p>
        <button onClick={()=>{dispatcher(incramentReducer())}}>Increment</button>
        <button onClick={()=>{dispatcher(decrementReducer())}}>Decrement</button>
        <button onClick={()=>{dispatcher(resetReducer())}}>Reset</button>
    </>)
}