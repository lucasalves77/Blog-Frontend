import React from "react";
import './Javascript.css';
import Codeide from '../components/Codeide';
import CodeHighlighter from '../components/CodeHighlighter';


const Javascript = () => {
  return(
    <div className="container">
      <h1>Javascript</h1>
      <div className="prefacio">
          <ul>
            <li><a href="#variaveis">Variáveis</a></li>
            <li><a href="#tiposDeDados">Tipos de dados</a></li>
            <li><a href="#operadores">Operadores</a></li>
            <li><a href="#condicionais">Condicionais</a></li>
            <li><a href="#arraysObjetos">Arrays e Objetos</a></li>
            <li><a href="#funcoes">Funções</a></li>
            <li><a href="#escopoClosures">Escopo e Closures</a></li>
            <li><a href="#callbacks">Callbacks</a></li>
            <li><a href="#promises">Promises</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#manipulacaoDoDom">Manipulação do Dom</a></li>
          </ul>
      </div>
        <h3 className="tituloh3" id="Variaveis">VARIAVEIS</h3>
        <div className="line"></div>
        <p><b>Var</b>: Antiga forma de declarar variáveis. Escopo de função.</p>
        <p><b>Let</b>: Introduzido no ECMAScript 6 (ES6). Escopo de bloco.</p>
        <p><b>Const</b>: Também introduzido no ES6. Similar ao let, mas a variável não pode ser.</p>
        <div>
          <h5>Variavel var</h5>
        <p className="textCode">Em JavaScript, a palavra-chave var é usada para declarar uma variável. Uma variável é como uma caixa de armazenamento que você pode usar para guardar valores. Aqui está um exemplo simples:</p>
        <div className="ide">
        <Codeide/>
        <CodeHighlighter language="javascript" 
        code={`var minhavariavel = 10;`}/>
        </div>
        <ul className="topico">
          <li><b>var</b>: A palavra-chave que indica que você está declarando uma variável.</li>
          <li><b>minhaVariavel</b>: O nome que você escolhe para a sua variável. Pode ser praticamente qualquer coisa, contanto que siga algumas regras, como não começar com números e não conter espaços.</li>
          <li><b>=</b>: O operador de atribuição. Ele diz ao JavaScript para atribuir o valor à direita à variável à esquerda.</li>
          <li><b>10</b>: O valor que está sendo atribuído à variável.</li>
        </ul>
        <p className="textCode">Depois de declarar a variável, você pode usá-la em seu código. Por exemplo:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(minhaVariavel; // Isso imprimirá 10 no console.)`}/>
        </div>
        <p>É importante mencionar que <b>var</b> tem algumas peculiaridades em comparação com outras formas de declarar variáveis em JavaScript, como <b>let</b> e <b>const</b>. Por exemplo, <b>var</b> é funcionalmente "elevado" para o topo do escopo em que foi declarado (isso é chamado de hoisting), o que pode levar a comportamentos inesperados. Em projetos mais modernos, geralmente é preferível usar <b>let</b> ou <b>const</b> em vez de <b>var</b>, pois essas palavras-chave têm um escopo mais previsível.</p>
      </div>
      <div>
        <h5>Variavel let</h5>
        <p>A palavra-chave let em JavaScript é usada para declarar uma variável, assim como var. No entanto, let tem algumas diferenças importantes, especialmente em relação ao escopo.</p>
        <p>Diferentemente de var, let tem um escopo de bloco, o que significa que a variável só é visível dentro do bloco em que foi declarada.</p>
        <p className="textCode">Aqui está um exemplo simples de como você pode usar let para declarar e atribuir uma variável:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let minhaVariavel = 10;`}/>   
        </div>
        <p>Variáveis declaradas com let são limitadas ao escopo de bloco em que foram definidas.</p>
      </div> 
      <div id="tiposDeDados">
        <h3 className="tituloh3">TIPOS DE DADOS</h3>
        <div className="line"></div>
        <h4>TIPOS PRIMITIVOS</h4>
        <h5>Number</h5>
        <p >Em JavaScript, o tipo de dado number é usado para representar valores numéricos, sejam eles inteiros ou de ponto flutuante (números decimais). Aqui estão algumas características importantes do tipo de dado number em JavaScript, juntamente com exemplos:</p>
        <h6>Inteiros e Ponto Flutuante:</h6>
        <p className="textCode">O tipo number em JavaScript pode representar tanto inteiros quanto números de ponto flutuante.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let inteiro = 42;          // Inteiro
let decimal = 3.14;        // Ponto flutuante`}/>
        </div>
        <h6>Operações Aritméticas:</h6>   
        <p className="textCode">Você pode realizar operações aritméticas com números em JavaScript.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let soma = 5 + 3;          // Soma
let subtracao = 7 - 2;      // Subtração
let multiplicacao = 4 * 6;  // Multiplicação
let divisao = 8 / 2;        // Divisão`}/>
        </div>
        <h6>Infinity e NaN:</h6>
        <p className="textCode">JavaScript inclui valores especiais como Infinity (infinito) e NaN (não é um número).</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let infinito = Infinity;
let naoENumero = NaN;`}/>
        </div>
        <h6>Conversão de Tipos:</h6>
        <p className="textCode">É possível converter outros tipos de dados para number usando funções como parseInt() ou parseFloat().</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let stringNumero = "42";
let numeroConvertido = parseInt(stringNumero);`}/>
        </div>
        <h6>Objeto Number:</h6>
        <p className="textCode">Além do tipo primitivo number, existe um objeto embutido chamado Number que fornece propriedades e métodos úteis para trabalhar com números.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let numeroPrimitivo = 42;
let numeroObjeto = new Number(42);`}/>
        </div>
        <h5>String</h5>
        <p>uma string é um tipo de dado que representa uma sequência de caracteres. As strings são usadas para armazenar e manipular texto. Elas podem conter letras, números, espaços, pontuações e outros caracteres.</p>
        <p className="textCode">Para declarar uma string em JavaScript, você pode usar aspas simples (') ou duplas ("). Aqui estão alguns exemplos:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let primeiraString = 'Isso é uma string com aspas simples.';
let segundaString = "Isso é outra string com aspas duplas.";`}/>
        </div>
        <p className="textCode">Você também pode criar uma string usando o construtor String():</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let terceiraString = new String('Isso é uma string usando o construtor String.');`}/>
        </div>
        <p className="textCode">No entanto, a forma mais comum de criar strings é usando as aspas simples ou duplas diretamente.</p>
        <p>Operações com Strings:</p>
        <h6>Concatenação:</h6>
        <p className="textCode">A concatenação de strings é a operação de combinar duas ou mais strings em uma única string. Isso pode ser feito usando o operador +:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let saudacao = 'Olá';
let nome = 'Usuário';
let mensagem = saudacao + ', ' + nome + '!';
console.log(mensagem); // Saída: Olá, Usuário!`}/>
        </div>
        <h6>Comprimento da String:</h6>
        <p className="textCode">O comprimento de uma string pode ser obtido usando a propriedade length:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let minhaString = 'Esta é uma string.';
