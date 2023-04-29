import useSWR from 'swr'

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

export function useAttendees() {
	const { data, error, isLoading } = useSWR('https://david.vendelux.com/ajax/event_attendee_summaries/53af1bf6-91a2-409f-9d89-db30b1540325/', fetcher)


	return {
		attendees: data,
		isLoading: isLoading,
		isError: error
	}
}