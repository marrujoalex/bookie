import { useQuery } from "@tanstack/react-query";
import { Books } from "../types/Books"
import { fetchBook } from "../services/networking"

function useBooks({ bookId }: { bookId: string }) {
    return useQuery<Books, Error>({
        queryKey: ['books', bookId], 
        queryFn: () => fetchBook(bookId)
    })
}

export default useBooks;