console.log(minhaString.length); // Saída: 18 (o comprimento da string)`}/>
        </div>
        <h6>Acessando Caracteres:</h6>
        <p className="textCode">Os caracteres em uma string podem ser acessados usando a notação de colchetes:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let minhaString = 'JavaScript';
console.log(minhaString[0]); // Saída: J (primeiro caractere)
console.log(minhaString[4]); // Saída: S (quinto caractere)`}/>
        </div>
        <h6>Métodos de String:</h6>
        <p className="textCode">JavaScript fornece uma variedade de métodos embutidos para manipulação de strings, como toUpperCase(), toLowerCase(), indexOf(), slice(), etc. Aqui está um exemplo:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let frase = 'JavaScript é poderoso.';
console.log(frase.toUpperCase()); // Saída: JAVASCRIPT É PODEROSO.
console.log(frase.indexOf('poderoso')); // Saída: 15 (posição da palavra "poderoso")`}/>
        </div>
        <h6>Escape de Caracteres:</h6>
        <p className="textCode">Para incluir caracteres especiais em uma string, você pode usar escape de caracteres com a barra invertida ('\'). Por exemplo:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let stringComAspas = 'Esta é uma string com aspas simples ('\').';`}/>
        </div>
        <h5>Boolean</h5>
        <h6>Declaração de Variáveis Booleanas:</h6>
        <h5>Undefined</h5>
        <h5>Null</h5>
        <h5>Symbol</h5>
        <h4>TIPOS OBJETOS</h4>
        <h5>Object</h5>
        <h5>Array</h5>
        <h5>Function</h5>
        <h5>Date</h5>
        <h5>RegExp</h5>
      </div>
      <div id="operadores">
        <h3 className="tituloh3">OPERADORES</h3>
        <div className="line"></div>
        <h4>Operadores Aritmeticos</h4>
        <h5>Adicao(+)</h5>
        <h5>Subtracao(-)</h5>
        <h5>Multiplicao(*)</h5>
        <h5>Divisao(/)</h5>
        <h5>Modulo(%)</h5>
        <h5>Incremento(++)</h5>
        <h5>Decremento(--)</h5>
        <h4>Operadores de Atribuicao</h4>
        <h5>Atribuicao simples(=)</h5>
        <h5>Atribuicao com Operacao(+=,-=,/=)</h5>
        <h4>Operadores de comparacao</h4>
        <h5>Igual(==)</h5>
        <h5>Estritamente igual(===)</h5>
        <h5>Diferente(!=)</h5>
        <h5>Estritamente diferente(!==)</h5>
        <h5>Maior({'>'})</h5>
        <h5>Menor({'<'})</h5>
        <h5>Maior ou igual({'>='})</h5>
        <h5>Menor ou igual({'<='})</h5>
        <h4>Operadores Logicos</h4>
        <h5>E logico(&&)</h5>
        <h5>OU logico(||)</h5>
        <h5>NAO logico(!)</h5>
        <h4>Operador ternario</h4>
        <h5>Operador ternario(?:)</h5>
        <h4>Operadores bitwise</h4>
        <h5>AND Bit a Bit(&)</h5>
        <h5>OR Bit a Bit(|)</h5>
        <h5>XOR Bit a Bit(^)</h5>
        <h5>Shift a esquerda({'<<'})</h5>
        <h5>Shift a direita com preenchimento zero({'>>>'})</h5>
        <h5>Shift a direita com sinal({'>>'})</h5>
      </div>
      <div id="condicionais">
        <h3 className="tituloh3">CONDICIONAIS</h3>
        <div className="line"></div>
        <h5>if else</h5>
        <h5>switch case</h5>
        <h5>for loop</h5>
        <h5>while loop</h5>
        <h5>do-while loop</h5>
        <h5>for...in loop</h5>
        <h5>for...of loop</h5>
      </div>
      <div id="arraysObjetos">
        <h3 className="tituloh3">ARRAYS E OBJETOS</h3>
        <div className="line"></div>
        <h5>Arrays</h5>
        <p>Um array é uma coleção ordenada de valores. Os valores podem ser de qualquer tipo, e cada elemento em um array é associado a um índice.</p>
        <p className="textCode">Criando um Array:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let frutas = ['maçã', 'banana', 'laranja'];
let numeros = [1, 2, 3, 4, 5];
let misto = [1, 'maçã', true, { tipo: 'fruta' }];`}/>
        </div>
        <p className="textCode">Acessando Elementos do Array:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(frutas[0]);  // 'maçã'
console.log(numeros.length);  // 5`}/>
        </div>
        <p className="textCode">Modificando Elementos do Array:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`frutas[1] = 'uva';
frutas.push('abacaxi');  // Adiciona ao final do array`}/>
        </div>
        <p className="textCode">Métodos Úteis de Array:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let numeros = [3, 1, 4, 1, 5, 9];
