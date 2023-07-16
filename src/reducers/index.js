import { combineReducers } from 'redux';

import deckReducer from './deck.reducer';
import playerReducer from './player.reducer';

const reducers = combineReducers({
	deck: deckReducer,
	player: playerReducer,
});

export default reducers;
