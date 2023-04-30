import React from "react"
import Pill from "../Buttons/Pill"

// import { useAttendees } from '../hooks/useAttendees';
const AttendeesTable = ({ attendees }: any) => {


	const pills: any[] = ['Job title', 'Organizations', 'Speaker', 'Status', 'Prospects attending', 'Owners', 'Clear filters']
	return (
		<div>
			<div className="flex flex-col ">
				<div>
					<form className="group relative">
						<svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
							<path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
						</svg>

						<input className=" disabled focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search attendees..." />
					</form>
				</div>
				<div className="flex pill-container mt-4">
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
						<tr>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Name
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Title
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Organization
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Speaking
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Status
							</th>
							<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Prospects
							</th>
						</tr>
					</thead>

					<tbody>
						{attendees && attendees.map((e: any, i: number) => (

							<tr key={i}>

								<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">

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
									{e.speaking}
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
									{e.tatus}
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
									{e.prospect}
								</td>

							</tr>
						))}


					</tbody>

				</table>
			</div></div>
	)
}

export default AttendeesTable