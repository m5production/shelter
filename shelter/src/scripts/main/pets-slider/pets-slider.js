export class PetsSlider {
  constructor({ cardsListLength, getCardData, handleCardClick }) {
    this.cardsListLength = cardsListLength;
    this.getCardData = getCardData;
    this.handleCardClick = handleCardClick;

    this.sliderTrack = document.querySelector('.slider-track');
    this.centerPane = document.getElementById('pets-slider__center-pane');
    this.leftPane = document.getElementById('pets-slider__left-pane');
    this.rightPane = document.getElementById('pets-slider__right-pane');
    this.currentShownCards = [];
    this.previousShownCards = [];
    this.slideDirection = {
      prevDir: '',
      changed: false
    };

    this.handleBtnClick.bind(this);

    this.setNewCardNumbers();
    this.populatePane(this.centerPane);
    this.activateSliderBtns();
  }

  setNewCardNumbers() {
    // const windowWidth = document.body.clientWidth

    const numberOfCardsOnPane = 3;
    // windowWidth >= 1034 ? 3 
    //   : windowWidth >= 570 ? 2
    //     : 1;
    /*
    не успел придумать динамическую генерацию при изменении размеров экрана без перезагрузки страницы
    */

    const nextCaradsSet = this.slideDirection.changed
      ? this.previousShownCards
      : this.generateNextCardNumbers(numberOfCardsOnPane);

    this.previousShownCards = this.currentShownCards;
    this.currentShownCards = nextCaradsSet;
  }

  generateNextCardNumbers(numberOfCardsOnPane) {
    const numbers = [];

    for (let i = 0; i < numberOfCardsOnPane; i++) {
      let nextNum = -1;

      let ctr = 0;

      do {
        nextNum = Math.floor(Math.random() * this.cardsListLength);
      } while (numbers.includes(nextNum) || this.currentShownCards.includes(nextNum));

      numbers.push(nextNum);
    }

    return numbers;
  }

  activateSliderBtns() {
    const slidePrevBtns = Array.from(document.querySelectorAll('.slide-prev-btn'));
    slidePrevBtns.forEach(btn => {
      btn.value = 'left'; //соответствует названию класса с аниацией в css
      btn.onclick = (e) => this.handleBtnClick(e);
    });

    const slideNextBtns = Array.from(document.querySelectorAll('.slide-next-btn'));
    slideNextBtns.forEach(btn => {
      btn.value = 'right'; //соответствует названию класса с аниацией в css
      btn.onclick = (e) => this.handleBtnClick(e);
    });
  }

  handleBtnClick(e) {
    const direction = e.target.value;

    if (this.slideDirection.prevDir === '') {
      this.slideDirection.prevDir = direction;
    }

    this.slideDirection.changed = this.slideDirection.prevDir !== direction;
    this.slideDirection.prevDir = direction;

    this.setNewCardNumbers();

    const pane = document.getElementById(`pets-slider__${direction}-pane`);
    this.populatePane(pane);
    this.animateSlide(direction);
  }

  animateSlide(direction) {
    this.sliderTrack.classList.add(`from-${direction}`);
    this.sliderTrack.onanimationend = () => {
      this.updateTrackState(direction)
      this.sliderTrack.classList.remove(`from-${direction}`)
    }
  }

  updateTrackState(direction) {
    const cardsSource = direction === 'left'
      ? this.leftPane
      : this.rightPane;

    this.centerPane.innerHTML = '';

    while (cardsSource.children.length > 0) {
      this.centerPane.append(cardsSource.children[0]);
    }
  }

  populatePane(pane) {
    const cardIndexes = this.currentShownCards;

    for (let i = 0; i < cardIndexes.length; i++) {
      const cardData = this.getCardData(cardIndexes[i]);
      pane.append(this.makePetCard(cardData));
    };
  }

  makePetCard(petData) {
    const listItem = document.getElementById('pet-card-template').content.children[0].cloneNode(true);
    listItem.querySelector('.card-name').textContent = petData.name;
    listItem.querySelector('.card-img').src = petData.img;
    listItem.onclick = () => {
      this.handleCardClick(petData.id)
    };
    return listItem;
  }
}