const maxRacesNumber = 40;
const objectiveScoreNumber = 200;

const recordRankings = [1, 3, 4, 9, 2, 3, 1, 5, 1, 1, 2, 7, 3, 11, 1, 1, 2, 7, 3, 1, 6, 11, 5, 2]; // Set your best ranking per race of the tournament
const recordCumulativePoints = generateCumulativeArray(recordRankings);

const worstRankings = [7, 3, 9, 8, 10, 7, 3, 2, 7, 6, 6, 2, 8, 9, 6, 4, 6, 8, 6, 6, 4, 8, 7, 7]; // Set your worst ranking per race of the tournament
const worstCumulativePoints = generateCumulativeArray(worstRankings);

const logoUrl = 'YOUR_LOGO';
const playerName = 'YOUR_NAME';
const tournamentName = 'TOURNAMENT_NAME';
