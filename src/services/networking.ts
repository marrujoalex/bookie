export const domain = "https://openlibrary.org"
export const kingId = "OL2162284A"

export async function getData(url: string) {
    try {
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch (err) {
        return err
    }
}

// normal fetch request via fetch
export async function getAllKingBooks(queryLimit: number) {
    const url = domain + '/authors/' + kingId + '/works.json'
    const fullRequest = `${url}?limit=${queryLimit}`
    const data = await getData(fullRequest)
    return data
}

export async function fetchKingWorks() {
    const url = domain + '/authors/' + kingId + '/works.json'
    const fullRequest = `${url}?limit=50`
    return await fetch(`${fullRequest}`).then(response => response.json())
}

export async function fetchBook(id: string) {
    const url = `${domain}/works/${id}.json`
    return await fetch(url).then(response => response.json())
}