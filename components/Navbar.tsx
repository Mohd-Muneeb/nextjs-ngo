import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/ai-svg.svg";

const Navbar = () => {
	const [HamburgerActive, setHamburgerActive] = useState(false);

	return (
		<nav className="h-[4.35rem] backdrop-blur-lg sticky top-0 z-50 flex justify-between items-center pr-8">
			<div className="flex items-center">
				<Image
					src={logo}
					alt="Logo image"
					height={80}
				/>
				<h1 className="font-sans uppercase text-xl font-medium  hidden md:block">
					Spoothy{" "}
					<span className="text-lg font-normal">
						Foundations
					</span>
				</h1>
			</div>

			<div className="md:flex items-center justify-evenly gap-4">
				<div className="hidden md:block uppercase font-medium text-md">
					About Us
				</div>
				<div className="uppercase hidden md:block font-medium text-md">
					Gallery
				</div>
				<h2 className="uppercase font-medium hidden md:block text-md">
					Contact Us
				</h2>
				<div className="flex items-center justify-center">
					<div className="md:border-r-0  border-r-2 border-l-0 md:border-l-2 border-slate-400 pr-4 md:pl-4">
						<button className="p-3 py-3	 flex justify-between font-medium text-white bg-[#65c2e9] shadow-2xl rounded-2xl">
							<span className="material-symbols-outlined pr-2">
								favorite
							</span>
							<h1 className="uppercase">
								Donate! &nbsp;
							</h1>
						</button>
					</div>
					<button className=" block md:hidden p-0 h-full ml-4" onClick={(e) => setHamburgerActive(!HamburgerActive)}>
						{HamburgerActive ? (
							<span className="material-symbols-outlined">
								menu_open
							</span>
						) : (
							<span className="material-symbols-outlined ">
								menu
							</span>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
