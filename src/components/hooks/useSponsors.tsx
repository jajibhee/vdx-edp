import useSWR from 'swr'

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

export function useSponsor() {
	const { data, error, isLoading } = useSWR(`https://david.vendelux.com/ajax/event_sponsors/53af1bf6-91a2-409f-9d89-db30b1540325/`, fetcher)

	return {
		sponsors: data,
		isLoading,
		isError: error
	}
}