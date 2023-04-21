import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = (props) => {
	const favoritesCtx = useContext(FavoritesContext);

	let content;

	if (favoritesCtx.totalFavorites === 0) {
		content = <h3>You don't have any favorites yet. Start adding some.</h3>;
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
};

export default FavoritesPage;
