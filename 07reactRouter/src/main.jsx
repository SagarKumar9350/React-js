import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact",
//           element: <Contact/>
//         }
//       ]
//     }

//   ]
// )

//here we have made a router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      
      {/*below these are possible because we have used outlet in the Layout*/}
      <Route path = "" element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>

      {/* we can create nesting inside it also*/ }
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "user/:userid" element = {<User/>}/>
      <Route
            loader = {githubInfoLoader}
            path = "github" 
            element = {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Routerprovider is a wrapper */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
