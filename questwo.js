function contarLetraA(string) {
    const lowerCaseString = string.toLowerCase();
    let contador = 0;
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

const texto = prompt("Digite uma string:");
const quantidade = contarLetraA(texto);
console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
