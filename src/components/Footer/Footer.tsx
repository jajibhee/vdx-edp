import React from 'react';

const Footer = () => {
	return (
		<div id="" className="bg-gray-100 py-8">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-between items-center">
					<div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 mb-4 md:mb-0">
						<span className="text-lg font-bold text-gray-800 footerLogo"></span>
					</div>
					<div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 flex justify-end">
						<div className="flex flex-wrap justify-end items-center">
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/blog" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">News</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/about" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">About</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Contact</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/careers" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Careers</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/pricing" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Pricing</a>
							</div>
							<div className="mt-2 md:mt-0 md:ml-6">
								<a href="/signin" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Sign in</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-300 pt-8">
					<p className="text-gray-600 text-sm md:text-base">
						© All rights reserved. <a href="/terms" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Terms of Service</a> | <a href="/privacy" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Privacy Policy</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
