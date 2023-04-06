import petsListData from "../assets/data/pets.json" assert {type: 'json'};
import { showPetsCards } from "./pets-list.js";

const dataForCardsList = petsListData.map(petItemData => {
  return {
    name: petItemData.name,
    src: petItemData.img,
    handleClick: () => handleCardClick(petItemData)
  }
})

showPetsCards(dataForCardsList)