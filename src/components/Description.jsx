import React from 'react'
const parse = require('html-react-parser');
function Description(props) {
    let data=props.data;
    const description = Object.assign({},data.description).en;
    let text = description ? description.toString() : '';
  return (
    <div className='card horizontal' style={{marginLeft:'20px',marginRight:'20px'}}>
        <div className="card-content">
        <p className='flow-text' style={{fontSize:'16px'}}>{parse(text)} </p>
        </div>
      
    </div>
  )
}

export default Description
