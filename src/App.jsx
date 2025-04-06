import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'


const App = () => {
  const[users,setusers]= useState([]);

  const searchUser = (comingkeyword)=>{
    axios.get(`https://api.github.com/search/users?q=${comingkeyword}`)
    .then(res=>setusers(res.data.items))
  }


  return (
    <div>
      <Header/>
      <Search sendkeyword={searchUser}/>
      <Users senddata={users}/>
    </div>
  )
}

export default App