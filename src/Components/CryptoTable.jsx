import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
const CryptoTable = () => {
    const [cryptoData,setCryptoData] =useState([]);

    useEffect(() =>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false ')
        .then(res=>res.json())
        .then(data=>{
            setCryptoData(data)
            console.log(data)
        })
    },[])
    return (
        <div>
           
            {cryptoData.length}

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Market-Rank</TableCell>
            <TableCell align="right">Market-cap</TableCell>
            <TableCell align="right">Market-cap change (24h)</TableCell>
            <TableCell align="right">Percentage(24h)</TableCell>
            <TableCell align="right">Highest-24h</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoData.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                 {index+1}
              
              </TableCell>
              <TableCell component="th" scope="row"> 
                {row.name} <Avatar alt="Travis Howard" src={row.image} />
              </TableCell>
              <TableCell align="right">{row.current_price}$</TableCell>
              <TableCell align="right">{row.market_cap_rank}</TableCell>
              <TableCell align="right">{row.market_cap}$</TableCell>
              <TableCell align="right">{row.market_cap_change_24h}$</TableCell>
              <TableCell align="right">{row.price_change_percentage_24h}%</TableCell>
              <TableCell align="right">{row.high_24h}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default CryptoTable;