import React from 'react'

function Footer({props}) {
  const year=new Date();
  // console.log("Footer")
  return (
    <footer>{`${props} List Items`}</footer>
    // CopyWright &copy;{year.getFullYear()}
  )
}

export default Footer