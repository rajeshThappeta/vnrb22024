import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Technologies from './components/Technologies'
import RouteError from "./components/RouteError";
import UserProfile from './components/UserProfile'
import Java from "./components/Java";
import Node from "./components/Node";
import Vue from "./components/Vue";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement:<RouteError />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"user-profile",
          element:<UserProfile />
        },
        {
          path:"technologies",
          element:<Technologies />,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:'nodejs',
              element:<Node />
            },
            {
              path:'vue',
              element:<Vue />
            }
          ]
        }
      ]
    },
  ]);

  return <RouterProvider router={browserRouterObj} />;
}

export default App;
