import React from "react";
import GalleryContainerCard from "./GalleryContainerCard";

const GalleryContainer = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-8 my-12 w-[80vw] ml-[10vw]">
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
			<GalleryContainerCard />
		</div>
	);
};

export default GalleryContainer;
