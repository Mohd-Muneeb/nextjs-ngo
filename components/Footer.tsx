import Image from "next/image";
import React from "react";
import logo from "../assets/ai-svg.svg";
import curve from "../assets/icons/footercurve.svg";

//
const Footer = () => {
	return (
		<footer className="w-full text-white py-12 px-8 md:px-16 bottom-0 bg-[#61b546]">
			<div className=" justify-center flex flex-col md:flex-row items-center md:items-start  gap-12">
				<div className=" gird place-items-center">
					<div className="rounded-3xl bg-white">
						<Image
							src={logo}
							alt="Footer logo"
							height={300}
							width={250}
						/>
					</div>
				</div>
				<div className="w-full md:w-[70%] flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-start justify-around h-full">
					<div>
						<div className="">
							<h1 className="font-medium uppercase">
								Our Links
							</h1>
							<ul className="opacity-70 text-center md:text-left mt-2">
								<li>
									About Us
								</li>
								<li>
									Contact
									Us
								</li>
								<li>Gallery</li>
								<li>Donate </li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col justify-start md:justify-center items-center md:items-stretch ">
						<h1 className="mb-2 text-center md:text-left uppercase font-medium">
							NewsLetter
						</h1>
						<div className="flex gap-4 flex-col md:flex-row">
							<div className="flex flex-col gap-1">
								<label>
									Full
									Name
								</label>
								<input
									className="rounded-2xl text-black p-2"
									placeholder="John Doe "
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label>
									Email
								</label>
								<input
									className="rounded-2xl p-2 text-black"
									placeholder="text@example.com"
								/>
							</div>
						</div>
						<br />

						<div className="flex flex-col w-full gap-1">
							<label>
								Your Message
							</label>
							<textarea
								className="rounded-2xl h-28 p-2  text-black"
								placeholder="Enter the Message"
							/>
						</div>
						<br />

						<button className="bg-[#65c2e9] w-24 py-3 px-4 rounded-xl shadow-2xl text-lg font-medium">
							Submit
						</button>
					</div>
					<div className="text-center font-medium">
						<h1 className="uppercase font-medium mb-2">
							our socials!
						</h1>
						<ul className="text-center md:text-left">
							<li className="opacity-70">
								FaceBook
							</li>
							<li className="opacity-70">
								Instagram
							</li>
							<li className="opacity-70">
								Youtube
							</li>
							<li className="opacity-70">
								Twitter
							</li>
							<li className="opacity-70">
								LinkedIn
							</li>
						</ul>
					</div>
				</div>
			</div>
			<h1 className="text-center opacity-90 my-8">
				Thank you for visiting us!💖
			</h1>
			<p className="text-sm opacity-60 text-center">
				Copyright, All rights reserved. Please do ask
				for permission before violating the copyright.
			</p>
		</footer>
	);
};

export default Footer;
