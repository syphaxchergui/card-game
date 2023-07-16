import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newDeck } from './actions/deck.action';
import Floor from './containers/Floor';
import Main from './containers/Main';
import Player from './containers/Player';
import Score from './containers/Score';
import { PlayerType } from './utils/playerType';

import './App.css';

function App() {
	const { deck, loading, error } = useSelector((state) => state.deck);
	const dispatch = useDispatch();

	if (error) return <h1>Error {error}</h1>;

	const createDeck = () => {
		dispatch(newDeck());
	};

	if (!deck)
		return (
			<Main loading={loading}>
				<div className="flex align-center justify-center mt-40">
					<button
						className="bg-blue-500 hover:bg-blue-700   font-bold py-2 px-4 rounded"
						onClick={createDeck}
					>
						Start a new game
					</button>
				</div>
			</Main>
		);

	return (
		<Main>
			<Score />
			<div className="flex flex-row items-center justify-between mx-2 flex-wrap">
				<Player type={PlayerType.human} />
				<Floor deck={deck} />
				<Player type={PlayerType.bot} />
			</div>
		</Main>
	);
}

export default App;
