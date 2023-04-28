import { createTheme, alpha } from '@mui/material/styles';
import DefaultTheme from '@mui/material/styles/createTheme';
import { grey } from '@mui/material/colors';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { CSSProperties } from 'react';


const themeWithPalette = createTheme({
	palette: {
		primary: {
			main: '#543fed',
		},
		success: {
			main: '#5CB85C',
		},
		grey: {
			main: grey[300],
			dark: grey[400],
		},
	},
});

export const theme: DefaultTheme = createTheme(themeWithPalette, {
	spacing: (value: number) => value * 4,
	vdxColors: {
		mediumGrey: '#f0eff9',
		vdxColor: '#543fed',
		vdxBlue: '#462ac8',
		vdxLightBlue: '#f1f1fc',
		vdxRedPurple: '#cd5b8d',
		vdxPurple: '#a04fd5',
		vdxYellowOrange: '#f7b500',
		vdxRedOrange: '#da7263',
		vdxOrange: '#de7c55',
		vdxGreen: '#39ba3a',
		vdxSalmon: '#f97171',
		vdxLightColor: '#ffffff',
		cdxDarkColor: '#000000',
		vdxBlack: '#202022',
		vdxMuterColor: 'rgba(0, 0, 0, 0.38)',
		vdxGrey: '#9e9e9e',
		vdxLightGrey: '#faf9ff',
		vdxLightestGrey: '#f2f1fc',
		vdxMediumGrey: '#f0eff9',
		vdxDarkerGrey: '#747195',
		vdxDarkestGrey: '#5a5878',
		vdxGrey100: '#f6f9fc',
		vdxGrey200: '#e9ecef',
		vdxGrey300: '#dee2e6',
		vdxGrey400: '#ced4da',
		vdxGrey500: '#adb5bd',
		vdxGrey600: '#8898aa',
		vdxGrey700: '#525f7f',
		vdxGrey800: '#32325d',
		vdxGrey900: '#212529',
	},
	obscureBackdropFilter: 'brightness(.7) blur(1px)',
	typography: {
		fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		button: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			textTransform: 'none',
		},
		h1: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			fontWeight: 500,
			color: 'rgba(82, 95, 127)',
		},
		h2: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			fontWeight: 500,
		},
		h3: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			fontWeight: 500,
		},
		h4: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			fontWeight: 600,
		},
		body1: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		body2: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		caption: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		h5: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
			'@media (max-width:768px)': {
				// mobile hack to reduce lcp
				fontSize: '1rem !important',
			},
		},

		h6: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		overline: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		subtitle1: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
		subtitle2: {
			fontFamily: ['Barlow', 'Helvetica', 'Arial', '"sans-serif"'].join(','),
		},
	},
	components: {
		// style the tooltip to match bootstrap's
		MuiTooltip: {
			styleOverrides: {
				arrow: {
					color: themeWithPalette.palette.common.black,
					opacity: '0.9 !important',
				},
				tooltip: {
					fontSize: '0.875rem',
					backgroundColor: themeWithPalette.palette.common.black,
					opacity: '0.9 !important',
				},
			},
		},
		MuiDataGrid: {
			styleOverrides: {
				cell: {
					'&:focus': {
						outline: 'none',
					},
				},
				columnHeader: {
					'&:focus': {
						outline: 'none',
					},
				},
			},
		},
		MuiTabs: {
			defaultProps: {
				textColor: 'inherit',
				indicatorColor: 'secondary',
			},
			styleOverrides: {
				indicator: {
					backgroundColor: '#ffffff',
				},
				scroller: {
					backgroundColor: '#D7E1FE',
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: ({ ownerState }: any) => ({
					paddingLeft: 24,
					paddingRight: 24,
					fontSize: 20,
					...(ownerState.selected ? { backgroundColor: '#ffffff' } : {}),
				}),
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'success' },
					style: { color: 'white' },
				},
				{
					props: { variant: 'contained', color: 'grey' },
					style: {
						color: themeWithPalette.palette.getContrastText(
							themeWithPalette.palette.grey[300]
						),
					},
				},
				{
					props: { variant: 'outlined', color: 'grey' },
					style: {
						color: themeWithPalette.palette.text.primary,
						borderColor: 'rgba(0, 0, 0, 0.23)',
						'&.Mui-disabled': {
							border: `1px solid ${themeWithPalette.palette.action.disabledBackground}`,
						},
						'&:hover': {
							borderColor: 'rgba(0, 0, 0, 0.23)',
							backgroundColor: alpha(
								themeWithPalette.palette.text.primary,
								themeWithPalette.palette.action.hoverOpacity
							),
						},
					},
				},
				{
					props: { color: 'grey', variant: 'text' },
					style: {
						color: themeWithPalette.palette.text.primary,
						'&:hover': {
							backgroundColor: alpha(
								themeWithPalette.palette.text.primary,
								themeWithPalette.palette.action.hoverOpacity
							),
						},
					},
				},
			],
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});
interface VendeluxThemeExtensions {
	vdxColors: {
		mediumGrey: CSSProperties['color'];
		vdxColor: CSSProperties['color'];
		vdxBlue: CSSProperties['color'];
		vdxLightBlue: CSSProperties['color'];
		vdxRedPurple: CSSProperties['color'];
		vdxPurple: CSSProperties['color'];
		vdxYellowOrange: CSSProperties['color'];
		vdxRedOrange: CSSProperties['color'];
		vdxOrange: CSSProperties['color'];
		vdxGreen: CSSProperties['color'];
		vdxSalmon: CSSProperties['color'];
		vdxLightColor: CSSProperties['color'];
		cdxDarkColor: CSSProperties['color'];
		vdxBlack: CSSProperties['color'];
		vdxMuterColor: CSSProperties['color'];
		vdxGrey: CSSProperties['color'];
		vdxLightGrey: CSSProperties['color'];
		vdxLightestGrey: CSSProperties['color'];
		vdxMediumGrey: CSSProperties['color'];
		vdxDarkerGrey: CSSProperties['color'];
		vdxDarkestGrey: CSSProperties['color'];
		vdxGrey100: CSSProperties['color'];
		vdxGrey200: CSSProperties['color'];
		vdxGrey300: CSSProperties['color'];
		vdxGrey400: CSSProperties['color'];
		vdxGrey500: CSSProperties['color'];
		vdxGrey600: CSSProperties['color'];
		vdxGrey700: CSSProperties['color'];
		vdxGrey800: CSSProperties['color'];
		vdxGrey900: CSSProperties['color'];
	};
	obscureBackdropFilter: CSSProperties['filter'];
}

declare module '@mui/material/styles' {
	// noinspection JSUnusedGlobalSymbols
	interface Theme extends VendeluxThemeExtensions { }
	// noinspection JSUnusedGlobalSymbols
	interface ThemeOptions extends Partial<VendeluxThemeExtensions> { }
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		grey: true;
	}
}

declare module '@mui/material' {
	interface Color {
		main: string;
		dark: string;
	}
}
