
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material"

import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState, memo } from "react";
import { formatNumber } from "../utils/utils";

import Attending from "public/icons/cards/Attending.svg";
import PersonChartRising from "public/icons/cards/PersonChartRising.svg";
import Seniority from "public/icons/cards/Seniority.svg";
import WindowSearch from "public/icons/cards/WindowSearch.svg";

import Image from "next/image";
import EventCard from "./EventCard";

const attendeeSummariesData = [
	{
		key: "industries",
		title: "Attendee industry",
		Icon: Seniority,
		skeleton: 3,
		loading: true,
	},
	{
		key: "job_functions",
		title: "Attendee job function",
		Icon: Attending,
		skeleton: 3,
		loading: true,
	},
	{
		key: "seniorities",
		title: "Attendee seniority",
		Icon: PersonChartRising,
		skeleton: 3,
		loading: true,
	},
];


const mapCardValues = (cards = []) =>
	cards.map((card: any) => ({
		value: card?.pct && `${card?.pct}%`,
		subscript: card?.name,
	}));

// eslint-disable-next-line react/display-name
const EventAttendeeSummary = memo(({ data }: any) => {
	const [eventAttendeeSummary, setEventAttendeeSummary] = useState(
		attendeeSummariesData
	);

	useEffect(() => {

		const mapped = attendeeSummariesData.map((item: any) => ({
			...item,
			loading: false,
			cardValues: mapCardValues(
				data && [item.key] && data[item.key].length && data[item.key]
			),
		}));

		setEventAttendeeSummary([...mapped]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const InfoCards = ({ cards }: any) => {
		return (
			<>
				{cards.map((summary: any) => {
					return (
						<Grid item xs={12} md={3} sm={6} key={summary.key}>
							<Card sx={{
								backgroundColor: "#F8F8FF",
								boxShadow: "none",
								borderRadius: 0,
								height: "100%",
								display: "flex",
								flexDirection: "column",
								minWidth: { sm: 300 },
							}}>
								<CardHeader
									sx={{ paddingBottom: 0 }}
									subheader={
										<Box sx={{ display: "flex", justifyContent: "space-between" }}>
											<Box sx={{
												fontWeight: 600,
												fontSize: 16,
											}}>
												{summary.title}
											</Box>
											<Image src={summary.Icon} width={32} height={32} alt="icon-svg" />
										</Box>
									}
								/>
								<CardContent sx={{ paddingTop: 0, paddingBottom: 16 }}>
									{!summary.loading &&
										(summary.cardValues || []).map(
											({ value, subscript }: any, index: number) => (
												<Box sx={{ display: "flex" }} key={`${summary.key}-${index}`}>
													{(value || value === 0) && (
														<Box sx={{
															fontWeight: 600,
															marginRight: 8,
														}}>
															{typeof value === "number"
																? formatNumber(value)
																: value}
														</Box>
													)}
													{subscript && (
														<Box sx={{ fontWeight: 400 }}>
															{subscript}
														</Box>
													)}
												</Box>
											)
										)}
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</>
		);
	};


	return (
		<div className="mx-4 text-black md:mx-24 mb-8 md:mb-16">

			<Grid container spacing={5} sx={{ marginTop: 12, display: "flex", flexDirection: { xs: "column", sm: "row" }, flexWrap: "nowrap", overflowY: "auto" }}>
				<EventCard />
				<InfoCards cards={eventAttendeeSummary} />
			</Grid>
		</div>
	);
});

export { EventAttendeeSummary };
