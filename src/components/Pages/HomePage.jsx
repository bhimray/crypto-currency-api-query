import React from 'react'
import {DataContext} from '../DataQuery/dataQuery'
import { useContext } from 'react'
import "./HomePage.css"
const HomePage = (props) => {
  const {coinRanking} = useContext(DataContext)
  console.log(coinRanking, "is in the homepage")
  return (
    <div>
      <div className="summaryContainer">
        {
        Object.entries(coinRanking).map(([key, value], i)=>{
          console.log("this is value");
          return(
            <>
            <div className='coinSummary'>
              <span key={i}>{key}</span>
              <span key={i}>{value}</span>
            </div>
            </>
          )
        })
        }
      </div>
    </div>
  )
}

export default HomePage