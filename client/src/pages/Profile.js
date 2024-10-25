import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import {
  ArrowBack,
  AccountBalanceWallet,
  CompareArrows,
  TrendingUp,
} from "@mui/icons-material";

const transactions = [
  { currency: "DASH", type: "Cash In", amount: "0.016", roi: "12%" },
  { currency: "Litecoin", type: "Cash Out", amount: "0.016", roi: "12%" },
  { currency: "Bitcoincash", type: "Cash In", amount: "0.016", roi: "12%" },
  { currency: "Ethereum", type: "Cash In", amount: "0.016", roi: "12%" },
  { currency: "Bitcoin", type: "Cash Out", amount: "0.016", roi: "12%" },
];

export default function Profile() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#1E1E1E",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "#1E1E1E", boxShadow: "none" }}>
        <Toolbar>
          <ArrowBack sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
          <Avatar alt="Karim Janat" src="/placeholder.svg" />
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Card sx={{ bgcolor: "#2A2A2A", color: "white", width: "30%" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <AccountBalanceWallet sx={{ mr: 1, color: "#4CAF50" }} />
              <Typography variant="subtitle1">Wallet Balance</Typography>
            </Box>
            <Typography variant="h4">30842 USD</Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "#2A2A2A", color: "white", width: "30%" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <CompareArrows sx={{ mr: 1, color: "#FF5722" }} />
              <Typography variant="subtitle1">In Transaction</Typography>
            </Box>
            <Typography variant="h4">51641 USD</Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "#2A2A2A", color: "white", width: "30%" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TrendingUp sx={{ mr: 1, color: "#2196F3" }} />
              <Typography variant="subtitle1">Total Profit</Typography>
            </Box>
            <Typography variant="h4">20,852 USD</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ textAlign: "center", my: 3 }}>
        <Button variant="contained" color="primary">
          Click for more personal details
        </Button>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Recent Transaction
        </Typography>
        <TableContainer
          component={Card}
          sx={{ bgcolor: "#2A2A2A", color: "white" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Currency</TableCell>
                <TableCell sx={{ color: "white" }}>Cash in, Cash out</TableCell>
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>ROI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "white" }}>{row.currency}</TableCell>
                  <TableCell
                    sx={{
                      color: row.type === "Cash In" ? "#4CAF50" : "#FF5722",
                    }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>{row.amount}</TableCell>
                  <TableCell sx={{ color: "white" }}>{row.roi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
