import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {
  value: string
  data: any
  onChange: (value: string, data: any) => void
}

/**
 * chart component
 * @param props Props
 */
export const Chart = function (props: Props) {
  const classes = useStyles(props)
  // const data = props.onChange(props.value)
  // console.log(props, data)
  return (
    <div className={classes.root}>
      <AreaChart
        width={500}
        height={400}
        data={props.data}
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
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  )
}
