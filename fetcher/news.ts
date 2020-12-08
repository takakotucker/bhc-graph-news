import Parser from "rss-parser"

const getNews = async () => {
  const RSS_URI = "https://news.bitcoin.com/feed/"
  const parser = new Parser()
  const data = await parser.parseURL(RSS_URI)

  console.log(data)
}

export default getNews
