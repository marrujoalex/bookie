import { useState, useEffect } from 'react'
import '../styles/App.css'
import { getAllKingBooks } from '../services/networking';
import { Entry } from '../types/Works';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Book from './Book';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/book/:book" element={<Book />} />
    //   </Routes>
    // </Router>
  )
}

export default App
