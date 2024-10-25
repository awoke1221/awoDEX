import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

export default function Farming() {
  const [pair, setPair] = useState({ token1: "BNB", token2: "LMNG" });
  const [amountToken1, setAmountToken1] = useState("");
  const [amountToken2, setAmountToken2] = useState("");
  const [approved, setApproved] = useState(false);

  const handleApprove = () => {
    // Example approve logic
    setApproved(true);
  };

  const handleAddLiquidity = () => {
    if (approved && amountToken1 && amountToken2) {
      console.log("Liquidity added:", {
        token1: pair.token1,
        amountToken1,
        token2: pair.token2,
        amountToken2,
      });
      // Add more functionality like connecting to the backend or blockchain logic
    } else {
      alert("Approve tokens and enter valid amounts!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0f4f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            backgroundColor: "#ffffff",
            color: "#000",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Add Liquidity
              </Typography>
              <IconButton color="default">
                <Settings />
              </IconButton>
            </Box>

            <Typography variant="body2" sx={{ mb: 3, color: "#555" }}>
              Deposit equal amounts of both tokens to receive LP tokens and earn
              fees.
            </Typography>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel id="token1-label">Token 1</InputLabel>
                  <Select
                    labelId="token1-label"
                    value={pair.token1}
                    label="Token 1"
                    onChange={(e) =>
                      setPair({ ...pair, token1: e.target.value })
                    }
                  >
                    <MenuItem value="BNB">BNB</MenuItem>
                    <MenuItem value="ETH">ETH</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Amount"
                  type="number"
                  fullWidth
                  value={amountToken1}
                  onChange={(e) => setAmountToken1(e.target.value)}
                  sx={{ mt: 2 }}
                />
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Add sx={{ fontSize: 30 }} />
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel id="token2-label">Token 2</InputLabel>
                  <Select
                    labelId="token2-label"
                    value={pair.token2}
                    label="Token 2"
                    onChange={(e) =>
                      setPair({ ...pair, token2: e.target.value })
                    }
                  >
                    <MenuItem value="LMNG">LMNG</MenuItem>
                    <MenuItem value="USDT">USDT</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Amount"
                  type="number"
                  fullWidth
                  value={amountToken2}
                  onChange={(e) => setAmountToken2(e.target.value)}
                  sx={{ mt: 2 }}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mb: 3,
              }}
            >
              <Typography variant="body2" sx={{ color: "#555" }}>
                LP reward APR
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                0.12%
              </Typography>
            </Box>

            {!approved ? (
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#2563eb", borderRadius: "20px" }}
                onClick={handleApprove}
              >
                APPROVE
              </Button>
            ) : (
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#28a745", borderRadius: "20px" }}
                onClick={handleAddLiquidity}
              >
                ADD LIQUIDITY
              </Button>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
