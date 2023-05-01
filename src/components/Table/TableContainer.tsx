import React from 'react'
import Tabs from './Tabs'

const TableContainer = ({ attendeesCount, sponsorsCount, attendees, sponsors }: any) => {
	return (
		<section className="py-1 bg-blueGray-50">

			<div className="w-full mb-12 xl:mb-0 mx-auto mt-24">
				<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
					<div className="rounded-t mb-0 border-0">
						<div className="flex flex-wrap items-center">
							<div className="relative w-full max-w-full flex-grow ">
								<Tabs attendeesCount={attendeesCount} sponsorsCount={sponsorsCount} attendees={attendees} sponsors={sponsors} />
							</div>
						</div>
					</div>

				</div>
			</div>

		</section>
	)
}

export default TableContainer