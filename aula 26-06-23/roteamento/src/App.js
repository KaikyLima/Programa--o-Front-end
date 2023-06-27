import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {

  const routes = createBrowserRouter([
    {
    path: '/',
    element: <Login/>
   },
   {
    path: '/home',
    element: <Home/>
   },
   {
    path: '/:selectedNumber',
    element:<Details/>
   }
])

  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
