import Head from "next/head";
import React from "react";
import GalleryContainer from "../components/GalleryContainer";

const Gallery = () => {
	return (
		<>
			<Head>
				<title>Gallery</title>
			</Head>
			<div className="h-full py-8">
				<h1 className="text-5xl font-fredoka text-center">
					Gallery
				</h1>
				<hr className="w-[80vw] ml-[10vw] my-8 " />
				<h1 className="font-light mt-4 font-inter text-center">
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Voluptas nam
					repudiandae veniam dolorum sapiente
					labore. Eligendi dolorum debitis qui ad
					consequatur earum iure necessitatibus
					unde, voluptatibus ullam, aperiam
					tempore aliquid.
				</h1>
				<GalleryContainer />
				<hr className="w-[80vw] ml-[10vw]" />
				<div className="mt-12">
					<h1 className="text-4xl font-fredoka text-center">
						Watch Our Videos
					</h1>
				</div>
			</div>
		</>
	);
};

export default Gallery;
