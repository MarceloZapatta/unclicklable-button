import './style.css'
import UnclickableButton from  './unclickable-button.js';

const button = document.querySelector('button');
const unclickableButton = new UnclickableButton(button);