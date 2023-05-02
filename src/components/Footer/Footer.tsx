import Image from 'next/image';


const Footer = () => {
	return (
		<div id="" className="bg-vdxLightGrey py-8 px-4 md:px-0">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 mb-4 md:mb-0">
						<Image
							src='https://vendelux.com/frontend/static/media/blue-full-logo.086da5c289de4df08131.svg'
							width='140' height='40' alt='footer-logo' />
					</div>
					<div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 flex justify-end">
						<div className="flex flex-col md:flex-row flex-wrap justify-end items-center">
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/blog" className="text-vdxDarkerGrey transition-colors duration-200">News</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/about" className="text-vdxDarkerGrey  transition-colors duration-200">About</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/contact" className="text-vdxDarkerGrey  transition-colors duration-200">Contact</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/careers" className="text-vdxDarkerGrey  transition-colors duration-200">Careers</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/pricing" className="text-vdxDarkerGrey  transition-colors duration-200">Pricing</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/signin" className="text-vdxDarkerGrey  transition-colors duration-200">Sign in</a>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-8">
					<p className="0 text-sm md:text-base">
						Copyright©  <a href="/terms" className="0  transition-colors duration-200">Terms of Service</a> | <a href="/privacy" className="0  transition-colors duration-200">Privacy Policy</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
