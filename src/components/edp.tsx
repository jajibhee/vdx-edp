import Image from "next/image";


const Edp = () => {
	return (
		<div className="bg-white text-black">
			<div className="">
				<div className="">
					<h1 className="">
						Web Summit 2023
					</h1>
				</div>
				<div className="">
					<h3 className="">
						Nov 13 - 16, 2023
					</h3>
				</div>
				<div className="">
					<div className="">
						<div className="">
							<span className=""></span>
							<span className="ml-2">
								Altice Arena &amp; Fil | Lisbon, Portugal
							</span>
						</div>
						<div className="">
							<span className=""></span>
							<span className="ml-2">Free</span>
							<span className="pl-1">
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
						<div className="">
							<span className=""></span>
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
					<div className="">
						<div className="">
							<div className="">
								<div className="">
									<Image src='https://i.vendelux.com/--PpTyxSDdBfCpLW7Qojd5hfijc=/fit-in/412x246/filters:upscale():fill(f0eff9,1)/media/pic_folder/5iw2NPQNZMjKkFYPVhzCHXYChceDryvhGPQpZZwZ5riX_SUG4dPy.png'
										width={120}
										height={35}
										alt='vdx-testing'
										priority
									/>
									<h6 className="">
										197 prospects attending
									</h6>
								</div>
							</div>
							<div className="">
								<div className=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edp;
