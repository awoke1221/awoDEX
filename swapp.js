//Import Necessary Libraries:
const express = require("express");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");
const cors = require("cors");
const {
  Route: UniswapV3Route,
  Fetcher: UniswapV3Fetcher,
  Token,
} = require("@uniswap/sdk");
const { ethers } = require("ethers");
const {
  Route: PancakeswapV3Route,
  Fetcher: pancakeswapV3Fetcher,
  WETH: PancakeWETH,
} = require("@pancakeswap/sdk");
const {
  Fetcher: SushiSwapV3Fetcher,
  Route: SushiSwapV3Route,
} = require("@sushiswap/sdk");
const axios = require("axios");

require("dotenv").config();

// Create a Web Server:
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

// geting the provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/f194755b438d426b8a08d8b97323f8f0`
);

// token address
const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

// Define the tokens
const USDT = new Token(1, USDT_ADDRESS, 6, "USDT", "Tether USD");
const WETH = new Token(1, WETH_ADDRESS, 18, "WETH", "Wrapped Ether");

// Create an API Endpoint: for the WETH to USDT price from the uniswap V3
app.get("/uinswapV2", async (req, res) => {
  try {
    const pair = await UniswapV3Fetcher.fetchPairData(WETH, USDT, provider);
    const route = new UniswapV3Route([pair], WETH);

    const price = route.midPrice.toSignificant(6);
    res.json({ price });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "failed to fetch token price from uniswapV2" });
  }
});

// Create an API Endpoint: for the WETH to USDT price from the uniswap V3
app.get("/pancakeSwapV2", async (req, res) => {
  try {
    const weth = PancakeWETH;
    const pair = await pancakeswapV3Fetcher.fetchPairData(
      1,
      weth,
      USDT,
      provider
    );
    const route = new PancakeswapV3Route([pair], weth);
    const price = route.midPrice.toSignificant(6);
    res.json({ price });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error fetching the price from PancakeSwap V3" });
  }
});

// Create an API Endpoint: for the WETH to USDT price from SushiSwap V3
app.get("/sushiSwapV3", async (req, res) => {
  try {
    const response = await axios.get("https://api.sushi.com/v3/price", {
      params: {
        base: USDT_ADDRESS,
        quote: WETH_ADDRESS,
      },
    });
    const price = response.data.price;
    res.json({ price });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch token price from SushiSwap V3" });
  }
});

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
