import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  IReduxSagaState,
  ReduxSagaActions,
  reduxSagaDebounceSelector,
  reduxSagaSevenDaysSelector,
  reduxSagaThrottleSelector,
} from "../store/redux-saga"

type ThinOutOperators = {
  debounce: (inputValue: string, data: any) => void
  debounceState: IReduxSagaState
  throttle: (inputValue: string, data: any) => void
  throttleState: IReduxSagaState
  sevendays: (inputValue: string, data: any) => void
  sevendaysState: IReduxSagaState
}

/**
 * Debounce and throttle custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useThinOut = (): Readonly<ThinOutOperators> => {
  const dispatch = useDispatch()
  const reduxSagaDebounceState = useSelector(reduxSagaDebounceSelector)
  const reduxSagaThrottleState = useSelector(reduxSagaThrottleSelector)
  const reduxSagaSevenDaysState = useSelector(reduxSagaSevenDaysSelector)

  const handleDebounce = useCallback(
    (inputValue: string, data: any) => {
      dispatch(
        ReduxSagaActions.fetchDebounce({
          input: inputValue,
          data: data,
        })
      )
    },
    [dispatch]
  )

  const handleThrottle = useCallback(
    (inputValue: string, data: any) => {
      dispatch(
        ReduxSagaActions.fetchThrottle({
          input: inputValue,
          data: data,
        })
      )
    },
    [dispatch]
  )

  const handleSevenDays = useCallback(
    (inputValue: string, data: any) => {
      dispatch(
        ReduxSagaActions.fetchSevenDays({
          input: inputValue,
          data: data,
        })
      )
    },
    [dispatch]
  )
  return {
    debounce: handleDebounce,
    debounceState: reduxSagaDebounceState,
    throttle: handleThrottle,
    throttleState: reduxSagaThrottleState,
    sevendays: handleSevenDays,
    sevendaysState: reduxSagaSevenDaysState,
  }
}
