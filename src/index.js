import { Verma } from './Strings/strings'; 
import { initUI } from './vendor_modules/PrestoDOM';
async function component() {
  initUI(); 

  const element = document.createElement('div');
  element.innerHTML = `<h1> Hello ${Verma()} </h1>`;
  const { flow } = await import('./Flow/flow');
  await flow();
  return element;
}

component().then(m => document.body.appendChild(m));
