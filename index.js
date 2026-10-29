// Google DSCC könyvtár dinamikus betöltése
(function() {
  var script = document.createElement('script');
  script.src = 'https://www.gstatic.com/datastudio/apps/viz_library/dscc.min.1.js';
  script.onload = function() {
    function drawViz(data) {
      document.body.innerHTML = '<div class="poppins-box">Poppins betűtípusú teszt szöveg!</div>';
    }
    dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
  };
  document.head.appendChild(script);
})();
