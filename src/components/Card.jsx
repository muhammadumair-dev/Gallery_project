import React from 'react'

function Card(props) {
  return (
    <div className=''>
        <a href={props.elem.url} target='_blank'><div className='h-40 w-44  overflow-hidden rounded-xl '>
          <img className='h-full w-full object-cover ' src={props.elem.download_url} alt="" />


        </div>     <h2>{props.elem.author}</h2></a>
    </div>
  )
}

export default Card