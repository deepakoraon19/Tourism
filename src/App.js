import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading,setLoading]=useState(true)
  const[tours, setTours]=useState([])

  const fetchData = async()=>{
    setLoading(true)
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data)
    setTours(data)
    setLoading(false)
  }

    useEffect(()=>{fetchData()},[])

  if(loading){
   return <main>
      <Loading>

      </Loading>
    </main>
  }
  return <main>
    <Tours tours={tours}>
      
    </Tours>
  </main>
}

export default App
