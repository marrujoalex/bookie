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
      {data?.entries.map((entry) => {
        return (
          <ul>
              <li key={entry.key.split('/')[2]}>
                {entry.title} - {entry.key.split('/')[2]} - {new Date(entry.created.value).toLocaleDateString()}
              </li>
          </ul>
        )
      })} 
    </div>
  )
}

export default Home;