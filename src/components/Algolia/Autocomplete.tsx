import React from 'react'

const Autocomplete = () => {
	return (
		<div>

			<div className="aaAutocomplete autocomplete--front input-width" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="autocomplete-5-label">
				<form className="aaForm aaForm--small sm:w-20 md:w-full" action="" role="search" data-hs-cf-bound="true"><div className="aaInputWrapperPrefix">
					<label className="aaLabel">
						<button className="aaSubmitButton">
							<svg width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path></svg></button></label></div><div className="aaInputWrapper">
						<input onChange={() => window.open('https://vendelux.com/app/events/search')} className="aaInput sm:w-9 md:w-full" aria-autocomplete="both" aria-labelledby="autocomplete-5-label" id="autocomplete-5-input"
							autoComplete="off" placeholder="Search 66,000+ B2B events" type="search" value="" />
					</div>
					<div className="aaInputWrapperSearchButton aaInputWrapperSearchButton--small group">
						<div onClick={() => window.open('https://vendelux.com/app/events/search')} className="aisSearchButton aisSearchButton--small disabled">Find</div>
						{/* <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Login to search</span> */}
					</div></form></div>
		</div>
	)
}

export default Autocomplete