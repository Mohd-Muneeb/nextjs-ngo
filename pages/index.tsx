import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className="min-h-screen m-0 p-0 b-0">
			<Head>
				<title>Something</title>
			</Head>
			<header>
				<Carousel />
			</header>
			<Hero />
		</div>
	);
}
