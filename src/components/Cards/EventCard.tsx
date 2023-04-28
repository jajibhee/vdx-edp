import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import WindowSearch from "public/icons/cards/WindowSearch.svg";
import { formatNumber } from "../utils/utils";

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

const EventCard = () => {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={3} sm={6}>
			<Card className={classes.root}>
				<CardHeader
					className={classes.cardHeaderRoot}
					subheader={
						<Box display="flex" justifyContent="space-between">
							<span className={classes.cardTitle}>Event Stats</span>
							<Image src={WindowSearch} width={32} height={32} alt="icon-svg" />
						</Box>
					}
				/>
				<CardContent className={classes.cardContentRoot}>
					<div className={classes.cardDetailRoot}>
						<span className={classes.cardValue}>{formatNumber(21062)}</span>

						<span className={classes.cardSubscript}>attendees on Vendelux</span>
					</div>
					<div className={classes.cardDetailRoot}>
						<span className={classes.cardValue}>{formatNumber(791)}</span>
						<span className={classes.cardSubscript}>exhibitors and sponsors
						</span>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default EventCard;
