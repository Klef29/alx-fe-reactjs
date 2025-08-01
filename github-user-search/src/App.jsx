import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchUsers from './components/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />  
      <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px', color: 'blue' }}>Search User</h2>
      <SearchUsers />
    </div>
    </>
  )
} 

export default App
