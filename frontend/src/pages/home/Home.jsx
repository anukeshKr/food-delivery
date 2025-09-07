import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
// import { Route, Routes } from 'react-router-dom'

const Home = () => {

  const [category,setCategory] = useState("All")
  return (
    <div className=''>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}

export default Home