import { DOMParser } from "xmldom"
const parser = new DOMParser()

const transformNewsData = (data: any) => {
  parser.parseFromString(data, "application/xml")
}

export const getTransformedNews = (data: any): void => {
  console.log("datadata", data)

  return transformNewsData(data)
}
