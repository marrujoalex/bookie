import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error: any = useRouteError()
    console.error(error)

    return (
        <div className="h-auto w-auto justify-center align-middle">
            <h1 className="text-2xl font-bold">Oops!</h1>
            <p className="text-red-800 font-semibold">Sorry, an unexpected error has occurred.</p>
            <p className="text-base italic">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;