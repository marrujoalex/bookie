import React from "react";
import { Entry } from "../types/Works";
import { Params, useParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import { useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { fetchBook } from "../services/networking";

const bookDetailQuery = (id: string) => ({
    queryKey: ["books", "detail", id],
    queryFn: async () => {
        const book = await fetchBook(id)
        if (!book) {
            throw new Response("", {
                status: 404,
                statusText: "Book not found"
            })
        }

        return book;
    }
})

export const bookLoader = (queryClient: any) =>
    async ({ params }: { params: any }) => {
        const query: any = bookDetailQuery(params.bookId) // useBooks(params.bookId);
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        );
  };

// export const bookAction = (queryClient: any) => 
//   async ({ request, params }) {
//     return (
//         <div></div>
//     );
//   };

function Book() {
    const params: any = useParams()
    const { data, isFetching } = useQuery(bookDetailQuery(params.bookId))
    const desc = data.description !== undefined ? data.description : "No description"
    return (
        <div>
            {isFetching ? <div className="">Updating...</div> : <div></div>}
            <h1>{data.title}</h1>
            <div>{
                typeof(data.description) === 'string' 
                ? desc
                : desc.value}</div>
        </div>
    )
}

export default Book;