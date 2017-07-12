import _ from 'lodash';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  element.innerHTML = 'testaasss';
  return element;
}
document.body.appendChild(component());