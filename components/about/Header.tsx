import React from "react";

const Header = () => {
	return (
		<div className="w-[80vw] ml-[10vw]">
			<h1 className="text-5xl font-medium font-fredoka mb-8">
				About Us
			</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Mollitia maxime qui
					ipsum officiis unde quos odio beatae?
					Vitae ab vero nulla? Molestiae nulla
					deserunt quam soluta nesciunt iste earum
					harum? Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Dolorum
					reiciendis doloribus delectus cum unde
					aut laborum doloremque natus, excepturi
					quod! Quae quia earum, voluptate cum
					pariatur tenetur accusamus dolores
					sapiente!
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Reprehenderit itaque
					quis dolorum, explicabo nihil iste rem
					officiis asperiores quas alias
					praesentium ipsa at illum ut laborum
					quisquam ipsum cupiditate quibusdam.
				</div>
			</div>
			<hr className="my-4" />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="h-[60vh] w-full place-items-center grid bg-slate-300 rounded-2xl">
					Some Image 1 with overlay
				</div>
				<div className="h-[60vh] w-full place-items-center grid bg-slate-300 rounded-2xl">
					Some Image 2 with overlay
				</div>
			</div>
			<div className="my-8 bg-gray-200 py-16 rounded-xl flex gap-4 flex-col md:flex-row items-center justify-around">
				<h1 className="text-5xl font-medium font-fredoka">
					GOAL
				</h1>
				<h1 className="text-2xl font-normal md:text-left text-center font-fredoka">
					Our goal is to improve access and
					quality of education for over 15 million
					children cumulatively by 2024.
				</h1>
			</div>
			<hr className="my-4" />
		</div>
	);
};

export default Header;
