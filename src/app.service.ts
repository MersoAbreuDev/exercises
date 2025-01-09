import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  questao1(): string {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return `O valor da variável SOMA é: ${SOMA}`;
}

questao2(numero: number): string {
    let fibonacci: number[] = [0, 1];

    while (fibonacci[fibonacci.length - 1] < numero) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    const pertence = fibonacci.includes(numero)
        ? `O número ${numero} pertence à sequência de Fibonacci.`
        : `O número ${numero} não pertence à sequência de Fibonacci.`;

    return `Sequência de Fibonacci: ${fibonacci}\n${pertence}`;
}

questao3(faturamento: { dia: number; valor: number }[]): string {
    const valoresValidos = faturamento.filter(item => item.valor > 0).map(item => item.valor);

    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;

    const diasAcimaDaMedia = faturamento.filter(item => item.valor > mediaMensal).length;

    return `Menor valor de faturamento: ${menorValor}\nMaior valor de faturamento: ${maiorValor}\nNúmero de dias com faturamento acima da média: ${diasAcimaDaMedia}`;
}

questao4(): string {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
    const resultado = Object.entries(faturamento).map(([estado, valor]) => {
        const percentual = (valor / total) * 100;
        return `${estado}: ${percentual.toFixed(2)}%`;
    });

    return resultado.join('\n');
}

questao5(texto: string): string {
    let invertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    return `Texto invertido: ${invertido}`;
}
}
