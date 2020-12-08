import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

type Props = {
  title: string
  link: string
  shortContent: string
}

/**
 * Card component
 * @param props Props
 */
export const CardComponent = function (props: Props) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          variant="h4"
          component="h2"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {props.shortContent}
        </Typography>
      </CardContent>
    </Card>
  )
}
