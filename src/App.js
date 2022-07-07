import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading,setLoading]=useState(true)
  const[tours, setTours]=useState([])

  let removeTour = (id)=>{
    const newtour = tours.filter((tour)=>{
      if(tour.id!==id){
        return true
      }
    })
    setTours(newtour);
  }

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
  if(tours.length==0){
    return <main>
      <div className='title'>
        <h2>No tours left</h2>
      <button className='btn' onClick={fetchData}>Refresh</button>
      </div>
      
      </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}>
      
    </Tours>
  </main>
}

export default App
