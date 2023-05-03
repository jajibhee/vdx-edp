import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AttendeesTable from './AttendeesTable';
import SponsorsTable from './SponsorsTable';
import UnlockEvent from '../UnlockEvent';
import { formatNumber } from '../utils/utils';


interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
	attendeesCount?: number;
	sponsorsCount?: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Box>{children}</Box>
					<UnlockEvent />
				</Box>
			)}

		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs({ attendeesCount, sponsorsCount, sponsors, attendees }: any) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'rgb(215, 225, 254)' }}>
				<Tabs value={value} onChange={handleChange} sx={{ fontFamily: 'Barlow', fontWeight: 'bold' }} aria-label="basic tabs example">
					<Tab label={`Attendees (${formatNumber(attendeesCount)})`} {...a11yProps(0)} />
					<Tab label={`Exhibitors and sponsors (${formatNumber(sponsorsCount)})`} {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<AttendeesTable attendees={attendees} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<SponsorsTable sponsors={sponsors} />
			</TabPanel>

		</Box>
	);
}


