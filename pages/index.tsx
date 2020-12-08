import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import Parser from "rss-parser"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { CardComponent } from "../components/molecules"
import { HeaderArticleContainer, ReduxSaga } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { useThinOut } from "../hooks"
import { IPagePayload, PageActions } from "../store/page"

const RSS_URI = "https://news.bitcoin.com/feed/"
const parser = new Parser()

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

const data = [
  {
    time: "Page A",
    price: 4000,
  },
  {
    time: "Page B",
    price: 3000,
  },
  {
    time: "Page C",
    price: 2000,
  },
]

type Props = {}

type NewsData = {
  title: string
  link: string
  shortContent: string
}

function Index(store: any, props: Props) {
  const {} = props
  const classes = useStyles(props)
  const { sevendays, sevendaysState } = useThinOut()

  const trimmedData = store.news.slice(0, 3)

  const objecttarget = (obj: any) => {
    return {
      title: obj.title,
      link: obj.link,
      shortContent: obj.contentSnippet,
    }
  }

  const output = (data: any) =>
    data.map((obj: NewsData) => {
      return Object.assign(objecttarget(obj))
    })
  const cardData = output(trimmedData)

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <Typography variant="h2" component="h2" gutterBottom>
          Bitcoin latest news
        </Typography>
        {cardData.map((card: any) => (
          <CardComponent {...card} />
        ))}
        <SpacingPaper>
          <ReduxSaga
            title="Bitcoin Cash price (BHC)"
            description={
              <>
                <Typography variant="subtitle1" gutterBottom>
                  Check Bitcoin cash price using the graph below. Click on each
                  buttons to see its recent price change.
                </Typography>
              </>
            }
            storeState={sevendaysState}
            onChange={(inputValue: string) => sevendays(inputValue, data)}
          />
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Index.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx
  const pagePayload: IPagePayload = {
    selectedPage: Page.TOP,
  }
  const feedData = await parser.parseURL(RSS_URI)

  // const storeData = feedData.items.slice(0, 3)

  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {
    news: feedData.items,
  }
}

export default Index
