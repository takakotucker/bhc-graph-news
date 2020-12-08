interface ChartData {
  time: string
  price: number
}

const objecttarget = (obj: any) => {
  return {
    time: transformDate(obj[0]),
    price: transformPrice(obj[1]),
  }
}

const output = (data: any) => {
  data.map((obj: ChartData) => {
    return Object.assign(objecttarget(obj))
  })

  return []
}

const transformPrice = (price: number) => price.toString().substring(0, 3)
const transformChartToMonthly = (data: ChartData[]) => data.slice(0, 29)
const transformChartToSevenDays = (data: ChartData[]) => data.slice(0, 7)
const sanitiseDateFormat = (date: string) => new Date(date)
const transformDate = (date: string) =>
  sanitiseDateFormat(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
  })

export const sevenDays = (data: any) => {
  const chart = output(data)
  console.log(output(data))
  return transformChartToSevenDays(chart)
}

export const oneMonth = (data: any) => {
  const chart = output(data)
  return transformChartToMonthly(chart)
}

export const oneHour = (data: any) => {
  const chart = output(data)
  return transformChartToMonthly(chart)
}
