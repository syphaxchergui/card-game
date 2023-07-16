import { PlayerType } from '../utils/playerType';
import {
	DRAW_CARDS_FAILURE,
	DRAW_CARDS_REQUEST,
	DRAW_CARDS_SUCCESS,
	RESET_GAME,
	REVEAL_RESULT,
} from '../utils/redux-types/playerTypes';

const initialState = {
	loading: false,
	currentWinner: null,
	players: [
		{
			type: PlayerType.bot,
			wins: 0,
			loses: 0,
			reveal: false,
			currentCard: null,
		},
		{
			type: PlayerType.human,
			wins: 0,
			loses: 0,
			reveal: false,
			currentCard: null,
		},
	],
	error: '',
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case DRAW_CARDS_REQUEST:
			return { ...state, loading: true };
		case DRAW_CARDS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				players: [
					{
						...state.players[0],
						currentCard: null,
					},
					{
						...state.players[1],
						currentCard: null,
					},
				],
			};
		case DRAW_CARDS_SUCCESS:
			return {
				...state,
				loading: false,
				currentWinner: null,
				players: [
					{
						...state.players[0],
						reveal: false,
						currentCard: action.payload.cards[0],
					},
					{
						...state.players[1],
						reveal: false,
						currentCard: action.payload.cards[1],
					},
				],
			};

		case REVEAL_RESULT:
			var botResult = state.players[0].currentCard.value;
			var humanResult = state.players[1].currentCard.value;

			if (botResult > humanResult)
				return {
					...state,
					currentWinner: PlayerType.bot,
					players: [
						{
							...state.players[0],
							reveal: true,
							wins: state.players[0].wins + 1,
						},
						{
							...state.players[1],
							reveal: true,
							loses: state.players[1].loses + 1,
						},
					],
				};
			else if (botResult < humanResult)
				return {
					...state,
					currentWinner: PlayerType.human,
					players: [
						{
							...state.players[0],
							reveal: true,
							loses: state.players[0].loses + 1,
						},
						{
							...state.players[1],
							reveal: true,
							wins: state.players[1].wins + 1,
						},
					],
				};
			else
				return {
					...state,
					currentWinner: 'Tie',
					players: [
						{
							...state.players[0],
							reveal: true,
						},
						{
							...state.players[1],
							reveal: true,
						},
					],
				};
		case RESET_GAME:
			return initialState;
		default:
			return state;
	}
};

export default playerReducer;
