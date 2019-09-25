// How many stairs will Suzuki climb in 20 years? - https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript

const stairsIn20 = s => {
	return s.reduce((previous, current) => {
		return (
			previous +
			current.reduce((previous, current) => {
				return previous + current;
			})
		);
	}, 0);
};
