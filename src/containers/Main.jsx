import React from 'react';

import PropTypes from 'prop-types';

const Main = ({ children, loading }) => {
	return (
		<div className="w-screen h-screen bg-gray-900 overflow-x-hidden p-8 text-white">
			<div className="container mx-auto">
				<h1 className="text-5xl font-semibold text-center">♧ Card Game ♤</h1>

				<div className="h-5/6">
					{loading ? (
						<h1 className="mt-24 text-center ">Loading...</h1>
					) : (
						children
					)}
				</div>
			</div>
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};

export default Main;
