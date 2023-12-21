import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllToDos } from "./redux/Actions/Actions";

function App() {
  // counter app
  /* const count = useSelector((state) => state.count);
  const dispatch = useDispatch(); */

  const { isLoading, toDos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllToDos());
  }, []);

  return (
    <div>
      {/* counter app */}
      {/*  <div className="text-3xl font-bold text-center py-5 text-green-500">
        Counter App
      </div>
      <div className="flex flex-col items-center gap-2">
        <p>{count}</p>
        <button className="bg-yellow-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch(incrementAction())}>Increment</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch(decrementAction())}>Decrement</button>
        <button className="bg-orange-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch(resetAction())}>Reset</button>
      </div> */}

      {/* todo app */}
      <div>
        <h2 className="text-3xl text-center py-5 font-bold">
          All to dos of Json Placeholder
        </h2>
        <div>
          {isLoading && <p>Loading.....</p>}
          {error && <p>{error}</p>}

          <div className="flex flex-col items-center gap-4 ">
            {toDos?.map((info) => (
              <div key={info.id}>
                {" "}
                <p>{info?.title}</p>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
