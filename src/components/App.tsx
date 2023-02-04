import '../styles/App.css'
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './Home';
import Book, { bookLoader } from './Book';
import About from './About';
import Footer from './layout/Footer';
import ErrorPage from './ErrorPage';
import NavbarWrapper from './layout/NavbarWrapper';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
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
      },
      {
        path: '/about',
        element: <About />,
        // loader: aboutLoader(queryClient),
        // action: aboutAction(queryClient)
      }
    ]
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Footer />
    </QueryClientProvider>
  )
}

export default App;