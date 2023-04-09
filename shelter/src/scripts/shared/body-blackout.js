export class BodyBlackout {
  constructor(handleClick) {
    this.isShown = false;
    
    this.blackout = document.createElement('div');
    this.blackout.className = 'body-blackout';
    this.blackout.addEventListener('click', handleClick);
    
    this.bStyle = document.body.style;
    
    this.scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    this.absoluteElements = document.querySelectorAll('.absolute-container');


    this.show.bind(this);
    this.hide.bind(this);
  }

  show() {
    this.isShown = !this.isShown;
    document.body.append(this.blackout);
    this.bStyle.paddingInlineEnd = `${this.scrollWidth}px`;
    this.absoluteElements.forEach(elem => {
      elem.style.paddingInlineEnd = `${this.scrollWidth}px`;
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