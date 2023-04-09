import { BodyBlackout } from "../shared/body-blackout.js";
import { PopUp } from "../shared/pop-up.js";

export class PopUpController extends PopUp {
  constructor(petData) {
    super(petData);
    this.blackout = new BodyBlackout();
    
    this.showPopup();
  }

  showPopup() {
    this.blackout.show();
    super.showPopup();
    document.body.addEventListener('click', this.handleBodyClick.bind(this));
  }

  handleBodyClick(e) {
    if (e.target === this.blackout.blackout
      || e.target === this.closeBtn)
      this.closePopup();
  }

  closePopup() {
    super.closePopup();
    this.blackout.hide();
    document.body.removeEventListener('click', this.handleBodyClick);
  }
}