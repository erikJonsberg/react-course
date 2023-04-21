import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
	const history = useHistory();
	const addMeetupHandler = (meetupData) => {
		fetch(
			"https://react-refresher-cdbf5-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			history.replace("/");
		});
	};
	return (
		<div>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</div>
	);
};

export default NewMeetupPage;
