import React from "react";

function article_1() {
	return {
		date: "17 January 2025",
		title: "Mission Innovate Competition 2025",
		description:
			"My team secured the 2nd position in the prestigious Mission Innovate Competition 2025, organized by the Institute Innovation Cell S.E.N.A. (AIMK)! Our project, 'Hyperlocal Air Quality Monitoring System', was our passion to innovate for environmental sustainability and social impact. The journey was challenging, but our teamwork and determination paid off. We had the honor of presenting our idea to an esteemed panel of judges: Mr. Soumik Banerjee, Founder and Managing Director of Alpha Torana Mr. Arnab Chakrabortty, National Director of Empretec India Foundation (UNCTAD) I'm grateful for this enriching experience and the support of my amazing teammates and mentors. This achievement motivates me to continue exploring innovative solutions and contributing to meaningful change.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
