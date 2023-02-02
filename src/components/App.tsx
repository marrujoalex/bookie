import '../styles/App.css'
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Book, { bookLoader } from './Book';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './ErrorPage';
import { NavbarWrapper } from './layout/NavbarWrapper';
import { Footer } from './layout/Footer';

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

export default App

