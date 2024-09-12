import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "singleproduct/:id",
        element: <SingleProduct />
      },
      {
        path: "*",
        element: <h1>Not Found!!</h1>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
