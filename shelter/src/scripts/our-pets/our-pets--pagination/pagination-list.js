import petsData from "../../../assets/data/pets.json" assert {type: 'json'};

export const petsPaginationData = createPetsPaginationList(petsData);

function createPetsPaginationList(petsData) {
  const initCardsSet = shuffleArr(petsData);
  const block1 = initCardsSet.slice(0, 3);
  const block2 = initCardsSet.slice(3, 6);
  const block3 = initCardsSet.slice(6);

  let res = [];
  for(let i = 0; i < 6; i++){
    res.push(...shuffleArr(block1), ...shuffleArr(block2), ...shuffleArr(block3));
  }

  return res;
}

function shuffleArr(arr) {
  const res = [...arr];

  for (let i = res.length - 1; i > 0; i--) {
    const randElemIndex = Math.floor(Math.random() * (i + 1));
    const temp = res[randElemIndex];
    res[randElemIndex] = res[i];
    res[i] = temp;
  }

  return res;
}