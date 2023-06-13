export default class UnclickableButton {
  clickableElement;
  topPercentPosition = 10;
  leftPercentPosition = 50;
  firstChangeToAbsolute = false;

  constructor(element) {
    this.clickableElement = element;
    this.addEvent();
  }

  addEvent() {
    this.clickableElement.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.avoidClick();
  }

  avoidClick() {
    const maxRandomNumber = 60;
    const minRandomNumber = 20;
    this.topPercentPosition = Math.floor(Math.random() * maxRandomNumber + minRandomNumber);
    this.leftPercentPosition = Math.floor(Math.random() * maxRandomNumber + minRandomNumber);
    this.clickableElement.setAttribute('style', `position:absolute;top:${this.topPercentPosition}%;left:${this.leftPercentPosition}%`);
  }
}
