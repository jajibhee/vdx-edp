import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import WindowSearch from "public/icons/cards/WindowSearch.svg";
import { formatNumber } from "../utils/utils";

const EventCard = () => {
	return (
		<Grid item xs={12} md={3} sm={6}>
			<Card
				sx={{
					backgroundColor: "#F8F8FF",
					boxShadow: "none",
					borderRadius: 0,
					height: "100%",
					display: "flex",
					flexDirection: "column",
					minWidth: { sm: 300 },
				}}
			>
				<CardHeader
					sx={{ paddingBottom: 0 }}
					subheader={
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Box
								sx={{
									fontWeight: 600,
									fontSize: 16,
								}}
							>
								Event Stats
							</Box>
							<Image src={WindowSearch} width={32} height={32} alt="icon-svg" />
						</Box>
					}
				/>
				<CardContent sx={{ paddingTop: 0, paddingBottom: 16 }}>
					<Box sx={{ display: "flex" }}>
						<Box
							sx={{
								fontWeight: 600,
								marginRight: 8,
							}}
						>
							{formatNumber(21062)}
						</Box>

						<Box sx={{ fontWeight: 400 }}>attendees on Vendelux</Box>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Box
							sx={{
								fontWeight: 600,
								marginRight: 8,
							}}
						>
							{formatNumber(791)}
						</Box>

						<Box sx={{ fontWeight: 400 }}>exhibitors and sponsors</Box>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default EventCard;
