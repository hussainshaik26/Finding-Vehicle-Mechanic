import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function RootComponent() {
  return (
    <div>
      <Nav />
      <div style={{ minHeight: '80vh' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootComponent


// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import RootComponent from './Assignment/Assignment-10/RootComponent'
// import Home from './Assignment/Assignment-10/Home'
// import Register from './Assignment/Assignment-10/Register'
// import Login from './Assignment/Assignment-10/Login'
// import UserDashBoard from './Assignment/Assignment-10/UserDashBoard'

// function App() {

//   let router = createBrowserRouter([
//     {
//       path: '',
//       element: <RootComponent />,
//       children: [
//         {
//           path: '',
//           element: <Home />
//         },
//         {
//           path: 'register',
//           element: <Register />
//         },
//         {
//           path: 'login',
//           element: <Login />
//         },
//         {
//           path:'user-dashboard/:userid',
//           element: <UserDashBoard />
//         }
//       ]
//     }
//   ])

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
