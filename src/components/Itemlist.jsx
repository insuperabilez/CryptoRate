import React from 'react'
import Item from './Item';

function Itemlist(props) {
    let data = props.data;
   
  return (
    <div className='container'>
        <table className='highlight '>
            <thead>
                <tr>
                    <th></th>
                    <th>Название</th>
                    <th>Токен</th>
                    <th>Цена</th>
                </tr>
                
            </thead>
            <tbody>
            {!data ? (<tr></tr>) :  data.map((elem) => (<Item key={elem.id} item={elem}/>))}
            </tbody>
      </table>
    </div>
  )
}

export default Itemlist
