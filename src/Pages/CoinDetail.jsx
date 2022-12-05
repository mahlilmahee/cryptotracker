import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
  const   {id}=useParams();
    console.log(id,'hello ')
    return (
        <div>
            <h2>hello I am here </h2>
        </div>
    );
};

export default CoinDetail;