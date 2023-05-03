
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { routes } from '../routes';

const TableActions = () => {
	return (

		<div className="flex flex-wrap">
			<div className="text-main flex items-center font-bold mr-4">
				<CloudUploadOutlinedIcon
				/>
				<div onClick={() => window.open(routes.signin)} className="cursor-pointer underline text-sm md:text-md ml-2">UPLOAD YOUR LIST FOR ENRICHMENT</div>
			</div>
			<button onClick={() => window.open(routes.signin)} className='btn-green'>
				Evaluate
			</button>
		</div>

	)
}

export default TableActions