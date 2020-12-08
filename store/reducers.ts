import { combineReducers } from "redux"
import { countReducer } from "./counter/reducers"
import { pageReducer } from "./page/reducers"
import {
  reduxSagaDebounceReducer,
  reduxSagaSevenDaysReducer,
  reduxSagaThrottleReducer,
} from "./redux-saga/reducers"

export const combinedReducers = combineReducers({
  counter: countReducer,
  page: pageReducer,
  reduxSagaDebounce: reduxSagaDebounceReducer,
  reduxSagaThrottle: reduxSagaThrottleReducer,
  reduxSagaSevenDays: reduxSagaSevenDaysReducer,
})

export type RootState = ReturnType<typeof combinedReducers>
