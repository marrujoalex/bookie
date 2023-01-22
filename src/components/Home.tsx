import { NavLink } from "react-router-dom";
import { fetchKingWorks } from "../services/networking";
import { useQuery } from "@tanstack/react-query";
import { Works } from "../types/Works";

const worksDetailQuery = () => ({
    queryKey: ["entries", "detail"],
    queryFn: async () => {
        const works = await fetchKingWorks()
        if (!works) {
            throw new Response("", {
                status: 404,
                statusText: "Works not found"
            })
        }

        return works
    }
})

export const worksLoader = (queryClient: any) => {
    async () => {
        const query: any = worksDetailQuery()
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    }
}

function Home() {
    const { isLoading, error, data, isFetching } = useQuery<Works>(worksDetailQuery())
    if (isLoading) return <div>Loading...</div>
    if (error instanceof Error) { 
        return <div>An error occurred while loading: {error.message}</div> 
    }

  return (
    <div className='my-2'>
        <h1 className="p-4 font-bold text-2xl text-red-600">Stephen King Books</h1>
        <p>Click on a book to know more about it</p>
        {isFetching ? <div>Updating..</div> : <div></div>}
        <nav>
            <ul className='p-4'>
            {data?.entries.map((entry) => {
                const bookId = entry.key.split('/')[2]
                return (
                    <li key={bookId} className="p-1 text-md text-gray-500 font-normal rounded">
                        <NavLink to={`/book/${bookId}`}>
                            {entry.title} - {new Date(entry.created.value).toLocaleDateString()}
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