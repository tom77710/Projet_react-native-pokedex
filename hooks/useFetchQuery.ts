import { useQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2"

export function useFetchQuery(url: string) {
    return useQuery({
        queryKey: [url],
        queryFn: async () => {
            await wait(1)
            return fetch(endpoint + path).then(r => r.json())
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000))
}