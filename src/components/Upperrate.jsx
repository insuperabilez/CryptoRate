import React from 'react'

function Upperrate(props) {
    let data=props.data;
    const obj = Object.assign({},data.market_data).current_price;
    const change = +Object.assign({},data.market_data).price_change_24h;
    const link = Object.assign({},data.links).homepage;
    const image=Object.assign({},data.image).thumb;
    console.log(image);
    console.log(data)
  return (
    <div className='container'>
    <div className='row'>
           <h2> <img src={image}></img>{data.symbol} - {data.name} 
           {link ?
           <span className="right" > <a href={link[0]} style={{color:'#bdbdbd', fontSize:'20px'}}>{link[0]}</a></span>
           : '' }
           </h2>
        </div>
           <div className='row'>
        <h3>{Object.assign({},obj).usd}$
         {change > 0 ?
          <span className='green-text' style={{fontSize:'20px'}}>↑ {change.toFixed(3)}</span> 
          :
          <span className='red-text' style={{fontSize:'20px'}}>↓{change.toFixed(3)}</span> } </h3>  
        
        </div>
        </div>
  )
}

export default Upperrate
