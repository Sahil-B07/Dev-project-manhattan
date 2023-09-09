
import React from 'react'


export async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/books', {method:'GET'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const json = await res.json()
  return json
}


const Library = () => {


  return (
    <>
    <p className='text-black'>Hello</p>
    </>
  )
}

export default Library