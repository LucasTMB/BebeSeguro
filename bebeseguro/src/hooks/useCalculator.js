export const deliveryDateCalculator = (lastMenstruationDate, menstrualCycle) => {

    const lastDate = new Date(lastMenstruationDate);
    const menstrualCycle = parseInt(menstrualCycle);

    let deliveryDate = new Date(lastDate.getTime())
        .setFullYear(deliveryDate.getFullYear() + 1)
        .setDate(deliveryDate.getDate() + 7)
        .setMonth(deliveryDate.getMonth() - 3)
        .setDate(deliveryDate.getDate() + (menstrualCycle - 28));

    const result = `Seu bebê vai chegar em ${deliveryDate}!`;

    return result;

};

export const imcCalculator = (weight, height, weeks) => {

    const weight = parseFloat(weight);
    const height = parseFloat(height);
    const weeks = parseInt(weeks);

    const heightInMeters = height / 100;
    const imc = (height / (heightInMeters ** 2)).toFixed(1);

    let minImc;
    let maxImc;

    if ( weeks < 13 ) {
        minImc = 12.2;
        maxImc = 16.1;
    } else if ( weeks >= 13 && weeks < 27 ) {
        minImc = 11.0;
        maxImc = 15.6;
    } else if ( weeks >= 27 && weeks < 40 ) {
        minImc = 10.4;
        maxImc = 14.4;
    } else {
        minImc = 10.0;
        maxImc = 13.3;
    }

    let result;

    if ( imc >= minImc && imc <= maxImc ) {
        result = `Seu IMC é ${imc}. Parabéns, você está dentro do intervalo de IMC adequado para ${weeks} semanas de gestação.`;
    } else {
        result = `Seu IMC é ${imc}. Infelizmente, você está fora do intervalo de IMC adequado para ${weeks} semanas de gestação. Consulte um médico para avaliação.`;
    };

    return result;

};

export const gestAgeCalculator = (dum, today) => {

    const dum = new Date(dum);
    const today = new Date(today);
    const diffTime = Math.abs(today - dum);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

    const result = `A idade gestacional é de ${diffWeeks} semanas.`;

    return result;

};

export const hcgCalculator = (initialHcg, currentHcg, initialDate, currentDate) => {
    
}