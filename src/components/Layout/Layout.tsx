import React from 'react'
import NavBar from './NavBar'
import Footer from '../Footer/Footer';


type Props = {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className='flex flex-col text-black justify-between'>
			<NavBar />

			{children}
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout