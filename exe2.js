const fibo = []; // Array que guarda a sequencia de fibonacci

const qtd = 10; // Quantidade de elementos na sequência 

const x = 20; // Elemento que você quer checar se está na sequência

fibo[0] = 0;
fibo[1] = 1;
for (let i = 2; i < qtd; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}

console.log(fibo);
fibo.includes(x) ? console.log(`${x} está na sequência Fibonacci`) : console.log(`${x} não está na sequência Fibonacci`);