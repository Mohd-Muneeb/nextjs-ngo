import Head from "next/head";
import React from "react";
import Board from "../components/about/Board";
import Header from "../components/about/Header";
import Hero from "../components/about/Hero";
import Partners from "../components/about/Partners";
import Team from "../components/about/Team";

const About = () => {
	return (
		<>
			<Head>
				<title>About Us</title>
			</Head>
			<div>
				<Hero />
				<Header />
				<Team />
				{/* <Board /> */}
				{/* <Partners /> */}
			</div>
		</>
	);
};

export default About;
