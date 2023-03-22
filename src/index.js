import { Verma } from './String/strings'; 

function component() {
  
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', Verma()], ' ');
  import('./flow').then(m => m.flow());

  return element;
}

document.body.appendChild(component());
