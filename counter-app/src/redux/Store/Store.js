// counter app store
/* import { createStore } from 'redux';
import { counterReducer } from '../Reducer/CounterReducer';
 const store = createStore(counterReducer);
 export default store; */


//  todos store 
import {createStore, applyMiddleware} from 'redux';
import { todosReducer } from '../Reducer/CounterReducer';
import {thunk} from 'redux-thunk'

 const store = createStore(todosReducer, applyMiddleware(thunk));
 export default store;