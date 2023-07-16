import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Card from '../components/Card';
import { PlayerType } from '../utils/playerType';

const Player = ({ type }) => {
	const { players, error, loading } = useSelector((state) => state.player);

	if (error) return <h1>Error {JSON.stringify(error)}</h1>;

	const playerData = players[type === PlayerType.bot ? 0 : 1];
	return (
		<div>
			<h1 className="pb-2   font-semibold uppercase">{type}</h1>
			<Card
				image={playerData?.currentCard?.image}
				loading={loading}
				reveal={playerData?.reveal}
				left={playerData.type === PlayerType.bot}
			/>
		</div>
	);
};

Player.propTypes = {
	type: PropTypes.string,
};

export default Player;
