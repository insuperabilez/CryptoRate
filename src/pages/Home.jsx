import React from 'react'
import { redirect } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Itemlist from '../components/Itemlist';

function Home(props) {
    let data=props.data
  return (
    <div>
        <Itemlist data={data}></Itemlist>
    </div>
  )
}

export default Home
