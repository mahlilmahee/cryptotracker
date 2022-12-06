import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

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
 const [coinDes,setCoinDes]=useState([])
  // useEffect(() =>{
  //   fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // },[])

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{ setOpen(true)
      fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
      .then(res=>res.json())
      .then(data=>{

        if(data){
          setTakeData(data);
          fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=true&sparkline=true `)
      .then(res=>res.json())
      .then(data=>{
        console.log('description',data)
        setCoinDes(data)
      })
        }
        else{
          return ;
        }
      })


      //  going with the other one 
      

 


  };

  const coinInfo=takeData.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  // console.log(coinInfo,'hello ')
  const handleClose = () => setOpen(false);

  const options = {
    responsive: true
  }
  const data = {
    labels: coinInfo?.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinInfo?.map(val => val.y),
        borderColor: 'red',
        backgroundColor: 'green',
      }
    ]
  }
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
   {
    coinDes &&  <div>
    <h3>Welcome here {coinDes?.id} </h3>
    {/* <h3>Welcome here {coinDes?.market_data?.current_price[us]} </h3> */}
    <img src={coinDes?.image?.small} alt="" />
    <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: coinDes.description?.en }}></p>
    <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: coinDes.market_price?.current_price?.usd }}></p>
  </div>
   }
  </Grid>
  <Grid xs={12} lg={6}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
  <Line options={options} data={data} />

         </Typography>
 
  </Grid>
  
</Grid> </Box>
</Modal>
      
    </>
};

export default CoinDetails;