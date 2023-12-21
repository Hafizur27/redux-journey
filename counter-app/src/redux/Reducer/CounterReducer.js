// counter app reducer

/* const initialState = {
  count: 0,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;

    case "RESET":
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
}; */

// todos reducer

const initialState = {
  isLoading: false,
  toDos: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODOS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "TODOS_RESPONSE":
      return {
        ...state,
        isLoading: false,
        toDos: action.payload,
      };
    case "TODOS_REJECT":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
