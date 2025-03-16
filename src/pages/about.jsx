import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import FloatingBubbles from "../skills/skills";
import EducationTimeline from "../components/education/EducationTimeline";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Certifications from "../components/coursework/CourseWork";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<p><i>AI-Driven Marketing Strategist | Growth Catalyst | Data-Backed Brand Storyteller</i></p>
								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="subtitle about-subtitle">
								{INFO.about.description_2}
								<FloatingBubbles />
								</div>
								<div className="subtitle about-subtitle">
								<EducationTimeline />
								</div>
								<div className="subtitle about-subtitle">
								<Certifications />
								</div>
								<div className="subtitle about-subtitle">
								<a
        href="https://syd-mushaf.tiiny.site" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
      >
        View Resume
      </a>
									</div>
								
								
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
