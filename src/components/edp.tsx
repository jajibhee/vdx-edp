import { useState } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getFormattedCost, truncateString } from "./utils/utils";
import Link from "next/link";

type IEventDetails = {
	title: any;
	date: any;
	url: any;
	country: any;
	description: any;
	venue: any;
	location: any;
	costLow: any;
	costHigh: any;
};

const Edp = ({
	title,
	date,
	venue,
	url,
	description,
	location,
	country,
	costLow,
	costHigh,
}: IEventDetails) => {
	const [more, setMore] = useState(false);
	const locationDetails: string = venue + (location ? " | " + location : "");

	const formattedEventPrice =
		Number(costLow) < 1 ? "Free" : getFormattedCost(costLow, costHigh);

	const linkToSponsorshipInfo = () => {
		let link = <Link href="/auth/register">Get sponsorship info</Link>;

		return <span className="pl-1"> | {link} </span>;
	};
	return (
		<div className="flex flex-col md:flex-row text-black justify-between">
			<div className="mt-12">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-semibold">{title}</h1>
					<div className="flex justify-between items-center">
						<FavoriteBorderIcon />
						<h1 className="ml-2">Save to Planner</h1>
					</div>
				</div>
				<div className="mt-4">
					<h2 className="">{date}</h2>
				</div>
				<div className="">
					<div className="">
						<div className="flex items-center mt-4">
							<Image
								src="/icons/cards/GradientPin.svg"
								width={15}
								height={15}
								alt={"pin"}
							/>

							<span className="ml-2">
								{locationDetails}
								{country ? <>, {country}</> : null}
							</span>
						</div>

						<div className="flex items-center mt-4">
							<Image
								src="/icons/cards/GradientPocketBook.svg"
								width={15}
								height={15}
								alt={"pin"}
							/>
							<span className="ml-2">{formattedEventPrice}</span>
							{linkToSponsorshipInfo()}
						</div>
						<div className="flex items-center mt-4">
							<Image
								src="/icons/cards/UrlIcon.svg"
								width={15}
								height={15}
								alt={"pin"}
							/>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
							>
								{url}
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col flex-1">
						<div className={'mt-4'}>
							{more ? description : truncateString(description, 200)}
						</div>
						<button onClick={() => setMore(true)}
							className="underline pointer my-4"
						>
							{more ? "" : "Show More"}
						</button>
					</div>
					<div className="flex justify-center items-center">
						<Image
							src="https://i.vendelux.com/--PpTyxSDdBfCpLW7Qojd5hfijc=/fit-in/412x246/filters:upscale():fill(f0eff9,1)/media/pic_folder/5iw2NPQNZMjKkFYPVhzCHXYChceDryvhGPQpZZwZ5riX_SUG4dPy.png"
							width={200}
							height={120}
							object-fit="cover"
							alt="event-logo"
							priority
						/>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Edp;
