import React, { useEffect, useState } from 'react'
import "./home.css"
import { mockData } from '../../mock/data'
import ItemContainer from '../../components/itemContainer/ItemContainer'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    setData(mockData)
  }, [])
  return (
    <div className='home'>
      <h1 style={{color: "#557153"}}>ALL STAR WARS CHARACTERS</h1>
      <ItemContainer data={data} />
    </div>
  )
}

export default Home