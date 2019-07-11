import { getColors } from './services/colorsApi.js';

const root = document.getElementById('root');
const ul = document.createElement('ul');

getColors()
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');

      li.textContent = `${color.name} - ${color.hex}`;
      li.style.color = '#' + color.hex;

      const a = document.createElement('a');
      a.appendChild(li);
      ul.appendChild(a);
    });
  });

root.appendChild(ul);
