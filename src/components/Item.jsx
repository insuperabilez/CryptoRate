import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Item(props) {
    const navigate = useNavigate();
    function redirect() {
        navigate(`/cur/${props.item.id}`)
    }
  return (
    <tr onClick={redirect} style={{cursor:'pointer'}}> 
    <td><img src={props.item.image} style={{width:'25px'}}/></td>
      <td>{props.item.name}</td>
      <td>{props.item.symbol}</td>
      <td>{props.item.current_price.toFixed(3)}$</td>
      </tr>
      
  )
}

export default Item
