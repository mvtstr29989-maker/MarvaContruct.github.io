// Control de pantalla de carga inicial
document.addEventListener('DOMContentLoaded', function() {
  const loaderScreen = document.getElementById('loaderScreen');
  const dotsElement = document.getElementById('dots');
  
  // Animar puntos suspensivos
  if (dotsElement) {
    let dotCount = 0;
    setInterval(function() {
      dotCount = (dotCount + 1) % 4;
      dotsElement.textContent = '.'.repeat(dotCount);
    }, 500);
  }
  
  // Ocultar loader cuando la página carga completamente
  window.addEventListener('load', function() {
    if (loaderScreen) {
      setTimeout(function() {
        loaderScreen.classList.add('hidden');
        setTimeout(function() {
          loaderScreen.style.display = 'none';
        }, 800);
      }, 1500); // Mostrar loader por al menos 1.5 segundos
    }
  });
  
  // Si la página ya está cargada (cache)
  if (document.readyState === 'complete') {
    if (loaderScreen) {
      setTimeout(function() {
        loaderScreen.classList.add('hidden');
        setTimeout(function() {
          loaderScreen.style.display = 'none';
        }, 800);
      }, 1500);
    }
  }
});