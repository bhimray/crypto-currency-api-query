import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "react-query"
import './App.css'
import HomePage from './components/Pages/HomePage'
import QueryProvider,{DataContext} from './components/DataQuery/dataQuery'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <QueryProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
        </QueryProvider>
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/> */}
      </QueryClientProvider>
    </div>
  )
}

export default App
