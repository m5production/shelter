export class Pagination {
  constructor({ listLength, getCardData, handleCardClick }) {
    this.getCardData = getCardData;
    this.handleCardClick = handleCardClick;
    this.totalCardsNumber = listLength;
    this.firstRenderedCardIndex = 0;

    this.cardContainer = document.querySelector('.pagination-track');
    this.paginationBtnsContainer = document.getElementById('pagination-btns-container');
    this.paginationBtnsContainer.onclick = (e) => this.handlePaginationBtnClick(e);

    this.renderCards();
  }

  initializeBtns() {
    const btns = Array.from(this.paginationBtnsContainer.children);

    btns.forEach(btn => {
      btn.classList.remove('inactive');
    });

    if (this.firstRenderedCardIndex === 0) {
      btns[0].classList.add('inactive');
      btns[1].classList.add('inactive');
    } else if (this.firstRenderedCardIndex >= this.totalCardsNumber - this.getCardsOnPageNumber()) {
      btns[3].classList.add('inactive');
      btns[4].classList.add('inactive');
    }

    btns[2].innerText = Math.floor(this.firstRenderedCardIndex / this.getCardsOnPageNumber()) + 1;
  }

  handlePaginationBtnClick(e) {
    const btn = e.target.closest('.btn-paginator');
    if (btn.classList.contains('inactive')) return;

    const value = btn.id.split('-')[0];

    switch (value) {
      case 'first':
        this.firstRenderedCardIndex = 0;
        break;
      case 'prev':
        this.firstRenderedCardIndex = this.firstRenderedCardIndex - this.getCardsOnPageNumber();
        break;
      case 'next':
        this.firstRenderedCardIndex = this.firstRenderedCardIndex + this.getCardsOnPageNumber();
        break;
      case 'last':
        this.firstRenderedCardIndex = this.totalCardsNumber - this.getCardsOnPageNumber();
        break;
      default:
        return;
    }

    this.renderCards();
  }

  renderCards() {
    const lastCardIndex = this.firstRenderedCardIndex + this.getCardsOnPageNumber();
    this.cardContainer.innerHTML = '';

    for (let i = this.firstRenderedCardIndex; i < lastCardIndex; i++) {
      if (i >= this.totalCardsNumber) break;
      const cardData = this.getCardData(i);
      this.cardContainer.append(this.makePetCard(cardData));
    }

    this.initializeBtns();
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

  getCardsOnPageNumber() {
    const windowWidth = window.innerWidth;
    return windowWidth < 600
      ? 3
      : windowWidth < 1200
        ? 6
        : 8
  }
}