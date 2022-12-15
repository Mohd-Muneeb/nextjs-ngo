import React from "react";

const Team = () => {
	return (
		<div className="my-12">
			<h1 className="font-fredoka font-medium text-5xl text-center">
				{" "}
				Our Team
			</h1>
			<div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 my-12">
				<div>
					<div className="w-[300px] h-[300px] bg-slate-900">
						Image
					</div>
					<div className="text-center mt-4">
						<h1>Name</h1>
						<p>Position</p>
					</div>
				</div>
				<div className="w-[70%] md:w-[50%] text-center md:text-left font-light text-lg">
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Ipsam consequuntur,
					hic rem culpa, necessitatibus dolore
					accusantium dolorum cupiditate ad
					accusamus exercitationem debitis? Sunt
					ab facilis nobis exercitationem
					explicabo quos placeat! Safeena, a
					London School of Economics graduate, has
					worked extensively with rural and urban
					underserved communities in South
					America, Africa and Asia. After
					returning to India, Safeena chose the
					agenda closest to her heart – that of
					girls’ education – and founded Educate
					Girls. Safeena’s efforts to bridge the
					gender gap in education in India have
					been widely recognized. She has been
					conferred with the 2017 NITI Aayog’s
					Women Transforming India Award, the 2016
					NDTV-L’Oréal Paris Women of Worth Award,
					and has in the past received the British
					Asian Trust’s Special Recognition Award
					from HRH Prince Charles for outstanding
					contribution in education. Moreover,
					Educate Girls has received the
					prestigious 2015 Skoll Award, 2014 WISE
					Award, the 2014 USAID Millennium
					Alliance Award, the 2014 Stars Impact
					Award and the India Development
					Marketplace Award in 2011 from the World
					Bank. Under Safeena’s leadership,
					Educate Girls initiated the world’s
					first Development Impact Bond (DIB) in
					education, a proof of concept that ties
					funding to outcomes. In 2018, on its
					completion, the Educate Girls’ DIB
					surpassed both its target outcomes by
					achieving 160% of its learning target
					and 116% of its enrolment target <br />{" "}
					<br />
					The results are testimony to the fact
					that Educate Girls continues to deliver
					quality at scale and value to every
					single child in the program.
					<br />
					<br />
					Under Safeena’s leadership, Educate
					Girls initiated the world’s first
					Development Impact Bond (DIB) in
					education, a proof of concept that ties
					funding to outcomes. In 2018, on its
					completion, the Educate Girls’ DIB
					surpassed both its target outcomes by
					achieving 160% of its learning target
					and 116% of its enrolment target. The
					results are testimony to the fact that
					Educate Girls continues to deliver
					quality at scale and value to every
					single child in the program.
				</div>
			</div>
		</div>
	);
};

export default Team;
