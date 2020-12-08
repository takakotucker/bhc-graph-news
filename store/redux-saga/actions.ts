import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory("redux-saga")

export interface IReduxSagaFetchPayload {
  input: string
  data: any
}

//-------------------------------------------------------
// debounce
//-------------------------------------------------------
export interface IReduxSagaDebounceSuccessPayload {
  input: string
  timestamp: string
}

export interface IReduxSagaDebounceFailurePayload {
  error: Error
}

//-------------------------------------------------------
// throttle
//-------------------------------------------------------
export interface IReduxSagaThrottleSuccessPayload {
  input: string
  timestamp: string
}

export interface IReduxSagaThrottleFailurePayload {
  error: Error
}

//-------------------------------------------------------
// seven days
//-------------------------------------------------------
export interface IReduxSagaSevenDaysSuccessPayload {
  input: string
  timestamp: string
  data: string[]
}

export interface IReduxSagaSevenDaysFailurePayload {
  error: Error
}

export const ReduxSagaActions = {
  // debounce
  fetchDebounce: actionCreator<IReduxSagaFetchPayload>("fetch debounce"),
  debounceSuccess: actionCreator<IReduxSagaDebounceSuccessPayload>(
    "debounce success"
  ),
  debounceFailure: actionCreator<IReduxSagaDebounceFailurePayload>(
    "debounce failure"
  ),

  // throttle
  fetchThrottle: actionCreator<IReduxSagaFetchPayload>("fetch throttle"),
  throttleSuccess: actionCreator<IReduxSagaThrottleSuccessPayload>(
    "throttle success"
  ),
  throttleFailure: actionCreator<IReduxSagaThrottleFailurePayload>(
    "throttle failure"
  ),

  // 7 days
  fetchSevenDays: actionCreator<IReduxSagaFetchPayload>("fetch sevendays"),
  sevenDaysSuccess: actionCreator<IReduxSagaSevenDaysSuccessPayload>(
    "sevendays success"
  ),
  sevenDaysFailure: actionCreator<IReduxSagaSevenDaysFailurePayload>(
    "sevendays failure"
  ),
}

export type ReduxSagaActionTypes =
  | ReturnType<typeof ReduxSagaActions.fetchDebounce>
  | ReturnType<typeof ReduxSagaActions.debounceSuccess>
  | ReturnType<typeof ReduxSagaActions.debounceFailure>
  | ReturnType<typeof ReduxSagaActions.fetchThrottle>
  | ReturnType<typeof ReduxSagaActions.throttleSuccess>
  | ReturnType<typeof ReduxSagaActions.throttleFailure>
  | ReturnType<typeof ReduxSagaActions.fetchSevenDays>
  | ReturnType<typeof ReduxSagaActions.sevenDaysSuccess>
  | ReturnType<typeof ReduxSagaActions.sevenDaysFailure>
