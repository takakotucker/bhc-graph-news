/**
 * redux-saga
 */
export interface IReduxSagaState {
  input?: string
  timestamp?: string
  data: string[]
  error?: Error
}
export const ReduxSagaInitialState: IReduxSagaState = {
  input: undefined,
  timestamp: undefined,
  data: [],
}
