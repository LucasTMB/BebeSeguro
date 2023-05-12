function calcularDataParto() {
    // Obter a data da última menstruação e a duração média do ciclo menstrual
    var dataUltimaMenstruacao = new Date(document.getElementById('data-ultima-menstruacao').value);
    var cicloMenstrual = parseInt(document.getElementById('ciclo-menstrual').value);


    // Calcular a data provável do parto
    var dataParto = new Date(dataUltimaMenstruacao.getTime());
    dataParto.setFullYear(dataParto.getFullYear() + 1);
    dataParto.setDate(dataParto.getDate() + 7);
    dataParto.setMonth(dataParto.getMonth() - 3);
    dataParto.setDate(dataParto.getDate() + (cicloMenstrual - 28));

    // Exibir o resultado na página
    var resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = 'Sua data provável do parto é: ' + dataParto.toLocaleDateString();
}
