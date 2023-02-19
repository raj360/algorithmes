// skills = [12, 4, 6, 13, 5, 10]

// minPlayers =3
// minLevel =4
// maxLevel = 10

// range = [4-10]

// sort skills array

// find all numbers in range [4-10] in the sorted array

// minPlayers = 3

// create a combination of atleast 3 numbers in the range array

// find the sum of the combinations

// !! done

function getCombinations(range, minPlayer) {
  const combinations = [];

  function getCombinationHelper(start, combination) {
    if (combination.length >= minPlayer) {
      combinations.push(combination);
    }

    for (let i = start; i < range.length; i++) {
      getCombinationHelper(i + 1, [...combination, range[i]]);
    }
  }

  getCombinationHelper(0, []);

  return combinations;
}

function countTeams(skills, minPlayer, minLevel, maxLevel) {
  const sortedSkills = skills.sort((a, b) => a - b);

  const range = sortedSkills.filter((skill) => skill >= minLevel && skill <= maxLevel);

  const combinations = getCombinations(range, minPlayer);

  return combinations.length;
}

const skills = [12, 4, 6, 13, 5, 10];
const minPlayers = 3;
const minLevel = 4;
const maxLevel = 10;

const result = countTeams(skills, minPlayers, minLevel, maxLevel);

result;
