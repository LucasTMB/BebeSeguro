export const deliveryDateCalculator = (lastMenstruationDate, menstrualCycle) => {

    // Obter a data da última mesntruação e a duração média do ciclo menstrual
    const lastDate = new Date(lastMenstruationDate);
    const cycleDuration = parseInt(menstrualCycle);

    // Calcular a data provável do parto
    let deliveryDate = new Date(lastDate.getTime());
    deliveryDate.setFullYear(deliveryDate.getFullYear() + 1);
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    deliveryDate.setMonth(deliveryDate.getMonth() - 3);
    deliveryDate.setDate(deliveryDate.getDate() + (cycleDuration - 28));

    // Formatando a data
    const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const deliveryWeekday = weekdays[deliveryDate.getDay()].charAt(0).toUpperCase() + weekdays[deliveryDate.getDay()].slice(1);
    const deliveryDay = deliveryDate.getDate().toString().padStart(2, '0');
    const deliveryMonth = (deliveryDate.getMonth() + 1).toString().padStart(2, '0');
    const deliveryYear = deliveryDate.getFullYear().toString();

    //Exibir o resultado na página
    const result = `Sua data de parto estimada é: ${deliveryWeekday}, ${deliveryDay}/${deliveryMonth}/${deliveryYear}!`;

    return result;

};


export const imcCalculator = (weight, height, weeks) => {

    // Obter o peso, altura e semanas de gestação
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const weeksValue = parseInt(weeks);

    // Calcular o IMC
    const heightInMeters = heightValue / 100;
    const imc = (weightValue / (heightInMeters ** 2)).toFixed(1);

    // Verificar o intervalo de IMC adequado para cada semana de gestação
    let minImc;
    let maxImc;

    if (weeksValue < 13) {
        minImc = 20;
        maxImc = 25.4;
    } else if (weeksValue >= 13 && weeksValue < 27) {
        minImc = 20.7;
        maxImc = 27.2;
    } else if (weeksValue >= 27 && weeksValue < 42) {
        minImc = 22.8;
        maxImc = 29.2;
    } else {
        minImc = 29.3;
        maxImc = 33.3;
    }

    // Verificar se o IMC está dentro do intervalo addequado e exibir o resultado
    let result;

    if (imc >= minImc && imc <= maxImc) {
        result = `Seu IMC é ${imc}. Parabéns, você está dentro do intervalo de IMC adequado para ${weeksValue} semanas de gestação.`;
    } else {
        result = `Seu IMC é ${imc}. Infelizmente, você está fora do intervalo de IMC adequado para ${weeksValue} semanas de gestação. Consulte um médico para avaliação.`;
    };

    return result;

};

export const gestAgeCalculator = (dm, tdy) => {

    const dum = new Date(dm);
    const today = new Date(tdy);
    const diffTime = Math.abs(today - dum);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

    const result = `A idade gestacional é de ${diffWeeks} semanas.`;

    return result;

};

export const fertilePeriodCalculator = (durationInput, dateInput) => {
    
    const duration = parseInt(durationInput);
    const date = new Date(dateInput);

    const ovulation = new Date(date.getTime() + (duration - 14) * 24 * 60 * 60 * 1000);

    var fertileBeginning = new Date(ovulation.getTime() - 3 * 24 * 60 * 60 * 1000);
    var fertileEnding = new Date(ovulation.getTime() + 3 * 24 * 60 * 60 * 1000);

    // Opções de formatação das datas
    const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('pt-BR', options);

    // Formatação das datas
    const formattedFertileBeginning = formatter.format(fertileBeginning);
    const formattedFertileEnding = formatter.format(fertileEnding);

    const result = `Seu período fértil é entre ${formattedFertileBeginning} e ${formattedFertileEnding}.`;

    return result;
};