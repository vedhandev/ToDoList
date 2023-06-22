import React from 'react'
import { FaTrash } from "react-icons/fa";
function LineItems({item,handleChange,handleDelete}) {
   
  return (
    <li className='item'>
    <input onChange={() => handleChange(item.id)} type="checkbox" checked={item.checked} />
    <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
    >{item.item}</label>
    <FaTrash
        onClick={() => handleDelete(item.id)}
        role='button'
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
    />
</li>
  )
}

export default LineItems