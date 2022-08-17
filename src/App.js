import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "react-query"
import './App.css'
import HomePage from './components/HomePage'
import QueryData from './components/DataQuery/dataQuery'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}>
            </Route>
            <Route path="/queryData" element={<QueryData/>}></Route>
          </Routes>
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/> */}
      </QueryClientProvider>
    </div>
  )
}

export default App
