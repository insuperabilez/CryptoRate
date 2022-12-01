import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Upperrate from '../components/Upperrate';
import Description from '../components/Description';
function Currency(props) { 
  const headers = new Headers({
    'Authorization': '0ZHJadMU0KI6' 
});
const options = {
    headers,
    credentials:"include" 
};
    let {name}=useParams();
    const [data,setData] = useState('');

   useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      `https://api.coingecko.com/api/v3/coins/${name}`,options);
    setData(result.data);
    }
    fetchData();
    
  }, []);

  const description = Object.assign({},data.description).en;
  let text = description ? description.toString() : '';
  
  return (
    <div>
        <Upperrate data={data}></Upperrate>
        <Description data={data}></Description>
    </div>
  )
}

export default Currency
