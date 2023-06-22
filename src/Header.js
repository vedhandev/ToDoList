import React from 'react'

function Header({...props}) {
  // console.log("Header")
  return (
    <header><h1>{props.title}</h1></header>
  )
}

export default Header