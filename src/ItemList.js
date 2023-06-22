import React from 'react'

import LineItems from './LineItems';
function ItemList({props}) {
  return (
    <ul >
        {props.items.map((item) => (
            
           <LineItems 
           key={item.id}
           item={item}
           handleChange={props.handleChange}
           handleDelete={props.handleDelete}
           />
        ))}
    </ul>
  )
}

export default ItemList