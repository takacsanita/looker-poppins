const dscc = require('@google/dscc');

function drawViz(data) {
  // Meglévő tartalom törlése
  document.body.innerHTML = '';

  // Egy konténer elem létrehozása
  const container = document.createElement('div');
  container.className = 'my-custom-chart';
  container.innerText = 'Poppins betűtípusú teszt vizualizáció!';

  document.body.appendChild(container);
}

// Feliratkozás az adatok változására és kirajzolás
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });