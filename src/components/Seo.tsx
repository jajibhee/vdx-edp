
import React, { useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

export interface ISeo {
	description: string,
	title: string,
	pathname: string,
	imgUrl?: string
}
const Seo = ({
	description,
	title,
	pathname = '',
	imgUrl
}: ISeo
) => {
	return (
		<Head>
			<title>
				{title}
			</title>
			<meta name="description" content={description} />
			<meta property="og:image" content={`${imgUrl}`} />
			<meta property="og:title" content={`Vendelux | ${title} `} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://vendelux.com/${pathname}`} />

			<meta name="twitter:image" content={`${imgUrl}`} />
			<meta name="twitter:creator" content="@VDX" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@VDX" />
			<meta name="twitter:title" content={`Vendelux | ${title}`} />
			<link rel="shortcut icon" type="image/png" href="https://vendelux.com/frontend/static/media/blue-full-logo.086da5c289de4df08131.svg" />

			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' ></meta>

			<title>{`Vendelux | ${title}`}</title>


		</Head>
	)

};

export default Seo;


// Seo.defaultProps = {
// 	title: "WebSummit Test ",
// 	description:
// 		'Next Js EDP Page',
// 	imgUrl: 'https://vendelux.com/wp-content/uploads/2022/02/logo-4.svg',

// }

Seo.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	pathname: PropTypes.string,
}