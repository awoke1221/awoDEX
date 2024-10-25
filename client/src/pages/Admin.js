import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material";

// Mock data for demonstration
const tokens = [
  { id: "eth", name: "Ethereum", symbol: "ETH" },
  { id: "dai", name: "Dai", symbol: "DAI" },
];

const networks = [
  { id: "ethereum", name: "Ethereum" },
  { id: "polygon", name: "Polygon" },
];

const liquidityPools = [
  { id: "eth-dai", name: "ETH/DAI", liquidity: "1,000,000", apy: "5%" },
  { id: "eth-usdc", name: "ETH/USDC", liquidity: "2,000,000", apy: "4.5%" },
];

export default function StakingComponent() {
  const [selectedToken, setSelectedToken] = useState("");
  const [stakingAmount, setStakingAmount] = useState("");
  const [stakingDuration, setStakingDuration] = useState(1);
  const [selectedNetwork, setSelectedNetwork] = useState("ethereum");
  const [selectedPool, setSelectedPool] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Get the theme from the hook
  const theme = useTheme();

  const handleStake = () => {
    setSnackbarMessage("Staking successful!");
    setSnackbarOpen(true);
  };

  const handleConnectWallet = () => {
    setWalletConnected(true);
    setSnackbarMessage("Wallet connected successfully!");
    setSnackbarOpen(true);
  };

  return (
    <Container maxWidth="lg" background="transparent">
      {/* Background box with theme-based background */}
      <Box
        sx={{
          my: 4,
          bgcolor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5", // Dark or light background
          color: theme.palette.text.primary, // Text color adapts to theme
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          DEX Staking Platform
        </Typography>

        <Grid container spacing={3}>
          {/* Network Selection Card */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: theme.palette.background.paper, // Adapts to dark/light theme
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Network Selection
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="network-select-label">Network</InputLabel>
                  <Select
                    labelId="network-select-label"
                    value={selectedNetwork}
                    label="Network"
                    onChange={(e) => setSelectedNetwork(e.target.value)}
                  >
                    {networks.map((network) => (
                      <MenuItem key={network.id} value={network.id}>
                        {network.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Box>
          </Grid>

          {/* Liquidity Pool Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Liquidity Pools
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="pool-select-label">Select Pool</InputLabel>
                  <Select
                    labelId="pool-select-label"
                    value={selectedPool}
                    label="Select Pool"
                    onChange={(e) => setSelectedPool(e.target.value)}
                  >
                    {liquidityPools.map((pool) => (
                      <MenuItem key={pool.id} value={pool.id}>
                        {pool.name} - Liquidity: ${pool.liquidity} - APY:{" "}
                        {pool.apy}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>

          {/* Staking Form */}
          <Grid item xs={12}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Stake Tokens
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="token-select-label">
                        Select Token
                      </InputLabel>
                      <Select
                        labelId="token-select-label"
                        value={selectedToken}
                        label="Select Token"
                        onChange={(e) => setSelectedToken(e.target.value)}
                      >
                        {tokens.map((token) => (
                          <MenuItem key={token.id} value={token.id}>
                            {token.name} ({token.symbol})
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Staking Amount"
                      variant="outlined"
                      type="number"
                      value={stakingAmount}
                      onChange={(e) => setStakingAmount(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      Staking Duration (months)
                    </Typography>
                    <Slider
                      value={stakingDuration}
                      onChange={(_, newValue) => setStakingDuration(newValue)}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={1}
                      max={12}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleStake}
                      disabled={!walletConnected}
                    >
                      Stake Tokens
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Staked Assets Overview */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Staked Assets Overview
                </Typography>
                <Typography>No assets staked yet.</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Rewards Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Rewards
                </Typography>
                <Typography>Total Staked: 0</Typography>
                <Typography>Rewards Accrued: 0</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={!walletConnected}
                >
                  Claim Rewards
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Wallet Connection */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AccountBalanceWallet />}
            onClick={handleConnectWallet}
            disabled={walletConnected}
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </Box>

        {/* Feedback Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />
      </Box>
    </Container>
  );
}
