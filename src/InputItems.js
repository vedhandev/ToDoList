import React from 'react'
import Button from "react-bootstrap/Button";
import { FaPlus } from 'react-icons/fa';

function InputItems({props}) {
  
  return (
   <form className='addForm' onSubmit={props.handleSubmit}>

    <label htmlFor='addItem'>Add Item</label>
    <input 
    value={props.newItem}
    type='text'
    autoFocus
    id="addItem"
    placeholder='Add Item'
    required
    onChange={(e)=>props.setNewItem(e.target.value)}
    />
   
    <button  type="submit" aria-label='Add Item'><FaPlus/></button>
   </form>
  )
}

export default InputItems