import _ from 'lodash';
import {cube} from './math.js';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(cube(5)); // 125
  console.log('cube');
  return element;
}
document.body.appendChild(component());