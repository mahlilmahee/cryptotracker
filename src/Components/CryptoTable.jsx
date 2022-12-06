import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Tableinfo from "./Tableinfo";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false "
    )
      .then((res) => res.json())
      .then((data) => {
        setCryptoData(data);
        // console.log(data)/
      });
  }, []);
  return (
    <div>
      {cryptoData ? (
        
         
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">Market-Rank</TableCell>
                <TableCell align="right">Market-cap</TableCell>
                <TableCell align="right">Market-cap change (24h)</TableCell>
                <TableCell align="right">Percentage(24h)</TableCell>
                <TableCell align="right">Highest-24h</TableCell>
                {/* <TableCell align="right">graph</TableCell> */}
              </TableRow>
            </TableHead>
            {cryptoData ? (
              <TableBody>
                {cryptoData.map((row, index) => (
                  <Tableinfo row={row} key={index} index={index}></Tableinfo>
                ))}
              </TableBody>
            ) : (
              <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            )}
          </Table>
        </TableContainer>
        
      ) : (
        <>  
        <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 1000, margin: "50px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box></>
      )}
    </div>
  );
};

export default CryptoTable;
