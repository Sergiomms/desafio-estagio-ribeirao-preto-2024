// Estágio Ribeirão Preto - 2024

// 1) Observe o trecho de código abaixo: 

//  	int INDICE = 13, SOMA = 0, K = 0; 

//  	enquanto K < INDICE faça 

// 	{ 

// 		K = K + 1; 

// 		SOMA = SOMA + K; 

// 	} 

//  	imprimir(SOMA); 

// Ao final do processamento, qual será o valor da variável SOMA? 


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Reposta desafio 1")
console.log(SOMA);

console.log("===================================")



// Ao final do processamento, o valor da variável SOMA será 91.


// ================================================================================================


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
// soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
// programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
// Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

// IMPORTANTE:  

// Esse número pode ser informado através de qualquer entrada de sua 
// preferência ou pode ser previamente definido no código; 



function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b <= numero) {
    if (b === numero) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
      return;
    }

    const temp = a + b;
    a = b;
    b = temp;
  }

  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

console.log("Resposta desafio 2")

const numero1 = 55;

verificaFibonacci(numero1);

const numero2 = 77;

verificaFibonacci(numero2);

console.log("===================================")



// ================================================================================================


// 3) Descubra a lógica e complete o próximo elemento:  

// a) 1, 3, 5, 7, ___  

// b) 2, 4, 8, 16, 32, 64, ____  

// c) 0, 1, 4, 9, 16, 25, 36, ____  

// d) 4, 16, 36, 64, ____  

// e) 1, 1, 2, 3, 5, 8, ____  

// f) 2,10, 12, 16, 17, 18, 19, ____  

// RESPOSTA:

// os próximos elementos são:

// a) 9
// b) 128
// c) 49
// d) 100
// e) 13
// f) 23

// ================================================================================================

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
// Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os 
// interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual 
// lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas 
// das lâmpadas, qual interruptor controla cada lâmpada?  

// RESPOSTA:

// 1 - Ligue o primeiro interruptor e aguarde alguns minutos.
// 2 - Desligue o primeiro interruptor e, ao mesmo tempo, ligue o segundo interruptor.
// 3 - Entre na sala onde estão as lâmpadas.

// A lâmpada que estiver acesa, está conectada ao interruptor que foi deixado ligado.
//  A lâmpada que apagada e quente, está conectada ao interruptor que foi ligado e desligado. 
//  A lâmpada que estiver apagada e fria, está conectada ao interruptor que nunca foi ligado.

// ================================================================================================


// 5) Escreva um programa que inverta os caracteres de um string. 

// IMPORTANTE: 

// 	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser 
//   previamente definida no código; 

// 	b) Evite usar funções prontas, como, por exemplo, reverse; 

function inverterString(str) {
  let resultado = '';

  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}

// Exemplo de uso com uma string previamente definida
const minhaString = 'Hello, World!';
const stringInvertida = inverterString(minhaString);

console.log("Reposta desafio 5");
console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertida}`);




