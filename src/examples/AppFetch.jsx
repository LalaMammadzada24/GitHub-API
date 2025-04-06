import axios from "axios"
import { useEffect, useState } from "react"

const AppFetch = () => {

  const [data,setData] = useState([]);
   
  useEffect(()=>{

   axios.get('https://fakestoreapi.com/products')
   .then(res=>setData(res.data))


  },[])
  return (
    <div className="container">
      {data.map(i=><li>{i.title}</li>)}
    </div>
  )
}

export default AppFetch