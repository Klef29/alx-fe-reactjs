import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

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
      <h1>App Component</h1>
      <p>This is the main application component.</p>
    </>
  )
} 

export default App
