import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputAdornment,
  Slider,
} from "@mui/material";
import {
  Settings as SettingsIcon,
  SwapVert as SwapVertIcon,
} from "@mui/icons-material";

const tokens = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
  { symbol: "DAI", name: "Dai" },
  { symbol: "WBTC", name: "Wrapped Bitcoin" },
];

export default function Swap() {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [slippage, setSlippage] = useState(0.5);
  const [deadline, setDeadline] = useState(20);
  const [openSettings, setOpenSettings] = useState(false);

  const handleSwap = () => {
    // In a real implementation, this would interact with the blockchain
    console.log(
      `Swapping ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`
    );
  };

  const handleFromAmountChange = (event) => {
    setFromAmount(event.target.value);
    // In a real implementation, this would calculate the output amount based on liquidity pools
    setToAmount((parseFloat(event.target.value) * 1.5).toFixed(6));
  };

  const handleTokenSwap = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 400, p: 3, background: "non" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            background: "non",
          }}
        >
          <Typography variant="h5">Swap</Typography>
          <IconButton onClick={() => setOpenSettings(true)}>
            <SettingsIcon />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          label="You pay"
          value={fromAmount}
          onChange={handleFromAmountChange}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Select
                  value={fromToken.symbol}
                  onChange={(e) =>
                    setFromToken(
                      tokens.find((t) => t.symbol === e.target.value) ||
                        tokens[0]
                    )
                  }
                >
                  {tokens.map((token) => (
                    <MenuItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </MenuItem>
                  ))}
                </Select>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <IconButton onClick={handleTokenSwap}>
            <SwapVertIcon />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          label="You receive"
          value={toAmount}
          sx={{ mb: 2 }}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <Select
                  value={toToken.symbol}
                  onChange={(e) =>
                    setToToken(
                      tokens.find((t) => t.symbol === e.target.value) ||
                        tokens[1]
                    )
                  }
                >
                  {tokens.map((token) => (
                    <MenuItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </MenuItem>
                  ))}
                </Select>
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" fullWidth onClick={handleSwap}>
          Swap
        </Button>

        <Dialog open={openSettings} onClose={() => setOpenSettings(false)}>
          <DialogTitle>Transaction Settings</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>Slippage tolerance</Typography>
            <Slider
              value={slippage}
              onChange={(_, newValue) => setSlippage(newValue)}
              aria-labelledby="slippage-slider"
              valueLabelDisplay="auto"
              step={0.1}
              marks
              min={0.1}
              max={5}
            />
            <Typography gutterBottom sx={{ mt: 2 }}>
              Transaction deadline
            </Typography>
            <Slider
              value={deadline}
              onChange={(_, newValue) => setDeadline(newValue)}
              aria-labelledby="deadline-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={60}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenSettings(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
}
