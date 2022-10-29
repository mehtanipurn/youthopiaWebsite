import "./EventContainer.css";
import background from "../../images/technicalEventBackground.png";
import "./EventContainer.css";
import { Link, useParams } from "react-router-dom";
import dummyData from "../../pages/EventsPage/dummyData.json";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const TechnicalEvent = () => {
	const { name } = useParams();
	useEffect(() => {
		const sr = ScrollReveal({
			distance: "60px",
			reset: false,
			duration: 1200,
			delay: 500,
			origin: "bottom",
		});
		sr.reveal(`.eventImage`, { origin: "left" });
		sr.reveal(`.eventTitle`, { origin: "right" });
		sr.reveal(`.eventInfo`, { origin: "bottom" });
		sr.reveal(`.eventDescription`, { origin: "bottom" });
		sr.reveal(`.eventResgisterButton`, { origin: "bottom" });
	}, []);
	return (
		<>
			{dummyData
				.filter((items) => items.name === name)
				.map((items) => (
					<div
						className="EventContainer"
						style={{
							backgroundImage: `url(${background})`,
						}}
					>
						<div className="EventContainerChild">
							<div className="eventImage">
								<img src={items.imag} alt="" />
							</div>
							<div className="eventDetails">
								<div className="eventDetailsTop">
									<div className="eventTitle">{items.name}</div>
									<div className="eventInfo">
										<div>
											<div></div> <p>{items.location}</p>
										</div>
										<div>
											<div></div>
											<p>{items.date}</p>
										</div>
										<div>
											<div></div> <p>{items.time}</p>
										</div>
									</div>
								</div>
								<div className="eventDescription">
									<p>{items.aboutt}</p>
									<div>
										<div>
											<div></div>
											<p>{items.location ? items.location : "Unknown"}</p>
										</div>
										<div>
											<div></div>
											<p>{items.date ? items.date : "unknown"}</p>
										</div>
										<div>
											<div></div> <p>{items.time ? items.time : "unknown"}</p>
										</div>
									</div>
								</div>
								<Link to={`/register/${name}`}>
									<button className="eventResgisterButton">
										Resgister Now
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default TechnicalEvent;
