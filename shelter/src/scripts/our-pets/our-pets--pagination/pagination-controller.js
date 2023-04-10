import { Pagination } from "./pagination-render.js";
import { petsPaginationData } from "./pagination-list.js";
import { PetsListData } from '../../shared/pets-list.js';
import { PopUpController } from '../../shared/popup/popup-controller.js';

const paginationDataList = new PetsListData(petsPaginationData);

new Pagination({
  listLength: paginationDataList.petsData.length,
  getCardData,
  handleCardClick
});

function getCardData(index) {
  const item = paginationDataList.findItemByIndex(index);
  return {
    name: item.name,
    img: item.img,
    id: item.id
  }
}

function handleCardClick(id) {
  const petData = paginationDataList.findItemById(id);
  new PopUpController(petData);
}