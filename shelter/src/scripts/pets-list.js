/*
petData: {
  name: string;
  src: string;
  handleClick: ()=>void;
}
*/

export function showPetsCards(petsDataArr) {
  const listNode = document.querySelector('.slider-track');
  petsDataArr.forEach(petData => {
    listNode.append(makePetCard(petData));
  });
}

function makePetCard(petData) {
  const listItem = document.getElementById('pet-card-template').content.children[0].cloneNode(true);
  listItem.querySelector('.card-name').textContent = petData.name;
  listItem.querySelector('.card-img').src = petData.src;
  listItem.addEventListener('click', petData.handleClick);
  return listItem;
}


// "name": "Jennifer",
// "img": "../img/slider-friends/pets-jennifer.png",
// "type": "Dog",
// "breed": "Labrador",
// "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
// "age": "2 months",
// "inoculations": ["none"],
// "diseases": ["none"],
// "parasites": ["none"]