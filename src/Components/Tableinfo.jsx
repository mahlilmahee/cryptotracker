import React, { useEffect, useState } from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CoinDetails from "./CoinDetails";
const Tableinfo = ({ row, index }) => {
  const navigate = useNavigate();
   const {id,name}=row
  // const [price,setPrice]=useState([])
  //  useEffect(() =>{
  //   fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data.prices))
  //  },[])

  //   export default function BasicModal() {

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      {/* <Link to={`/home/${idofCoin}`}> */}
        {" "}
        <TableCell component="th" scope="row">
         {/* <button > {row.name} </button> */}
         <CoinDetails name={name} id={id}></CoinDetails>
          <Avatar alt="Travis Howard" src={row.image} />
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
        </TableCell>
      {/* </Link> */}
      <TableCell align="right">{row.current_price}$</TableCell>
      <TableCell align="right">{row.market_cap_rank}</TableCell>
      <TableCell align="right">{row.market_cap}$</TableCell>
      <TableCell align="right">{row.market_cap_change_24h}$</TableCell>
      <TableCell align="right">{row.price_change_percentage_24h}%</TableCell>
      <TableCell align="right">{row.high_24h}$</TableCell>
    </TableRow>
  );
};

export default Tableinfo;
