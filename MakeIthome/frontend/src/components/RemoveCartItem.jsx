import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import cartService from '../services/cart.service';
import swal from "sweetalert";

const RemoveCartItem = () => {

    const {id} =useParams();
    let navigate=useNavigate();
    
    useEffect(()=>{
        cartService.removeFromCart(id)
        .then(()=>{
            navigate(-1);
        }).catch((err)=>{
            // swal({
            //     title: err.response.data.message,
            //     text: "",
            //     icon: "error",
            //     button: "",
            //   });
            // setTimeout(()=>{
            //     navigate(-1);
            // },1300)
        })
    })


  return (
    <div></div>
  )
}

export default RemoveCartItem