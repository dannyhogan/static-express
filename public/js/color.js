const header = document.getElementById('color');
const color = new URLSearchParams(window.location.search).get('color');


header.textContent += color;
header.style.color = color;
