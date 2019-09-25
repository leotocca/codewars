// Pokemon Damage Calculator - https://www.codewars.com/kata/pokemon-damage-calculator/train/javascript

function calculateDamage(yourType, opponentType, attack, defense) {
	let effectiveness = 1;

	let cases = {
		water: 'fire',
		fire: 'grass',
		grass: 'water',
		electric: 'water'
	};

	const bothOfTheSameType = yourType === opponentType;
	const opponentIsStronger = yourType === cases[opponentType];
	const iAmStronger = cases[yourType] === opponentType;

	if (bothOfTheSameType || opponentIsStronger) {
		effectiveness = 0.5;
	} else if (iAmStronger) {
		effectiveness = 2;
	}

	return Math.ceil(50 * (attack / defense) * effectiveness);
}
