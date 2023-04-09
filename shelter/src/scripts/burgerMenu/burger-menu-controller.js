import { BurgerMenuBtn } from "./burger-btn.js";
import { BodyBlackout } from "../shared/body-blackout.js";
import { BurgerNav } from "./burger-nav.js";

const burgerBtn = new BurgerMenuBtn(handleClick);
const blackout = new BodyBlackout(handleClick);
const mainNav = new BurgerNav(handleClick);
const mainNavLis = Array.from(mainNav.nav.querySelectorAll('.nav-list__item'));

function handleClick(e) {

  if (blackout.isShown
    && (e.target === burgerBtn.btn
      || e.target === blackout.blackout
      || mainNavLis.includes(e.target.closest('.nav-list__item'))
    )
  ) {
    hideBurgerMenu();
  }
}

function hideBurgerMenu() {
  blackout.hide();
  mainNav.hide();
  burgerBtn.deactivate();
  burgerBtn.btn.onclick = showBurgerMenu;
}

function showBurgerMenu() {
  blackout.show();
  mainNav.show();
  burgerBtn.activate();
  burgerBtn.btn.onclick = (event) => handleClick(event);
}

burgerBtn.btn.onclick = showBurgerMenu;