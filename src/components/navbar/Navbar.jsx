import React from 'react'
import Searchbar from '../search/Searchbar'

const Navbar = () => {
  return (
    <div style={{width: "100%", height: "60px", padding: "10px", display: "flex", justifyContent: "center", backgroundColor: "#0D4C92"}}>
        <Searchbar />
    </div>
  )
}

export default Navbar