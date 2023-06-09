import Image from "next/image";
import Box from '@mui/material/Box';
import Pill from "../Buttons/Pill";
import TableActions from "./TableActions";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrackChanges from '@mui/icons-material/TrackChanges';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Link from "next/link";
import { routes } from "../routes";


type StatusProps = {
	status: string;
};
type ProspectStatusProps = {
	prospect: boolean;
};

const SponsorsTable = ({ sponsors }: any) => {
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
	const pills: any[] = [
		"Status",
		"Prospects attending",
		"Owners",
		"Clear filters",
	];
	const firstThreeSponsors = sponsors.slice(0, 3);

	return (
		<div>
			<div className="flex flex-col ">

				<div className="flex justify-between items-center flex-wrap">
					<form className="group relative">
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
							className=" disabled appearance-none w-full md:w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-1 pl-10 ring-1 ring-slate-200 shadow-sm"
							disabled
							type="text"
							aria-label="Filter projects"
							placeholder="Search sponsors..."
						/>
					</form>
					<div>
						<TableActions />
					</div>
				</div>
				<div className="flex pill-container flex-wrap mt-4">
					{pills?.map((pill: string, i: number) => (
						<span key={i} className="mr-2 pill-container">
							<Pill text={pill} />
						</span>
					))}
				</div>
			</div>

			<div className="block w-full overflow-x-auto">
				<table className="items-center bg-transparent w-full border-collapse font-semibold ">
					<thead>
						<tr className="border px-8 py-4 border-l-0 border-r-0">
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left"></th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Organization
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Events
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Members
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Status
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap  text-left">
								Prospect
							</th>
						</tr>
					</thead>

					<tbody>
						{firstThreeSponsors &&
							firstThreeSponsors?.map((s: any, i: number) => (
								<tr key={i} className="border px-8 py-4 border-l-0 border-r-0">
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										<Image
											className="rounded-full"
											height="20"
											width="20"
											src={s.image}
											alt="table-img"
										/>
									</th>
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										<Link href={`${routes.orgProfile}${s.slug}/${s.uuid}`}>
											{s.organization}
											{console.log(s, 's')}
										</Link>
									</th>
									<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
										{s.events}
									</th>
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
										{s.members}
									</td>
									<td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										<Status status={s.status.toLowerCase()} />

									</td>
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
										<ProspectStatus prospect={s.prospect} />

									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SponsorsTable;
