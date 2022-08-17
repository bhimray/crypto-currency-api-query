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
  const {isLoading, data, isError, error} = useQuery("coinsData", 
  ()=>{
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
    }
  )

  console.log("this is data", data)

  if (isLoading){
    console.log("Loading");
    return <h1>{isLoading}</h1>
  }
  else if (isError){
    console.log("error");
    return <h1>{error.message}</h1>
  }
  
  return (
    <div>
      <h1>React Query Page</h1>
    </div>
  )
}

export default QueryData