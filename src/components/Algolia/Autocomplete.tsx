import React from 'react'

const Autocomplete = () => {
	return (
		<div>
			<div className="aaAutocomplete autocomplete--front" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="autocomplete-5-label">
				<form className="aaForm aaForm--small" action="" role="search" data-hs-cf-bound="true"><div className="aaInputWrapperPrefix">
					<label className="aaLabel">
						<button className="aaSubmitButton"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"></path></svg></button></label></div><div className="aaInputWrapper">
						<input className="aaInput" aria-autocomplete="both" aria-labelledby="autocomplete-5-label" id="autocomplete-5-input"
							autoComplete="off" placeholder="Search 66,000+ B2B events" type="search" value="" />
					</div>
					<div className="aaInputWrapperSearchButton aaInputWrapperSearchButton--small group">
						<span className="aisSearchButton aisSearchButton--small disabled">Find</span>
						<span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Login to search</span>
					</div></form></div>
		</div>
	)
}

export default Autocomplete