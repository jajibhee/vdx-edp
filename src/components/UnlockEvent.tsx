
import Image from 'next/image';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { routes } from './routes';

const UnlockEvent = () => {
	return (
		<div className="overlay shadow-lg text-white">
			<h1 className='mt-8 mb-4 font-bold text-white'>View 21,853 attendees, companies, and prospects</h1>
			<h2 className='my-4'>
				Upgrade to see which of your prospects are likely to attend Web Summit 2023.
			</h2>
			<div onClick={() => window.open(routes.signin)} className='btn-green flex items-center '>
				<LockOpenIcon />
				<div> Upgrade to Unlock</div>
			</div>
		</div>

	)
}

export default UnlockEvent