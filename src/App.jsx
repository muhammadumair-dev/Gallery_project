import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';
function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const gatdata = async () => {

    const data = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(data.data)
    console.log(data.data)


  }
  useEffect(function () {
    gatdata()
  }, [index])
  let print = <h3 className='text-xs text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>Loading....</h3>
  if (userData.length > 0) {
    print = userData.map(function (elem, idex) {
      return <div key={idex}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black p-4 overflow-auto h-screen text-white'>
      

      <div className='flex h-[80%] flex-wrap gap-4'>{print}</div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button onClick={()=>{if(index>1){
          setIndex(index-1)
          setUserData([])
        }}}
        style={{ opacity:index===1 ? 0.6 :1      }}
          className='bg-amber-300 text-black cursor-pointer active:scale-90  rounded px-4 py-2 font-semibold'>
          Prev
        </button>
        <h4>Page {index}</h4>
        <button  onClick={()=>{setIndex(index+1)
          setUserData([])}}  className='bg-amber-300 text-black cursor-pointer active:scale-90 rounded px-4 py-2 font-semibold'>
          Next
        </button >
      </div>
    </div>
  )
}

export default App