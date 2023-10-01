import React, { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import GeneratePDF from "./page/GeneratePDF";
import Login from "./components/Login/Login";
import HeaderPage from "./page/HeaderPage";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import jwt_decode from 'jwt-decode';
import ViewDataPage from './page/ViewDataPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/generatepdf',
      element: <HeaderPage />,
      children: [
        {
          path: '/generatepdf',
          element: <GeneratePDF/>
        }
      ]
    },
    {
      path: '/viewdata',
      element: <HeaderPage />,
      children: [
        {
          path: '/viewdata',
          element: <ViewDataPage/>
        }
      ]
    },
    {
      path:'/login',
      element: <HeaderPage />,
      children: [
        {
          path: '/login',
          element: <Login/>
        }
      ]
    },
    {
      path: '/*',
      element: <Navigate to="/login" />
    }
  ]);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (isAuthenticated && token) {
      const decodedToken = jwt_decode(token);
      const tokenExpirationTimestamp = decodedToken.exp * 1000;
      const currentTime = new Date().getTime();
      const timeRemaining = tokenExpirationTimestamp - currentTime;

      if (timeRemaining > 0) {
        const logoutTimeout = setTimeout(() => {
          dispatch(authActions.logout());
          localStorage.removeItem("Token");
        }, timeRemaining);

        return () => clearTimeout(logoutTimeout);
      } else {
        dispatch(authActions.logout());
        localStorage.removeItem("Token");
      }
    }
  }, [dispatch, isAuthenticated]);

  return <RouterProvider router={router} />;
}

export default App;
