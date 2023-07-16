import { createDeck } from '../services/deck.service';
import {
	NEW_DECK_FAILURE,
	NEW_DECK_REQUEST,
	NEW_DECK_SUCCESS,
	UPDATE_REMAINING,
} from '../utils/redux-types/deckTypes';

function newDeckRequest() {
	return {
		type: NEW_DECK_REQUEST,
	};
}
function newDeckFailure(error) {
	return {
		type: NEW_DECK_FAILURE,
		payload: error,
	};
}
function newDeckSuccess(deck) {
	return {
		type: NEW_DECK_SUCCESS,
		payload: deck,
	};
}

export const newDeck = () => async (dispatch) => {
	dispatch(newDeckRequest());
	try {
		const deck = await createDeck();
		dispatch(newDeckSuccess(deck.data));
	} catch (err) {
		console.log(err);
		dispatch(newDeckFailure(err));
	}
};

export const updateRemainig = (count) => {
	return {
		type: UPDATE_REMAINING,
		payload: count,
	};
};
