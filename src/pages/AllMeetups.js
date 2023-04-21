import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [getMeetups, setGetMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://react-refresher-cdbf5-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];
				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setGetMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={getMeetups} />
		</section>
	);
};

export default AllMeetupsPage;
