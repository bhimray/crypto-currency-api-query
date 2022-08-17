import React from 'react'
import { useQuery } from "react-query"
import axios from 'axios'


const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'ea3e0e9305msh25681129077648ep1f06f9jsnb2ee8da018dc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};


function QueryData() {
  
  const getData = axios.request(options)
  const {data, isLoading, isError, error, isFetching} = useQuery("getData", ()=>getData,
  {
    
  }
  )
  
  if (isLoading){
    console.log("Loading");
    return <p>Loading</p>
  } else if (isError){
    console.log("error");
    return <p>{error}</p>
  }

  console.log(data?.data?.data?.stats)


  return (
    <div>
      <h1>React Query Page</h1>
    </div>
  )
}

export default QueryData