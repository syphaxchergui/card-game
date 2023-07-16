import {
	NEW_DECK_FAILURE,
	NEW_DECK_REQUEST,
	NEW_DECK_SUCCESS,
	UPDATE_REMAINING,
} from '../utils/redux-types/deckTypes';

const initialState = {
	loading: false,
	deck: null,
	error: '',
};

const deckReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_DECK_REQUEST:
			return { ...state, loading: true };
		case NEW_DECK_FAILURE:
			return { loading: false, error: action.payload, deck: null };
		case NEW_DECK_SUCCESS:
			return { loading: false, error: '', deck: action.payload };
		case UPDATE_REMAINING:
			return {
				...state,
				deck: {
					...state.deck,
					remaining: action.payload,
				},
			};
		default:
			return state;
	}
};

export default deckReducer;
