import React, { useEffect, useState } from "react";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import { Avatar } from "@mui/material";

import Box from "@mui/material/Box";

import CoinDetails from "./CoinDetails";

import Skeleton from "@mui/material/Skeleton";
const Tableinfo = ({ row, index }) => {
  
  const { id, name } = row;
  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
   
      <TableCell component="th" scope="row">
       
        <CoinDetails name={name} id={id}></CoinDetails>
        <Avatar alt="Travis Howard" src={row.image} />
        
      </TableCell>
      
      {row.current_price ? (
        <TableCell align="right">{row.current_price}$</TableCell>
      ) : (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
      {row.current_price ? (
        <TableCell align="right">{row.market_cap_rank}</TableCell>
      ) : (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
      {row.current_price ? (
        <TableCell align="right">{row.market_cap}$</TableCell>
      ) : (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
     
      <TableCell align="right">{row.market_cap_change_24h}$</TableCell>
      <TableCell align="right">{row.price_change_percentage_24h}%</TableCell>
      <TableCell align="right">{row.high_24h}$</TableCell>
    </TableRow>
  );
};

export default Tableinfo;
