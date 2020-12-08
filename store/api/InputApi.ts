// import { Env } from "../../constants"
import { InputResponseModel } from "../../model"
import { IReduxSagaFetchPayload } from "../redux-saga"

export const fetchInputApi = (
  payload: IReduxSagaFetchPayload
): Promise<InputResponseModel> => {
  console.log("payload.input", payload.input)
  const url = "https://index-api.bitcoin.com/api/v0/cash/history"
  return fetch(url).then<InputResponseModel>((response) => response.json())
}
