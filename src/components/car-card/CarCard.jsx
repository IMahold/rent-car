

import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getCar, setId, setPriceH, setPriceD, setPriceM  } from '../../redux/userSlice';

const CarCard = (props) => {
  
    const navigate = useNavigate();
    const item = props.item;
    const detailsClick = (e, id)=>{
      e.preventDefault();
      navigate(`/details/${id}`)
    }

    const dispatch = useDispatch();
 




    const handleForm = (e,id) =>{

      e.preventDefault()
      dispatch(setId(id))
      navigate('/pricing')

    }
  return <div className="car-card">
<Card className="m-3" key={item.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={item.img}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.model}
        </Typography>
      
      
      <Stack direction="row" spacing={2}>
        <p>Price/hour: <strong className="text-primary">{item.ph} $</strong></p>
        <p>Price/day: <strong className="text-primary">{item.pd} $</strong></p>
        <p>Price/month: <strong className="text-primary">{item.pl} $</strong></p>
      </Stack>
      </CardContent>
      <CardActions className="d-flex justify-content-around">
      
      <Button onClick={(e) => handleForm(e,item.id)} variant="contained" size="normal" color="primary">Book now</Button>
      <Button variant="contained" onClick={e=> detailsClick(e,item.id)} color="success">Details</Button>
       
      </CardActions>
    </Card>

  </div>;
};

export default CarCard;
