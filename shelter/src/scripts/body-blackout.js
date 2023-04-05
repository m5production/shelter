export class BodyBlackout {
  constructor() {
    this.blackout = document.createElement('div');
    this.blackout.className = 'body-blackout';
    this.isShown = false;
    this.bStyle = document.body.style;

    this.absoluteElements = document.querySelectorAll('.absolute-container');


    this.show.bind(this);
    this.hide.bind(this);
  }

  show() {
    this.isShown = !this.isShown;
    document.body.append(this.blackout);
    this.bStyle.paddingInlineEnd = '17px';
    this.absoluteElements.forEach(elem => {
      elem.style.paddingInlineEnd = '17px';
    });
    this.bStyle.overflow = 'hidden';
    this.blackout.addEventListener('animationend', () => {
      this.blackout.style.opacity = '1';
    })
  }

  hide() {
    this.isShown = !this.isShown;
    this.blackout.remove();
    this.bStyle.paddingInlineEnd = '';
    this.absoluteElements.forEach(elem => {
      elem.style.paddingInlineEnd = '';
    });
    this.bStyle.overflow = '';
  }
}