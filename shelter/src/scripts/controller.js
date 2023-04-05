import { BurgerMenuBtn } from "./burber-btn.js";
import { BodyBlackout } from "./body-blackout.js";
import { BurgerNav } from "./burger-nav.js";

const burgerBtn = new BurgerMenuBtn();
const blackout = new BodyBlackout();
const mainNav = new BurgerNav();


burgerBtn.btn.addEventListener('click', () => {
  console.log(burgerBtn.isActive)

  if (!burgerBtn.isActive) {
    burgerBtn.activate();
    blackout.show();
    mainNav.show();
  }else{
    burgerBtn.deactivate();
    blackout.hide();
    mainNav.hide();
  }
})