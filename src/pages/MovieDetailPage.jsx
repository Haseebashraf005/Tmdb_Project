import React from 'react'
import { useParams } from 'react-router-dom'


export const MovieDetailPage = () => {
  let param = useParams();
  console.log(param)
  return (
    <div> Movie Details</div>
  )
}
