import React from 'react'
import NavBar from './NavBar'

type Props = {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className='flex flex-col text-black justify-between'>
			<NavBar />
			{children}
		</div>
	)
}

export default Layout