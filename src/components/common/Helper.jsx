import theresaWebb from "../../assets/images/webp/theresaWebb.webp"
import jeromeBell from "../../assets/images/webp/jeromeBell.webp"
import robertFox from "../../assets/images/webp/robertFox.webp"
import jennyWilson from "../../assets/images/webp/jennyWilson.webp"
import bessiCooper from "../../assets/images/webp/bessieCooper.webp"
import ralphEdward from "../../assets/images/webp/RalphEdwards.webp"
import { Avax, Bnb, BtcUsd, DogeUsd, EthUsd, GreenGraph, Link, PinkGraph } from "./Icons";

export const LeverageCardsData = [
  {
    coin: <BtcUsd />,
    name: "BTCUSD",
    type: "BTC",
    graphImg: <PinkGraph />,
    value: "60942.36",
    chg: "-3.01%",
    vol: "$78.07M",
  },
  {
    coin: <EthUsd />,
    name: "ETHUSD",
    type: "ETH",
    graphImg: <GreenGraph />,
    value: "2,920.34",
    chg: "-3.72%",
    vol: "$78.07M",
  },
  {
    coin: <DogeUsd />,
    name: "DOGEUSD",
    type: "Dogecoin",
    graphImg: <GreenGraph />,
    value: "0.14441",
    chg: "-4.50%",
    vol: "$78.07M",
  },
  {
    coin: <Avax />,
    name: "BTCUSD",
    type: "USD",
    graphImg: <PinkGraph />,
    value: "33.59",
    chg: "-1.33%",
    vol: "$78.07M",
  },
  {
    coin: <Link />,
    name: "LINK",
    type: "USD",
    graphImg: <GreenGraph />,
    value: "13.61",
    chg: "-5.58%",
    vol: "$78.07M",
  },
  {
    coin: <Bnb />,
    name: "BNB",
    type: "USD",
    graphImg: <PinkGraph />,
    value: "586.52",
    chg: "-4.48%",
    vol: "$78.07M",
  },
];
export const TeamData = [
  {
    profile: theresaWebb,
    name: "Theresa Webb",
    post: "CEO",
  },
  {
    profile: jeromeBell,
    name: "Jerome Bell",
    post: "Co-Founder",
  },
  {
    profile: robertFox,
    name: "Robert Fox ",
    post: "Management",
  },
  {
    profile: jennyWilson,
    name: "Jenny Wilson ",
    post: "Chief Operating Officer",
  },
  {
    profile: bessiCooper,
    name: "Bessie Cooper ",
    post: "Director, Strategic",
  },
  {
    profile: ralphEdward,
    name: "Ralph Edwards ",
    post: "Account Executive",
  },
];
export const FooterLinkData = [
  { link: "Home", to: "#home" },
  { link: "Top-features", to: "#feature" },
  { link: "Roadmap", to: "#roadmap" },
  { link: "Tokenomics", to: "#tokenomics" },
  { link: "FAQ", to: "#faq" },
];
