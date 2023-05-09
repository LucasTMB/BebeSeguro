function calcularIdadeGestacional() {
    const dum = new Date(document.getElementById("dum").value);
    const today = new Date(document.getElementById("today").value);
    const diffTime = Math.abs(today - dum);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `A idade gestacional é de ${diffWeeks} semanas.`;
  }