numeros.sort();  // Ordena os elementos
numeros.reverse();  // Inverte a ordem dos elementos
numeros.pop();  // Remove o último elemento
numeros.push(2);  // Adiciona ao final
numeros.shift();  // Remove o primeiro elemento
numeros.unshift(8);  // Adiciona no início`}/>
        </div>
        <h5>Objetos</h5>
        <p>Um objeto é uma coleção de pares chave-valor, onde cada chave é uma string única que identifica um valor associado.</p>
        <p className="textCode">Criando um Objeto:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let pessoa = {
      nome: 'João',
      idade: 25,
      solteiro: true,
      endereco: {
          rua: 'Avenida Principal',
          cidade: 'Cidade Exemplo'
      }
  };`}/>
        </div>
        <p className="textCode">Acessando Propriedades do Objeto:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(pessoa.nome);  // 'João'
console.log(pessoa['idade']);  // 25
console.log(pessoa.endereco.cidade);  // 'Cidade Exemplo'`}/>
        </div>
        <p className="textCode">Modificando Propriedades do Objeto:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`pessoa.nome = 'Carlos';
pessoa['idade'] = 30;
pessoa.endereco.cidade = 'Nova Cidade';`}/>
        </div>
        <p className="textCode">Adicionando Novas Propriedades:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`pessoa.profissao = 'Desenvolvedor';`}/>
        </div>
        <p className="textCode">Métodos e Funções em Objetos:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrai: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.soma(5, 3));  // 8
console.log(calculadora.subtrai(8, 3));  // 5`}/>
        </div>
      </div>
      <div>
        <h3 className="tituloh3">FUNCOES</h3>
        <div className="line"></div>
      </div>
      <div id="escopoClosures">
        <h3 className="tituloh3">ESCOPO E CLOSURES</h3>
        <div className="line"></div>
      </div>
      <div id="callbacks">
        <h3 className="tituloh3">CALLBACKS</h3>
        <div className="line"></div>
      </div>
      <div id="promises">
        <h3 className="tituloh3">PROMISES</h3>
        <div className="line"></div>
      </div>
      <div id="eventos">
        <h3 className="tituloh3">EVENTOS</h3>
        <div className="line"></div>
      </div>
      <div id="manipulacaoDoDom">
        <h3 className="tituloh3">MANIPULACAO DO DOM</h3>
        <div className="line"></div>
      </div>
    </div>/*----container-----*/
  )
}

export default Javascript