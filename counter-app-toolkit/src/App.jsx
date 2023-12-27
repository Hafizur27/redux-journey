import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue, reset } from "./redux/features/counter/counterSlice";
import AllPost from "./Components/AllPost/AllPost";


const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
   <div>
     <div>
      <h3 className="text-3xl font-bold text-center py-5">Counter App</h3>
      <div className="flex flex-col items-center gap-2">
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())} className="bg-green-500 text-white px-4 py-1 rounded-md">Increment</button>
        <button onClick={()=> dispatch(decrement())} className="bg-red-500 text-white px-4 py-1 rounded-md">Decrement</button>
        <button onClick={()=> dispatch(reset())} className="bg-yellow-500 text-white px-4 py-1 rounded-md">Reset</button>
        <button onClick={()=> dispatch(incrementByValue(5))} className="bg-blue-500 text-white px-4 py-1 rounded-md">Increase 5</button>
      </div>
    </div>
    <AllPost />
   </div>
  )
}

export default App