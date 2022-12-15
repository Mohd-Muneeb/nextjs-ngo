import Image from "next/image";
import React from "react";
import background from "../../assets/background-hero-about.svg";

const Hero = () => {
	return (
		<div className="flex relative flex-row items-center px-[10vw] h-[85vh] md:h-[40vh]">
			<div className="flex flex-col gap-4">
				<h1 className="text-5xl font-fredoka font-medium">
					Who We Are
				</h1>
				<p className="text-md font-inter font-light">
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Blanditiis repellendus
					ducimus iusto amet saepe consequuntur,
					necessitatibus hic doloremque molestiae
					iure ipsum eius nihil sed quae aliquid.
					Excepturi quos illum rem? Lorem ipsum
					dolor sit amet consectetur adipisicing
					elit. Fugit quas ipsa sequi voluptas
					voluptatum minus laborum, dolor a sed
					quia saepe, commodi labore veritatis
					dignissimos, suscipit beatae nulla
					temporibus itaque.
				</p>
				<div>
					<button className="p-3 py-3	flex justify-between font-medium text-white bg-[#65c2e9] shadow-2xl rounded-2xl">
						Know Us!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
