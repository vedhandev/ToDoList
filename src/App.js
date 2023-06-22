import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header'
import React, { useState } from 'react';
import InputItems from './InputItems';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoList"))
    // [
    //     {
    //         id: 1,
    //         checked: true,
    //         item: "Learn Coding"
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: "practice Coding"
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: "Play with Coding"
    //     }

    // ]
    )
    const handleChange = (id) => {
      
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
     localStorage.setItem("todoList",JSON.stringify(listItems))
      setItems(listItems);
  }
  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id)
    localStorage.setItem("todoList",JSON.stringify(listItems))
    setItems(listItems);
}
const [newItem, setNewItem] = useState("")

const addNewItemFn=(params)=>{

const id=items.length?items[items.length-1].id+1:1
const addNewItem={id,checked:false,item:params}
const listItems=[...items,addNewItem]
localStorage.setItem("todoList",JSON.stringify(listItems))
setItems(listItems)
}


const handleSubmit=(e)=>{
  console.log(newItem)
  e.preventDefault()
 if(!newItem) return
 addNewItemFn(newItem);
 setNewItem("")

}
const obj={
items:items,
handleChange:handleChange,
handleDelete:handleDelete
}
const newItemObj={
  newItem:newItem,
  setNewItem:setNewItem,
  handleSubmit:handleSubmit,
  
  }
  


  return (
  <div className='App'>
    <Header  />
    <InputItems props={newItemObj}/>
    <Content props={obj}
//     items={items} 
//     setItems={setItems}
// handleChange={handleChange}
// handleDelete={handleDelete}
    />
    <Footer props={obj.items.length}/>
    
    </div>
  )
}
Header.defaultProps={
  title:"ToDoList"
}
export default App;
