import React from "react";

const Tabs = () => {
	return (
		<div className="bg-tabs">
			<div role="tablist">
				<button
					className="px-2 py-4 bg-white"
					type="button"
					role="tab"
					aria-selected="true"
					aria-controls="mui-p-38185-P-attendee"
					id="mui-p-38185-T-attendee"
				>
					<div className="">
						Attendees<span className="jss48">(21,062)</span>
					</div>
				</button>
				<button
					className="px-2 py-4"

					type="button"
					role="tab"
					aria-selected="false"
					aria-controls="mui-p-38185-P-sponsor"
					id="mui-p-38185-T-sponsor"
				>
					<div className="MuiBox-root css-70qvj9">
						Exhibitors and sponsors<span className="jss48">(791)</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Tabs;
