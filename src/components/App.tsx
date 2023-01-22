import { useState, useEffect } from 'react'
import '../styles/App.css'
import { getAllKingBooks } from '../services/networking';
import { Entry } from '../types/Works';
import { Link, Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Book, { bookLoader } from './Book';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './ErrorPage';
import Root from './Root';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/book/:bookId',
        element: <Book />,
        loader: bookLoader(queryClient),
        // action: bookAction(queryClient)
      }
    ]
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
        <footer className='top-8 p-8'>
            <hr />
            <p>Big Little Concepts</p>
        </footer>
    </QueryClientProvider>
  )
}

export default App

