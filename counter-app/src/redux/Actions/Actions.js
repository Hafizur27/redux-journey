// counter app actions
/* export const incrementAction = () => {
    return {
        type: "INCREMENT"
    }
};

export const decrementAction = () => {
    return {
        type: "DECREMENT"
    }
};

export const resetAction = () => {
    return {
        type: "RESET"
    }
}; */

// todos actions
import axios from "axios";

export const getAllToDos = () => async (dispatch) => {
  dispatch({ type: "TODOS_REQUEST" });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: "TODOS_RESPONSE", payload: res.data });
  } catch (error) {
    dispatch({ type: "TODOS_REJECT", payload: error.message });
  }
};
