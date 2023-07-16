import React from 'react';

import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';

const Card = ({ image, loading, reveal, left }) => {
	const props = useSpring(
		left
			? {
					right: loading ? 700 : 28,
					opacity: loading ? 0 : 1,
					scale: loading ? 0.8 : 1,
			  }
			: {
					left: loading ? 700 : 28,
					opacity: loading ? 0 : 1,
					scale: loading ? 0.8 : 1,
			  }
	);

	const revealdProps = useSpring(
		left
			? {
					transform: reveal ? 'rotateY(-360deg)' : 'rotateY(-180deg)',
					opacity: reveal ? 1 : 0,
			  }
			: {
					transform: reveal ? 'rotateY(360deg)' : 'rotateY(180deg)',
					opacity: reveal ? 1 : 0,
			  }
	);

	return (
		<div className="h-96 w-72  rounded-md bg-slate-800 flex items-center justify-center p-4 relative">
			{loading ? (
				<p className="  font-semibold text-lg">Loading...</p>
			) : image ? (
				reveal ? (
					<animated.img
						src={image}
						className={`w-auto absolute`}
						style={revealdProps}
					/>
				) : (
					<animated.img
						src={'https://deckofcardsapi.com/static/img/back.png'}
						className={`w-auto absolute`}
						style={props}
					/>
				)
			) : (
				<p className="  font-semibold text-lg">Deal to start the game</p>
			)}
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	loading: PropTypes.bool,
	reveal: PropTypes.bool,
	left: PropTypes.bool,
};

export default Card;
