import React from "react";
import { Entry } from "../types/Works";
import { useParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";

function Book({ id }: { id: string }) {
    let { isLoading, error, data, isFetching } = useBooks({ bookId: id})
    const book = useParams()

    return (
        <div>
            {isFetching ? <div className="">Updating...</div> : <div></div>}
            <h1>{data?.title}</h1>
        </div>
    )
}

export default Book;