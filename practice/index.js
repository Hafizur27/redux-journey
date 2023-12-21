/* const { createStore } = require("redux");

const initialState = {
  count: 0,
};

const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

const resetAction = () => {
  return {
    type: "RESET",
  };
};

const payloadAction = (value) => {
    return{
        type: "VALUE",
        payload: value,
    }
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
      case "VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      }

    default:
     return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())
store.dispatch(incrementAction())
store.dispatch(payloadAction(10)); */

// const { default: axios } = require("axios");
// const { createStore, applyMiddleware } = require("redux");
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const requestAction = () => {
  return {
    type: "REQUEST",
  };
};

const responseAction = (data) => {
  return {
    type: "RESPONSE",
    payload: data,
  };
};

const rejectedAction = (error) => {
  return {
    type: "REJECT",
    payload: error,
  };
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(requestAction());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch(responseAction(res?.data)))
      .catch((err) => dispatch(rejectedAction(err?.message)));
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "RESPONSE":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "REJECT":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
