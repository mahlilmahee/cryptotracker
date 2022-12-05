import React from "react";
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
const Tableinfo = ({ row, index }) => {
  const navigate = useNavigate();
  const idofCoin = row.id;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //   export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // }

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <Link to={`/home/${idofCoin}`}>
        {" "}
        <TableCell component="th" scope="row">
          {row.name} <Avatar alt="Travis Howard" src={row.image} />
          <Button onClick={handleOpen}>Open modal</Button>
        </TableCell>
      </Link>
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
