# 🚀 BCH dashboard 

This is a simple app which dislays following information:

1. BCH Current price
2. Latest news from Bitcoin
3. BCH (Bitcoin cash) price graph (Available in 24hrs / 7 days / 1 month view)

### Prerequisites

Node 12

### Requirements 

1. Styled components with props
2. Redux
3. React re-charts (http://recharts.org/en-US/)

### Local development / preview

`yarn install`
`yarn dev`

#### View front end

`npm install`
`npm run dev`

#### Run unit test

`npm test`

#### Build package

`npm run build`

The web app should graph the BCH price from:
https://index.bitcoin.com/ - see api endpoints in docs


The web app should include the latest 4 news posts from the following endpoint:
https://news.bitcoin.com/feed/
(You may require a CORS proxy)


Below the graph should be three buttons to switch graph views from:
24 hour / 7 days / 1 month

#### LEFT TO DO

1. unit tests 
2. get state change working fully
3. tidy up eg. separation of code, fetcher etc
4. get build working
 
