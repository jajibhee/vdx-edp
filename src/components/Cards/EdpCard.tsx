import Image from 'next/image'
import React from 'react'

const EdpCard = () => {
	return (
		<div><div className="max-w-sm w-full lg:max-w-full lg:flex">
			<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
			</div>
			<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<div className="mb-8">
					<p className="text-sm text-gray-600 flex items-center">
						<svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
						</svg>
						Members only
					</p>
					<div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
					<p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
				</div>
				<div className="flex items-center">
					<svg width="58" height="55" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="jss67"><path fill-rule="evenodd" clipRule="evenodd" d="M6.48886 0.766602L52.0634 0.766607C55.0599 0.773582 57.5035 3.00213 57.6457 5.80623L57.6522 6.04795V12.4905V24.2144C57.6522 25.1394 56.8584 25.8893 55.8792 25.8893C54.9577 25.8893 54.2003 25.2251 54.1144 24.3757L54.1063 24.2144L54.1063 14.1654H4.46294L4.46294 42.3746C4.46558 43.3871 5.28794 44.2176 6.33184 44.305L6.50778 44.3126H16.9092C17.8884 44.3126 18.6822 45.0625 18.6822 45.9874C18.6822 46.858 17.9791 47.5735 17.08 47.6546L16.9092 47.6623L6.50231 47.6623C3.50584 47.6536 1.06369 45.4236 0.923344 42.6204L0.916992 42.3787L0.916999 12.4953L0.916992 12.4905L0.916999 12.4858L0.917001 6.0249C0.926245 3.20512 3.27687 0.906515 6.23395 0.772729L6.48886 0.766602ZM4.46294 10.8157H54.1063L54.1063 6.05311C54.103 5.04059 53.2801 4.21058 52.2352 4.12378L52.0591 4.11629L6.49436 4.11629C5.43285 4.11939 4.56252 4.88894 4.4709 5.8655L4.46294 6.03008L4.46294 10.8157ZM40.1414 29.4459C40.8338 28.7919 41.9564 28.7919 42.6488 29.4459C43.2979 30.0591 43.3385 31.0295 42.7705 31.6873L42.6488 31.8145L35.5569 38.5139C34.9078 39.1271 33.8805 39.1654 33.1842 38.6289L33.0495 38.5139L29.5035 35.1642C28.8112 34.5102 28.8112 33.4497 29.5035 32.7956C30.1527 32.1824 31.1799 32.1441 31.8763 32.6807L32.0109 32.7956L34.3032 34.9614L40.1414 29.4459ZM36.0762 19.1899C27.4294 19.1899 20.4197 25.8116 20.4197 33.9799C20.4197 42.1482 27.4294 48.77 36.0762 48.77C39.7609 48.77 43.1482 47.5676 45.8226 45.5555L54.6587 53.9024L54.7934 54.0174C55.4898 54.5539 56.517 54.5156 57.1661 53.9024C57.8585 53.2483 57.8585 52.1879 57.1661 51.5338L48.33 43.1869C50.46 40.6605 51.7328 37.4607 51.7328 33.9799C51.7328 25.8116 44.7231 19.1899 36.0762 19.1899ZM36.0762 22.5396C42.7647 22.5396 48.1868 27.6616 48.1868 33.9799C48.1868 40.2983 42.7647 45.4203 36.0762 45.4203C29.3878 45.4203 23.9657 40.2983 23.9657 33.9799C23.9657 27.6616 29.3878 22.5396 36.0762 22.5396Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="1.43324" y1="37.5591" x2="46.4879" y2="61.5769" gradientUnits="userSpaceOnUse"><stop stop-color="#543FED"></stop><stop offset="1" stop-color="#462AC8"></stop></linearGradient></defs></svg>
					<div className="text-sm">
						<p className="text-gray-900 leading-none">Jonathan Reinink</p>
						<p className="text-gray-600">Aug 18</p>
					</div>
				</div>
			</div>
		</div></div>
	)
}

export default EdpCard