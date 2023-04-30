
function Pill(props: any) {
	const { text } = props
	return (
		<div className="disabled rounded-full bg-white text pill mb-4 group">
			<span className="disabled ">{text}</span>
			<span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Login to use filter</span>
		</div>
	)
}

export default Pill