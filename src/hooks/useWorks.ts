import { useQuery } from "@tanstack/react-query";
import { Works } from "../types/Works"
import { fetchKingWorks } from "../services/networking"

function useWorks() {
    return useQuery<Works, Error>({
        queryKey: ['entries'], 
        queryFn: fetchKingWorks
    })
}

export default useWorks;