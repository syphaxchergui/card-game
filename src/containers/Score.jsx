import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {
	const { players } = useSelector((state) => state.player);
	const { deck } = useSelector((state) => state.deck);

	return (
		<div className="flex flex-row items-center justify-between px-6 py-3 mt-6 mb-14 bg-slate-800 rounded-md w-full  ">
			<h1 className=" font-semibold text-4xl">Score</h1>

			<div className="text-center">
				<p className="uppercase">Remaining</p>
				<p className="text-4xl">{deck?.remaining}</p>
			</div>

			<div className="flex flex-row gap-2  text-center">
				{players.map((player, index) => {
					return (
						<>
							<div key={index}>
								<p className="uppercase">{player?.type}</p>
								<p className="text-4xl">{player?.wins}</p>
							</div>
							{index + 1 !== players.length && (
								<div className="border-l border-white mx-2" />
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Score;
