import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CoinDetails = ({name,id}) => {
 const [takeData,setTakeData]=useState([])
  // useEffect(() =>{
  //   fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // },[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return <>
    <Button onClick={handleOpen}>{name}</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{...style,width:'90%',height:'70%'}}>
    
 
  <Grid container spacing={2}>
  <Grid xs={12} lg={6}>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   watch out the details here with {id}
    </Typography>
  </Grid>
  <Grid xs={12} lg={6}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
     {name} baby give me
         </Typography>
 
  </Grid>
  
</Grid> </Box>
</Modal>
      
    </>
};

export default CoinDetails;