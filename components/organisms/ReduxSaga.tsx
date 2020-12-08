import { Box, Button, TextField, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { IReduxSagaState } from "../../store/redux-saga"
import { ReduxSagaResponse } from "../molecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontSize: "50px",
      marginBottom: theme.spacing(2),
    },
    subTitle: {
      fontSize: "35px",
    },
    section: {
      marginBottom: theme.spacing(4),
    },
  })
)

type Props = {
  title: string
  description?: React.ReactNode
  onChange: (value: string) => void
  storeState?: IReduxSagaState
}

/**
 * redux-saga component
 * @param props {Props} props
 */
export const ReduxSaga = function (props: Props) {
  const { title, description, onChange, storeState } = props
  const classes = useStyles(props)
  const [requestValue, setRequestValue] = useState<string>("")
  const [responseValues, setResponseValues] = useState<string[]>([])
  const [previousResponseValue, setPreviousResponseValue] = useState<string>("")

  useEffect(() => {
    if (!storeState?.data) {
      return
    }
    const fetchResult = `${storeState.data}`
    console.log(
      "fetchResult->",
      fetchResult,
      "previousResponseValue->",
      previousResponseValue,
      "responseValues->",

      responseValues
    )
    if (fetchResult === previousResponseValue) {
      return
    }
    responseValues.unshift(fetchResult)
    if (responseValues) {
      responseValues.pop()
    }
    setResponseValues(responseValues)
    setPreviousResponseValue(fetchResult)
  }, [storeState?.data])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ""
    setRequestValue(value)
    onChange(value)
  }

  const handleSevenDaysButtonClick = () => {
    setRequestValue("sevendays")
    onChange("sevendays")
  }

  const handleOneMonthButtonClick = () => {
    setRequestValue("onemonth")
    onChange("onemonth")
  }

  const handleOneHourButtonClick = () => {
    setRequestValue("onehour")
    onChange("onehour")
  }

  const data = [
    { time: "Dec 07", price: "286" },
    { time: "Dec 06", price: "285" },
    { time: "Dec 05", price: "285" },
    { time: "Dec 04", price: "292" },
    { time: "Dec 03", price: "291" },
    { time: "Dec 02", price: "292" },
    { time: "Dec 01", price: "309" },
  ]

  return (
    <>
      <Typography variant="h2" gutterBottom className={classes.title}>
        {title}
      </Typography>

      {description && <Box className={classes.section}>{description}</Box>}

      <Box className={classes.section}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        <TextField
          value={requestValue}
          onChange={handleChangeInput}
          fullWidth
          InputProps={{}}
        />
      </Box>

      <Box className={classes.section}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOneHourButtonClick}
        >
          1 hr
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSevenDaysButtonClick}
        >
          7 days
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOneMonthButtonClick}
        >
          1 month
        </Button>
      </Box>
      <Box>
        {console.log("responseValues", responseValues)}
        {responseValues && <ReduxSagaResponse responses={responseValues} />}
      </Box>
    </>
  )
}
