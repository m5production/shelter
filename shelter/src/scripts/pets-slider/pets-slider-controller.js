import petsListData from "../../assets/data/pets.json" assert {type: 'json'};
import { PetsListData } from "../shared/pets-list.js";
import { PetsSlider } from "./pets-slider.js";
import { PopUpController } from "../shared/popup/popup-controller.js";

const petsList = new PetsListData(petsListData);

new PetsSlider(
  {
    cardsListLength: petsList.petsData.length,
    getCardData,
    handleCardClick
  }
)

function getCardData(index) {
  let item = petsList.findItemByIndex(index);
  return {
    name: item.name,
    img: item.img,
    id: item.id
  };
}

function handleCardClick(id) {
  const petData = petsList.findItemById(id);
  new PopUpController(petData);
}