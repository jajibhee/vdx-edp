
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const TableActions = () => {
	return (

		<div className="flex flex-wrap">
			<div className="text-main flex items-center font-bold mr-4">
				<CloudUploadOutlinedIcon
				/>
				<div className="text-sm md:text-md ml-2">UPLOAD YOUR LIST FOR ENRICHMENT</div>
			</div>
			<button className='btn-green'>
				Evaluate
			</button>
		</div>

	)
}

export default TableActions