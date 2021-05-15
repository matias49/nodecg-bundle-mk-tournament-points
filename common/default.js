const rankingPoints = [15, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function generateCumulativeArray(rankingArray) {
	let finalArray = [];
	let previousScore = 0;
	rankingArray.forEach(ranking => {
		let score = previousScore + calcPoints(ranking)
		finalArray.push(score);
		previousScore = score;
	});
	return finalArray;
}

function calcPoints(ranking) {
	return rankingPoints[--ranking];
}
