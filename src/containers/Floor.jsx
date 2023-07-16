import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';

import { newDeck } from '../actions/deck.action';
import { dealCards, resetGame, revealResult } from '../actions/player.action';
import Deck from '../components/Deck';

const Floor = ({ deck }) => {
	const dispatch = useDispatch();

	const { players, currentWinner } = useSelector((state) => state.player);

	const onDeal = () => {
		dispatch(dealCards(deck.deck_id));
	};

	const onReveal = () => {
		dispatch(revealResult());
	};

	const onNewGame = () => {
		dispatch(newDeck());
		dispatch(resetGame());
	};

	const reveal = useSpring({
		scale: currentWinner ? 1 : 0,
		opacity: currentWinner ? 1 : 0,
	});

	if (currentWinner && deck.remaining === 0)
		return (
			<div className="flex flex-col justify-center items-center">
				<div className="px-4 py-4 my-6 border border-white rounded-lg w-72  ">
					<h1 className="text-xl">Game statistics</h1>
					{players.map((player, index) => {
						return (
							<div key={index} className="py-2">
								<h2 className="text-lg">Player: {player.type}</h2>
								<p>Wins: {player.wins}</p>
								<p>Loses: {player.loses}</p>
							</div>
						);
					})}

					<p className="text-green-500 font-semibold mt-2">Game Winner</p>
					<h2 className="text-lg capitalize">
						{players[0].wins > players[1].wins
							? players[0].type + '🏆'
							: players[0].wins < players[1].wins
							? players[1].type + '🏆'
							: 'Tie'}{' '}
					</h2>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700   font-bold py-2 px-4 rounded w-full"
					onClick={onNewGame}
				>
					{'Start a new game'}
				</button>
			</div>
		);

	return (
		<div className="flex flex-col justify-center items-center relative">
			<Deck remaining={deck.remaining} />

			{currentWinner || !players[0].currentCard || !players[1].currentCard ? (
				<button
					className="bg-blue-500 hover:bg-blue-700   font-bold py-2 px-4 rounded w-full"
					onClick={onDeal}
				>
					{currentWinner ? 'Deal Again' : 'Deal'}
				</button>
			) : (
				<button
					className="bg-green-500 hover:bg-green-700   font-bold py-2 px-4 rounded w-full"
					onClick={onReveal}
				>
					Reveal
				</button>
			)}

			{currentWinner && (
				<animated.div
					style={reveal}
					className="absolute top-16 text-2xl text-center bg-green-800 bg-opacity-95 rounded-md  px-8 py-4 z-50 w-full"
				>
					<p>🏆Winner: {currentWinner}</p>
				</animated.div>
			)}
		</div>
	);
};

Floor.propTypes = {
	deck: PropTypes.object,
};

export default Floor;
