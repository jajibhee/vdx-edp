import Pill from "../Buttons/Pill";
import Image from "next/image";
import TableActions from "./TableActions";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrackChanges from '@mui/icons-material/TrackChanges';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

type ProspectStatusProps = {
	prospect: boolean;
};

type StatusProps = {
	status: string;
};
const AttendeesTable = ({ attendees }: any) => {


	const Status = ({ status }: StatusProps) =>
		['confirmed', 'predicted'].includes(status) ? (
			<Box display="flex" alignItems="center">
				{status === 'confirmed' && <CheckCircleIcon />}
				{status === 'predicted' && <TrackChanges />}
				<span className='capitalize' style={{ marginLeft: 4 }}>{status}</span>
			</Box>
		) : (
			<></>
		);

	const ProspectStatus = ({ prospect }: ProspectStatusProps) => (
		<IconButton size="large">
			{prospect ? <StarIcon /> : <PlaylistAddIcon />}
		</IconButton>
	);
	const firstThreeAttendees = attendees.slice(0, 3);

	const pills: any[] = [
		"Job title",
		"Organizations",
		"Speaker",
		"Status",
		"Prospects attending",
		"Owners",
		"Clear filters",
	];
	return (
		<div>
			<div className="flex flex-col ">
				<div className="flex justify-between items-center flex-wrap">
					<form className="group relative mb-2 md:mb-0">
						<svg
							width="20"
							height="20"
							fill="currentColor"
							className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							/>
						</svg>

						<input
							className=" disabled w-full md:w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-1 pl-10 ring-1 ring-slate-200 shadow-sm"
							disabled
							type="text"
							placeholder="Search attendees..."
						/>
					</form>
					<div>
						<TableActions />
					</div>
				</div>
				<div className="flex pill-container flex-wrap mt-4">
					{pills?.map((pill: string, i: number) => (
						<span key={i} className="mr-2 ">
							<Pill text={pill} />
						</span>
					))}
				</div>
			</div>

			<div className="block w-full overflow-x-auto">
				<table className="items-center bg-transparent w-full border-collapse ">
					<thead>
						<tr className="border px-8 py-4 border-l-0 border-r-0">
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left"></th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Name
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Title
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Organization
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Status
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Speaking
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Prospects
							</th>
						</tr>
					</thead>

					<tbody>
						{firstThreeAttendees &&
							firstThreeAttendees.map((e: any, i: number) => (
								<tr key={i} className="border px-8 py-4 border-l-0 border-r-0">
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										<Image
											className="rounded-full"
											height="20"
											width="20"
											src={e.image}
											alt="table-img"
										/>
									</th>
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										{e.name}
									</th>
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										{e.title}
									</th>
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
										{e.organization}
									</td>
									<td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										<Status status={e.status.toLowerCase()} />
									</td>
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
										{e.speaking && <SpeakerNotesIcon />}

									</td>
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
										<ProspectStatus prospect={e.prospect} />
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AttendeesTable;
