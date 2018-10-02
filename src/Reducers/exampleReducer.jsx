import { createReducer } from '../Reducers/reducerUtility';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Constants/exampleConstants'

const initialState = {
  data: 66
};

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
}

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
}

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
