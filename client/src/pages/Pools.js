import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
//import { ethers } from "ethers";

// Mock token list
const tokenList = [
  { symbol: "ETH", name: "Ethereum", address: "0x..." },
  { symbol: "USDC", name: "USD Coin", address: "0x..." },
  { symbol: "DAI", name: "Dai Stablecoin", address: "0x..." },
  { symbol: "WBTC", name: "Wrapped Bitcoin", address: "0x..." },
];

export default function Pools() {
  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [amount0, setAmount0] = useState("");
  const [amount1, setAmount1] = useState("");
  const [feeRate, setFeeRate] = useState(0.3);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Simulating fetching user's balance
    const fetchBalances = async () => {
      // In a real application, you would fetch actual balances here
      console.log("Fetching balances...");
    };

    fetchBalances();
  }, [token0, token1]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Validate inputs
      if (!token0 || !token1 || !amount0 || !amount1) {
        throw new Error("Please fill in all fields");
      }

      if (token0 === token1) {
        throw new Error("Please select different tokens");
      }

      // Simulate transaction
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulating a successful transaction
      console.log("Adding liquidity:", {
        token0,
        token1,
        amount0,
        amount1,
        feeRate,
        priceRange,
      });

      setSuccess(true);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Add Liquidity
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Token 1</InputLabel>
              <Select
                value={token0}
                onChange={(e) => setToken0(e.target.value)}
                label="Token 1"
              >
                {tokenList.map((token) => (
                  <MenuItem key={token.symbol} value={token.symbol}>
                    {token.name} ({token.symbol})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Amount"
              value={amount0}
              onChange={(e) => setAmount0(e.target.value)}
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Token 2</InputLabel>
              <Select
                value={token1}
                onChange={(e) => setToken1(e.target.value)}
                label="Token 2"
              >
                {tokenList.map((token) => (
                  <MenuItem key={token.symbol} value={token.symbol}>
                    {token.name} ({token.symbol})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Amount"
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Fee Rate: {feeRate}%</Typography>
            <Slider
              value={feeRate}
              onChange={(_, newValue) => setFeeRate(newValue)}
              step={0.01}
              min={0.01}
              max={1}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
          </Box>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Liquidity added successfully!
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Add Liquidity"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
