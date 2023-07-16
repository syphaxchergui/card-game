import React from 'react';

import PropTypes from 'prop-types';

const Deck = ({ remaining }) => {
	return (
		<div className="h-96 w-72  flex items-center justify-center relative">
			<img
				src={'https://deckofcardsapi.com/static/img/spade.png'}
				className={`w-auto px-10 mt-6 absolute top-10`}
				style={{ filter: 'invert(100%)' }}
			/>
			{Array.from({ length: remaining }, (_, i) => (
				<img
					key={i}
					src={'https://deckofcardsapi.com/static/img/back.png'}
					className={`w-auto absolute`}
					style={{
						top: 46 - i / 1.5,
					}}
				/>
			))}
		</div>
	);
};

Deck.propTypes = {
	remaining: PropTypes.number,
};

export default Deck;
