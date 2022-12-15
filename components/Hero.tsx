import React from "react";

const Hero = () => {
	return (
		<div className="w-full ">
			<div className="flex w-full flex-col md:flex-row my-12 py-16 gap-8 px-16 items-center justify-evenly">
				<div className="w-[100%] md:w-[40%] flex flex-col gap-4">
					<h1 className="font-medium text-center md:text-left text-6xl font-fredoka">
						What We Do
					</h1>
					<p className="text-xl md:text-2xl opacity-80 text-center md:text-left ">
						Lorem ipsum dolor, sit amet
						consectetur adipisicing elit.
						Excepturi delectus amet sed
						accusamus ducimus corporis ad
						deserunt, quis sequi nobis
						cupiditate soluta repellat culpa
						dolore repudiandae iusto,
						praesentium voluptas quasi.
					</p>
					<div className="flex justify-center md:justify-start">
						<button className="p-3 py-3	 flex justify-between font-medium text-white bg-[#65c2e9] shadow-2xl rounded-2xl">
							<span className="material-symbols-outlined pr-2">
								favorite
							</span>
							<h1 className="uppercase">
								Donate! &nbsp;
							</h1>
						</button>
					</div>
				</div>
				<div>
					<img
						className="h-80 rounded-xl shadow-xl"
						alt="Hero Image"
						src="https://images.unsplash.com/photo-1670808951552-9d804d0033ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					/>
				</div>
			</div>
			<hr className="w-[90vw] ml-[5vw]" />
			<div className="my-8 md:my-16">
				<h1 className="font-medium text-4xl md:text-5xl font-fredoka text-center">
					Impact We&apos;ve Made
				</h1>
				<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-28 mt-12">
					<div>
						<h1 className="text-xl p-4">
							<span className="font-semibold flex items-center justify-center text-6xl">
								100{" "}
								<span className="text-2xl font-normal">
									{" "}
									&nbsp;K+
								</span>
							</span>
							<p className="text-[#00ccff] text-center">
								Did Something
							</p>
						</h1>
					</div>
					<div>
						<h1 className="text-xl p-4">
							<span className="font-semibold flex items-center justify-center text-6xl">
								100{" "}
								<span className="text-2xl font-normal">
									{" "}
									&nbsp;K+
								</span>
							</span>
							<p className="text-[#00ccff] text-center">
								Did Something
							</p>
						</h1>
					</div>
					<div>
						<h1 className="text-xl p-4">
							<span className="font-semibold flex items-center justify-center text-6xl">
								100{" "}
								<span className="text-2xl font-normal">
									{" "}
									&nbsp;K+
								</span>
							</span>
							<p className="text-[#00ccff] text-center">
								Did Something
							</p>
						</h1>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-28 mt-12">
					<div className="flex flex-col items-center ">
						<h1 className="text-5xl flex items-center font-semibold">
							20
							<p className="text-2xl font-normal">
								&nbsp;K+
							</p>
						</h1>{" "}
						<span className="text-[#00ccff] text-center text-2xl">
							Volunteers
						</span>
					</div>
					<div className="flex flex-col items-center ">
						<h1 className="text-5xl flex items-center font-semibold">
							5
							<p className="text-2xl font-normal">
								&nbsp;+
							</p>
						</h1>{" "}
						<span className="text-[#00ccff] text-center text-2xl">
							States
						</span>
					</div>
					<div className="flex flex-col items-center ">
						<h1 className="text-5xl flex items-center font-semibold">
							38
							<p className="text-2xl font-normal">
								&nbsp;+
							</p>
						</h1>{" "}
						<span className="text-[#00ccff] text-center text-2xl">
							Cities
						</span>
					</div>
					<div className="flex flex-col items-center ">
						<h1 className="text-5xl flex items-center font-semibold">
							12
							<p className="text-2xl font-normal">
								&nbsp;+
							</p>
						</h1>{" "}
						<span className="text-[#00ccff] text-center text-2xl">
							Partners
						</span>
					</div>
				</div>
			</div>
			<hr className="w-[90vw] ml-[5vw]" />
			<div className="my-8 md:my-16">
				<h1 className="font-medium text-4xl md:text-5xl font-fredoka text-center">
					How We Work
				</h1>
			</div>
			<hr className="w-[90vw] ml-[5vw]" />

			{/* News Section  */}

			<div className="my-8 md:my-16">
				<h1 className="font-medium text-4xl md:text-5xl font-fredoka text-center">
					News Around Us
				</h1>
			</div>

			<hr className="w-[90vw] ml-[5vw]" />

			<div className="my-8 md:my-16">
				<h1 className="font-medium text-4xl md:text-5xl mx-2 font-fredoka text-center">
					Look At What We Have To Say
				</h1>
				<div className="flex flex-col mx-2 flex-warp md:flex-row gap-8 justify-evenly items-stretch mt-12">
					<div className="">
						<iframe
							width="360"
							height="200"
							src="https://www.youtube.com/embed/eUtemvRpu30"
							title="Kung Fu Panda Suite"
							frameBorder="0"
							className="rounded-xl"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						<h2 className="text-center font-medium mt-4 text-lg">
							Kung Fu Panda
						</h2>
					</div>
					<div>
						<iframe
							width="360"
							height="200"
							className="rounded-xl"
							src="https://www.youtube.com/embed/dQw4w9WgXcQ"
							title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
						<h2 className="text-center font-medium mt-4 text-lg">
							Never Gonna Give You Up
						</h2>
					</div>
					<div>
						<iframe
							width="360"
							className="rounded-xl"
							height="200"
							src="https://www.youtube.com/embed/OPf0YbXqDm0"
							title="Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
						<h2 className="text-center font-medium mt-4 text-lg">
							Uptown Funk
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
