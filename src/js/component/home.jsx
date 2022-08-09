import React from "react";
import Jumbotron from "./jumbotron/jumbotron.jsx";
import Navbar from "./navbar/navbar.jsx";
import Card from "./card/card.jsx";
import Footer from "./footer/footer.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
	<>
		<Navbar />
		<div className="container">
		<Jumbotron
			title="A Warm Welcome"
			description="Lorem ipsum dolor sit amet, consectetur adipisionin elit. Ipsa, ipsam, eligencli in quo sunct poasimus non incidunt edit vero aliquid similique qunaerat nam nobis illo impremafur vitae fugiat numguam repelient."
			buttonLabel="Call to action!"
			buttonURL="https://www.youtube.com/watch?v=dM2mV2oqxug"
		/>
		<Card />
		</div>
		<Footer />
	</>
	);
};

export default Home;
