import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import PageNotFound from './components/NotFound';


const router = createBrowserRouter(
  [
    // {
    //   path: '/',
    //   element: <Home />
    // },
    // {
    //   path: "/stocks",
    //   element: <Stocks />
    // },
    // {
    //   path: "/movies",
    //   element: <Movies />
    // },
    // {
    //   path: "*",
    //   element: <PageNotFound />
    // }
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "stocks",
          element: <Stocks />
        },
        {
          path: "movies",
          element: <Movies />
        },
        {
          path: "*",
          element: <h1>Page Not Found</h1>
        }
      ]
    }
  ]
);

function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
