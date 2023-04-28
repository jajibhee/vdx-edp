/* eslint-disable react/display-name */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";
import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState, memo } from "react";
import { formatNumber } from "../utils/utils";

import Attending from "public/icons/cards/Attending.svg";
import PersonChartRising from "public/icons/cards/PersonChartRising.svg";
import Seniority from "public/icons/cards/Seniority.svg";
import WindowSearch from "public/icons/cards/WindowSearch.svg";

import Image from "next/image";
import EventCard from "./EventCard";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#F8F8FF",
		boxShadow: "none",
		borderRadius: 0,
		height: "100%",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			minWidth: 300,
		},
	},

	cardHeaderRoot: {
		paddingBottom: 0,
	},
	cardContentRoot: {
		paddingTop: 0,
		"&:last-child": { paddingBottom: 16 },
	},
	cardTitle: {
		fontWeight: 600,
		fontSize: 16,
	},
	cardValue: {
		fontWeight: 600,
		marginRight: 8,
	},
	cardSubscript: {
		fontWeight: 400,
	},
	cardDetailRoot: {
		display: "flex",
	},
	gridContainer: {
		marginTop: 12,
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			overflowY: "auto",
		},
	},
}));

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

const initialEventStats = {
	key: "eventStats",
	title: "Event stats",
	Icon: WindowSearch,
	skeleton: 2,
	loading: true,
};

const mapCardValues = (cards = []) =>
	cards.map((card: any) => ({
		value: card?.pct && `${card?.pct}%`,
		subscript: card?.name,
	}));

const EventAttendeeSummary = memo(({ data }: any) => {
	const [eventAttendeeSummary, setEventAttendeeSummary] = useState(
		attendeeSummariesData
	);
	const [eventStats, setEventStats] = useState(initialEventStats);

	const classes = useStyles();

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
							<Card className={classes.root}>
								<CardHeader
									className={classes.cardHeaderRoot}
									subheader={
										<Box display="flex" justifyContent="space-between">
											<span className={classes.cardTitle}>{summary.title}</span>
											<Image
												src={summary.Icon}
												width={32}
												height={32}
												alt="icon-svg"
											/>

										</Box>
									}
								/>
								<CardContent className={classes.cardContentRoot}>
									{!summary.loading &&
										(summary.cardValues || []).map(
											({ value, subscript }: any, index: number) => (
												<div
													className={classes.cardDetailRoot}
													key={`${summary.key}-${index}`}
												>
													{(value || value === 0) && (
														<span className={classes.cardValue}>
															{typeof value === "number"
																? formatNumber(value)
																: value}
														</span>
													)}
													{subscript && (
														<span className={classes.cardSubscript}>
															{subscript}
														</span>
													)}
												</div>
											)
										)}
									{/* {summary.loading && (
											<>
												{[...Array(summary.skeleton).keys()].map((index) => (
													<Skeleton
														animation="wave"
														key={`summary-skeleton-${index}`}
													/>
												))}
											</>
										)} */}
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</>
		);
	};

	return (
		<Grid container spacing={5} className={classes.gridContainer}>
			<EventCard />
			<InfoCards cards={eventAttendeeSummary} />
		</Grid>
	);
});

export { EventAttendeeSummary };
