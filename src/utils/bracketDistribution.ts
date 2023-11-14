import { Bracket, Match, MatchWithPositions, Player, Stage } from "../types/bracketTypes";

const isPowerOfTwo = (x: number) => {
	while (x > 1) {
		if (x % 2) return false;
		x /= 2;
	}
	return true;
};

export const sortPlayerPositioning = (len: number) => {
	let firstLayer = [1, 0];
	let id = 2;
	while (id <= len) {
		if (isPowerOfTwo(id - 1) && id > 2) {
			let tmp = [];
			for (let i = 0; i < firstLayer.length; i++) {
				tmp.push(firstLayer[i]);
				tmp.push(0);
			}
			firstLayer = [...tmp];
		}
		let idx = 0,
			mxValue = -1;
		for (let i = 0; i < firstLayer.length; i += 2) {
			if (firstLayer[i + 1] == 0 && firstLayer[i] > mxValue) {
				mxValue = firstLayer[i];
				idx = i + 1;
			}
		}
		firstLayer[idx] = id;
		id++;
	}
	return firstLayer;
};

function range(size : number, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function getMatchesInStage(playersAmount : number) {
	const stagesAmount = Math.ceil(Math.log(playersAmount) / Math.log(2));

	const matchesInStage = Array.from(
		{ length: stagesAmount },
		(_, i) => 2 ** (stagesAmount - 1) / 2 ** i
	);

	return matchesInStage
}

export function initializeBracket(players: Player[]) {
	const positions = sortPlayerPositioning(players.length);

	const matchesInStage = getMatchesInStage(players.length)

	const stagesAmount = matchesInStage.length

	let startAt = 0;
	const stages: Stage[] = Array.from({ length: stagesAmount }, (_, i) => {
		const size = (2 ** (stagesAmount-i-1));
		const stage = { matchIds: range(size, startAt)};
		startAt += size;
		return stage;
	})
	
	const matches: Match[] = [];
	for (let i = 0; i < stagesAmount; i++) {
		if (i === 0) {
			for (let j = 0; j < positions.length; j += 2) {
				matches.push({
					firstPlayer: players[positions[j] - 1],
					secondPlayer: players[positions[j + 1] - 1],
					isFinished: false,
					isStarted: false,
				});
			}
		} else {
			for (let j = 0; j < matchesInStage[i]; j++) {
				matches.push({
					firstPlayer: undefined,
					secondPlayer: undefined,
					isFinished: false,
					isStarted: false,
				});
			}
		}
	};

	const bracket: Bracket = { players: players, stages, matches };
	return bracket;
}

export function constructPositionedMatchesBasic(matchIds: number[], stageNumber: number) {
	const cellHeight = 2 ** stageNumber;
	const startingPosition = 1 + cellHeight / 2;

	const positionedMatches: MatchWithPositions[] = matchIds
	.map((matchId, i) => {
		const startPosition = startingPosition + 2 * cellHeight * i - 1;
		const middlePosition = startPosition + 1;
		const endPosition = middlePosition + cellHeight;
		
		return { matchId, startPosition, endPosition };
	})
	// Remove matches from the first stage that do not have the first match
	// .filter((positionedMatch) => (positionedMatch.match.firstPlayer && positionedMatch.match.secondPlayer) || stageNumber !== 1)

	return positionedMatches;
}
