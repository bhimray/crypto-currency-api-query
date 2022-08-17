import React from 'react'
import {DataContext} from '../DataQuery/dataQuery'
import { useContext } from 'react'

const HomePage = (props) => {
  const {coinRanking} = useContext(DataContext)
  console.log(coinRanking, "is in the homepage")
  return (
    <div>
      {
      Object.entries(coinRanking).map(([key, value], i)=>{
        console.log("this is value");
        return(
          <>
            <p key={i}>{key}--{value}</p>
          </>
        )
      })
      }
    </div>
  )
}

export default HomePage