const objectiveScoreNumber = 200;

const recordRankings = [1,3,4,9,2,3,1,5,1,1,2,7,3,11,1,1,2,7,3,1,6,11,5,2];
const recordCumulativePoints = [15,25,34,38,50,60,75,83,98,113,125,131,141,143,158,173,185,191,201,216,223,225,233,245];

const worstCumulativePoints = [6,16,20,25,28,34,44,56,62,69,76,88,93,97,104,113,120,125,132,139,148,153,159];
const worstRankings = [7,3,9,8,10,7,3,2,7,6,6,2,8,9,6,4,6,8,6,6,4,8,7,7];
const rankingPoints = [15,12,10,9,8,7,6,5,4,3,2,1];


function calcPoints(ranking) {
	return rankingPoints[--ranking];
}
