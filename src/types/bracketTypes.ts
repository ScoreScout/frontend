export interface BracketProps {
	bracket: Bracket;
}

export interface Bracket {
	players: Player[];
	stages: Stage[];
	matches: Match[];
}

export interface Player {
	name: string;
	rating?: number;
}

enum Promoted {
	first = "first",
	second = "second",
}

export interface FinishedMatchWithScore {
	firstPlayer: Player;
	secondPlayer: Player;
	isFinished: true;
	firstPlayerScore: number;
	secondPlayerScore: number;
	isStarted: true;
}

export interface FinishedMatchOnePlayer {
	firstPlayer?: Player;
	secondPlayer?: Player;
	isFinished: true;
	whoPromoted: Promoted;
	isStarted: true;
}

export interface PendingMatch {
	firstPlayer?: Player;
	secondPlayer?: Player;
    isStarted: boolean;
	isFinished: false;
}

export type FinishedMatch = FinishedMatchWithScore | FinishedMatchOnePlayer;
export type Match = FinishedMatch | PendingMatch;

export interface Stage {
	matchIds: number[];
}

export interface StageProps {
	matchIds: number[];
	stageNumber: number;
}

export interface BracketMatchProps {
	matchId: number;
	startPosition: number;
	endPosition: number;
    stageNumber: number;
}

export interface MatchWithPositions {
    matchId: number;
    startPosition: number;
    endPosition: number;
}