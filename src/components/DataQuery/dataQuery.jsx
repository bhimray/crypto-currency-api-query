import React, { useState } from 'react'
import { useQuery } from "react-query"
import axios from 'axios'
import { createContext } from 'react';
import HomePage from '../Pages/HomePage';

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

export const DataContext = createContext() //i am trying to pass data through this context

function QueryProvider({children}) {
  const getData = axios.request(options)
  const {data, isLoading, isError, error, isFetching} = useQuery("getData", ()=>getData,{})
  
  if (isLoading){
    console.log("Loading");
    return <p>Loading</p>
  } else if (isError){
    console.log("error");
    return <p>{error}</p>
  }

  const coinRanking= data?.data?.data.stats
  
  return (
    <div>
      <DataContext.Provider value={{coinRanking}}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default QueryProvider