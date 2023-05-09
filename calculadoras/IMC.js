function calcularIMCGestante() {
  // Obter o peso, altura e semanas de gestação
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
  var semanas = parseInt(document.getElementById('semanas').value);

  // Calcular o IMC
  var alturaMetros = altura / 100;
  var imc = peso / (alturaMetros * alturaMetros);

  // Verificar o intervalo de IMC adequado para cada semana de gestação
  var imcMinimo;
  var imcMaximo;
  if (semanas < 13) {
    imcMinimo = 12.2;
    imcMaximo = 16.1;
  } else if (semanas < 27) {
    imcMinimo = 11.0;
    imcMaximo = 15.6;
  } else if (semanas < 40) {
    imcMinimo = 10.4;
    imcMaximo = 14.4;
  } else {
    imcMinimo = 10.0;
    imcMaximo = 13.3;
  }

  // Verificar se o IMC está dentro do intervalo adequado e exibir o resultado
  var resultadoElemento = document.getElementById('resultado');
  if (imc >= imcMinimo && imc <= imcMaximo) {
    resultadoElemento.innerHTML = 'Seu IMC é ' + imc.toFixed(1) + '. Parabéns, você está dentro do intervalo de IMC adequado para ' + semanas + ' semanas de gestação.';
  } else {
    resultadoElemento.innerHTML = 'Seu IMC é ' + imc.toFixed(1) + '. Infelizmente, você está fora do intervalo de IMC adequado para ' + semanas + ' semanas de gestação. Consulte um médico para avaliação.';
  }
  }