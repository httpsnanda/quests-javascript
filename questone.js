function pertenceFibonacci(n) {
    let a = 0, b = 1, temp;
    while (b < n) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === n || n === 0;
}

const numero = parseInt(prompt("Digite um número:"));

if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
