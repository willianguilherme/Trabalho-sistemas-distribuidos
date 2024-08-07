const Axios = require('axios');
const readline = require('readline-sync');
const PORTA = "3000";

async function main() {
  async function fazRequisicao(x, y, operacao) {
    try {
      const response = await Axios({
        method: "POST",
        url: `http://localhost:${PORTA}/${checaOperacao(operacao)}`,
        data: {
          valor1: x,
          valor2: y
        }
      });
      console.log(`\nREPOSTA API ****\nResultado da ${operacao} é ${response.data.result}`);
    } catch (error) {
      console.log("Nao foi possivel conectar ao servidor");
    }
  }

  function checaOperacao(operacao) {
    switch (operacao) {
      case "+":
        return "soma"
      case "-":
        return "subtracao"
      case "*":
        return "multiplicacao"
      case "/":
        return "divisao"
    }
  }

  const operacoesPossiveis = ['+', '-', '*', '/']
  let valor1 = 'NaN'
  let operacao = ''
  let valor2 = 'NaN'

  while(isNaN(valor1)) {
    valor1 = readline.question("Digite o valor do primeiro numero: ");
    if(isNaN(valor1)) {
      console.log("\nDigite um numero valido");
    }
  }

  console.log("\n"); 

  while(!operacoesPossiveis.includes(operacao)) {
    operacao = readline.question("Digite a operação: ");
    if(!operacoesPossiveis.includes(operacao)) {
      console.log("\nDigite uma operacao valida ( +, -, /, * )"); 
    }
  }

  console.log("\n"); 

  while(isNaN(valor2)) {
    valor2 = readline.question("Digite o valor do segundo numero: ");
    if(isNaN(valor2)) {
      console.log("\nDigite um numero valido");
    }
  }

  valor1 = Number(valor1)
  valor2 = Number(valor2)

  fazRequisicao(valor1, valor2, operacao)
}

main();
