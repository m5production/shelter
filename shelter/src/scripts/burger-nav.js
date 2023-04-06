export class BurgerNav{
  constructor(handleClick){
    this.nav = document.querySelector('.main-nav');
    this.isNavShown = false;
    this.nav.onclick = handleClick;

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