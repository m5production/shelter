export class PopUp{
  constructor(petData){
    this.isShown = false;
    this.node = null;
    this.closeBtn = null;
    
    this.showPopup.bind(this);
    this.closePopup.bind(this);
    
    this.makePopup(petData)
  }

  makePopup(petData){
    this.node = document.getElementById('popup-template').content.children[0].cloneNode(true);
    this.closeBtn = this.node.querySelector('.popup-close-btn');
    const img = this.node.querySelector('.popup-img-wrapper');
    const petName = this.node.querySelector('.pet-name');
    const type = this.node.querySelector('.type');
    const breed = this.node.querySelector('.breed');
    const description = this.node.querySelector('.pet-description');
    const age = this.node.querySelector('.pet-age');
    const inoculation = this.node.querySelector('.pet-inoculation');
    const diseases = this.node.querySelector('.pet-diseases');
    const parasites = this.node.querySelector('.pet-parasites');

    img.style.backgroundImage = petData.img;
    petName.textContent = petData.name;
    type.textContent = petData.type;
    breed.textContent = petData.breed;
    description.textContent = petData.description;
    age.textContent = petData.age;
    inoculation.textContent = petData.inoculations.length === 0 ? 'none': petData.inoculations.join(', ');
    diseases.textContent = petData.diseases.length === 0 ? 'none': petData.diseases.join(', ');
    parasites.textContent = petData.parasites.length === 0 ? 'none': petData.parasites.join(', ');
  }

  showPopup(){
    this.isShown = !this.isShown;
    document.body.append(this.node);
  }

  closePopup(){
    this.isShown = !this.isShown;
    this.node.remove();
  }
}