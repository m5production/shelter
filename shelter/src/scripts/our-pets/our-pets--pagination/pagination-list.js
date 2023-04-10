import petsData from "../../../assets/data/pets.json" assert {type: 'json'};

export const petsPaginationData = createPetsPaginationList(petsData);

function createPetsPaginationList(petsData) {
  let res = [];
  
  for (let i = 0; i < 6; i++) {
    const shuffledArr = shuffleArr(petsData);
    res = [...res, ...shuffledArr];
  }

  return res;
}

function shuffleArr(arr) {
  const res = [...arr];

  for (let i = res.length - 1; i > 0; i--) {
    const randElemIndex = Math.floor(Math.random() * i);
    const temp = res[randElemIndex];
    res[randElemIndex] = res[i];
    res[i] = temp;
  }

  return res;
}