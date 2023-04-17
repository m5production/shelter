export class BurgerMenuBtn{
  constructor(handleClick){
    this.btn = document.querySelector('.burger-menu-btn');
    this.isActive = false;
    this.btn.onclick = (e) => console.log(e);

    this.activate.bind(this);
    this.deactivate.bind(this);
  }

  activate(){
    this.isActive = !this.isActive;
    this.btn.classList.add('burger-menu-btn--active');
  }

  deactivate(){
    this.isActive = !this.isActive;
    this.btn.classList.remove('burger-menu-btn--active');
  }
}