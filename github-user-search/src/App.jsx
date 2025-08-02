import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchUsers from './components/Search.jsx';
import './index.css'; // or './App.css' depending on what you're using


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
      <h2 className='text-center text-blue-500 mt-5 font-bold text-xl font-sans mb-4'>Search User</h2>
      <SearchUsers />
    </div>
    </>
  )
} 

export default App
