
function Pill(props: any) {
	const { text } = props
	return (
		<div className="disabled rounded-full bg-white text pill mb-4 group cursor-pointer relative">
			<span className="disabled">{text}</span>
			<span className="group-hover:opacity-100 transition-opacity bg-gray-800 p-3 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 top-full mt-1 opacity-0 duration-300  w-32 z-10 ">
				Please login to use filter
			</span>
		</div>



	)
}

export default Pill