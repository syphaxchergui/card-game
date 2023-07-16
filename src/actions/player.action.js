import { drawMultipleCards } from '../services/deck.service';
import {
	DRAW_CARDS_FAILURE,
	DRAW_CARDS_REQUEST,
	DRAW_CARDS_SUCCESS,
	RESET_GAME,
	REVEAL_RESULT,
} from '../utils/redux-types/playerTypes';
import { updateRemainig } from './deck.action';

function drawCardsRequest() {
	return {
		type: DRAW_CARDS_REQUEST,
	};
}
function drawCardsFailure(error) {
	return {
		type: DRAW_CARDS_FAILURE,
		payload: error,
	};
}
function drawCardsSuccess(deck) {
	return {
		type: DRAW_CARDS_SUCCESS,
		payload: deck,
	};
}

export const dealCards = (deckId) => async (dispatch) => {
	dispatch(drawCardsRequest());
	try {
		const cards = await drawMultipleCards(deckId, 2);
		dispatch(drawCardsSuccess(cards.data));
		dispatch(updateRemainig(cards.data.remaining));
	} catch (err) {
		console.log(err);
		dispatch(drawCardsFailure(err));
	}
};

export const revealResult = () => {
	return {
		type: REVEAL_RESULT,
	};
};

export const resetGame = () => {
	return {
		type: RESET_GAME,
	};
};
