import Image from "next/image";
import TableTabs from "./Table/TableTabs";


const Edp = () => {
	return (
		<div className="flex flex-col md:flex-row mx-4 text-black md:mx-24 justify-between">
			<div className="mt-12">
				<div className="">
					<h1 className="text-xl font-semibold">
						Web Summit 2023
					</h1>
				</div>
				<div className="mt-4">
					<h3 className="">
						Nov 13 - 16, 2023
					</h3>
				</div>
				<div className="">
					<div className="">
						<div className="flex items-center mt-4">
							<Image src='/icons/cards/GradientPin.svg'
								width={15}
								height={15}
								alt={'pin'}
							/>
							<span className="ml-2">
								Altice Arena &amp; Fil | Lisbon, Portugal
							</span>
						</div>

						<div className="flex items-center mt-4">
							<Image src='/icons/cards/GradientPocketBook.svg'
								width={15}
								height={15}
								alt={'pin'}
							/>
							<span className="ml-2">Free</span>
							<span className="pl-2">
								{" "}
								|{" "}
								<a
									href="/media/file_folder/Web_Summit_Lisbon_2023_PO.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									Get sponsorship info
								</a>{" "}
							</span>
						</div>
						<div className="flex items-center mt-4">
							<Image src='/icons/cards/UrlIcon.svg'
								width={15}
								height={15}
								alt={'pin'}
							/>
							<a
								href="https://websummit.com/?utm_source=vendelux.com"
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
							>
								websummit.com
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">

					<div className="flex flex-col flex-1">
						<div className="mt-4">Web Summit is a technology conference that takes place annually in Lisbon, Portugal. The conference is known for attracting high-profile speakers and attendees from the technology industry, including CEOs of major technology companies, venture capitalists, and other influential figures. Web Summit typically focuses on topics related to the internet, technology, and entrepreneurship. It is considered one of the largest technology conferences in the world.</div>
						<button className="underline pointer my-4">Show more</button>
					</div>
					<div className="flex justify-center items-center">
						<Image src='https://i.vendelux.com/--PpTyxSDdBfCpLW7Qojd5hfijc=/fit-in/412x246/filters:upscale():fill(f0eff9,1)/media/pic_folder/5iw2NPQNZMjKkFYPVhzCHXYChceDryvhGPQpZZwZ5riX_SUG4dPy.png'
							width={300}
							height={150}
							object-fit="cover"
							alt='event-logo'
							priority
						/>
					</div>
				</div>
				<TableTabs />
			</div>
		</div>






	);
};

export default Edp;
