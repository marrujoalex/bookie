import { NavLink } from "react-router-dom";
import useWorks from "../hooks/useWorks";

function Home() {
    let { isLoading, error, data, isFetching } = useWorks()
    if (isLoading) return <div>Loading...</div>
    if (error instanceof Error) { 
        return <div>An error occurred while loading: {error.message}</div> 
    }

  return (
    <div className='App'>
        <h1>Stephen King Books</h1>
        <p>Click on a book to know more about it</p>
        {isFetching ? <div>Updating..</div> : <div></div>}
        <nav>
            <ul>
            {data?.entries.map((entry) => {
                const bookId = entry.key.split('/')[2]
                return (
                    <li key={bookId}>
                        <NavLink to={`/book/${bookId}`}>
                            {entry.title} - {bookId} - {new Date(entry.created.value).toLocaleDateString()}
                        </NavLink>
                    </li>
                )
            })} 
            </ul>
        </nav>

    </div>
  )
}

export default Home;