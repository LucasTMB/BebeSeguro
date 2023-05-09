function calcular() {
    // Obter valores dos campos
    const hcgInicial = document.getElementById('hcg-inicial').value;
    const hcgAtual = document.getElementById('hcg-atual').value;
    const dataInicial = new Date(document.getElementById('data-inicial').value);
    const dataAtual = new Date(document.getElementById('data-atual').value);
  
    // Calcular diferença entre níveis de hCG
    const diferenca = hcgAtual - hcgInicial;
  
    // Calcular tempo de duplicação
    const dias = (dataAtual - dataInicial) / (24 * 60 * 60 * 1000);
    const tempoDuplicacao = Math.log(2) / (Math.log(hcgAtual / hcgInicial) / dias);
  
    // Calcular aumento de um dia
    const aumentoUmDia = hcgAtual + diferenca;
    const aumentoUmDiaPorcentagem = ((aumentoUmDia - hcgAtual) / hcgAtual) * 100;
  
    // Calcular aumento de dois dias
    const aumentoDoisDias = hcgAtual + (2 * diferenca);
    const aumentoDoisDiasPorcentagem = ((aumentoDoisDias - hcgAtual) / hcgAtual) * 100;
  
    // Exibir resultados
    const resultado = `A diferença entre os níveis de hCG inicial e atual é: ${diferenca}
    \nO tempo de duplicação estimado é: ${tempoDuplicacao.toFixed(2)} dias
    \nO aumento de um dia estimado é: ${aumentoUmDia} (${aumentoUmDiaPorcentagem.toFixed(2)}%)
    \nO aumento de dois dias estimado é: ${aumentoDoisDias} (${aumentoDoisDiasPorcentagem.toFixed(2)}%)`;
    document.getElementById('resultado').innerText = resultado;
  }