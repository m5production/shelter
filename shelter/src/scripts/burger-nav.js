export class BurgerNav{
  constructor(){
    this.nav = document.querySelector('.main-nav');
    this.isNavShown = false;

    this.show.bind(this);
    this.hide.bind(this);
  }
  
  show(){
    this.isNavShown = !this.isNavShown;
    this.nav.classList.add('main-nav--active');
  }

  hide(){
    this.isNavShown = !this.isNavShown;
    this.nav.classList.remove('main-nav--active');
  }
}