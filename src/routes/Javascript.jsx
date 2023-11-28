import React from "react";
import './Javascript.css';
import Codeide from '../components/Codeide';
import CodeHighlighter from '../components/CodeHighlighter';


const Javascript = () => {
  return(
    <div className="container">
      <h1>Javascript</h1>
      <div className="prefacio">
        <details>
          <summary>Variáveis</summary>
          <a href="#var">Var</a>
          <a href="#let">Let</a>
          <a href="#const">Const</a>
        </details>
        <details>
          <summary>Tipos de dados</summary>
          <h6 className="sublist">Tipos primitivos</h6>
            <a href="#number">Number</a>
            <a href="#string">String</a>
            <a href="#boolean">Boolean</a>
            <a href="#undefined">Undefined</a>
            <a href="#null">Null</a>
            <a href="#symbol">Symbol</a>
          <h6 className="sublist">Tipos objetos</h6>
            <a href="#object">Object</a>
            <a href="#array">Array</a>
            <a href="#function">Function</a>
            <a href="#date">Date</a>
            <a href="#regexp">RegExp</a>
        </details>
        <details>
          <summary>Operadores</summary>
          <h6 className="sublist">Operadores Aritméticos</h6>
          <a href="#adicao">Adicao(+)</a>
          <a href="#subtracao">Subtracao(-)</a>
          <a href="#multiplicao">Multiplicao(*)</a>
          <a href="#divisao">Divisao(/)</a>
          <a href="#modulo">Modulo(%)</a>
        </details>
        <details>
          <summary>Condicionais</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Arrays e Objetos</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Funções</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Escopo e Closures</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Callbacks</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Promises</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Eventos</summary>
          <a href="">let</a>
        </details>
        <details>
          <summary>Manipulação do Dom</summary>
          <a href="">let</a>
        </details>     
      </div>
        <h3 className="tituloh3" id="Variaveis">VARIAVEIS</h3>
        <div className="line"></div>
        <p><b>Var</b>: Antiga forma de declarar variáveis. Escopo de função.</p>
        <p><b>Let</b>: Introduzido no ECMAScript 6 (ES6). Escopo de bloco.</p>
        <p><b>Const</b>: Também introduzido no ES6. Similar ao let, mas a variável não pode ser.</p>
        <div id="var">
          <h5>Var</h5>
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
      <div id="let">
        <h5>Let</h5>
        <p>A palavra-chave let em JavaScript é usada para declarar uma variável, assim como var. No entanto, let tem algumas diferenças importantes, especialmente em relação ao escopo.</p>
        <p>Diferentemente de var, let tem um escopo de bloco, o que significa que a variável só é visível dentro do bloco em que foi declarada.</p>
        <p className="textCode">Aqui está um exemplo simples de como você pode usar let para declarar e atribuir uma variável:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let minhaVariavel = 10;`}/>   
        </div>
        <p>Variáveis declaradas com let são limitadas ao escopo de bloco em que foram definidas.</p>
      <div id="const">
      <h5>Const</h5>
      </div>
      </div> 
      <div id="tiposDeDados">
        <h3 className="tituloh3">TIPOS DE DADOS</h3>
        <div className="line"></div>
        <h4>TIPOS PRIMITIVOS</h4> 

        {/*----------NUMBER-----------*/}
        <div id="number" className="number">
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
        </div>{/*----------number-----------*/}

        {/*----------STRING-----------*/}
        <div id="string" className="string">
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
        </div>{/*----------string-----------*/}
        
        {/*----------BOOLEAN-----------*/}
        <div id="boolean" className="boolean">
          <h5>Boolean</h5>
        <h6>Declaração de Variáveis Booleanas:</h6>
        <p className="textCode">Você pode declarar variáveis booleanas atribuindo-lhes valores true ou false:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let isAtivo = true;
let isAdmin = false;`}/>
        </div>
        <h6>Expressões Lógicas:</h6>
        <p className="textCode">Operadores lógicos em JavaScript, como && (AND), || (OR) e ! (NOT), são frequentemente usados com valores booleanos para criar expressões lógicas complexas:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let idade = 20;
let ehMaiorDeIdade = idade >= 18;
let temPermissao = true;

let podeEntrar = ehMaiorDeIdade && temPermissao;
console.log(podeEntrar); // Saída: true (se ambas as condições forem verdadeiras)`}/>
        </div>
        <h6>Comparação:</h6>
        <p className="textCode">Operadores de comparação retornam valores booleanos. Por exemplo:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let numeroA = 5;
let numeroB = 10;

let resultado = numeroA < numeroB;
console.log(resultado); // Saída: true (porque 5 é menor que 10)`}/>
        </div>
        <h6>Estruturas Condicionais:</h6>
        <p className="textCode">As estruturas condicionais, como if, else if e else, usam valores booleanos para determinar o fluxo do programa:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let temperatura = 25;

if (temperatura > 30) {
  console.log("Está muito quente!");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("O clima está agradável.");
} else {
  console.log("Está um pouco frio.");`}/>
        </div>
        <h6>Funções que Retornam Booleanos:</h6>
        <p className="textCode">Funções frequentemente retornam valores booleanos para indicar o sucesso ou falha de uma operação:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`function login(usuario, senha) {
  // Lógica para verificar as credenciais
  if (usuario === "admin" && senha === "senha123") {
    return true;
  } else {
    return false;
  }
}

let autenticado = login("admin", "senha123");
console.log(autenticado); // Saída: true`}/>
        </div>
        <h6>Valores Truthy e Falsy:</h6>
        <p className="textCode">Em JavaScript, além dos valores true e false, existem valores "truthy" e "falsy" que podem ser avaliados como booleanos em um contexto condicional. Por exemplo, uma string não vazia é avaliada como true, enquanto uma string vazia é avaliada como false.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let stringNaoVazia = "Olá";
if (stringNaoVazia) {
  console.log("A string não está vazia!");
} else {
  console.log("A string está vazia.");
}`}/>
        </div>
        </div>{/*-------Boolean-------*/}
        
        {/*-------UNDEFINED-------*/}
        <div id="undefined" className="undefined">
        <h5>Undefined</h5>
        <p className="textCode">o valor undefined é um tipo de dado que representa a ausência de um valor ou a falta de definição de uma variável. Quando uma variável é declarada, mas nenhum valor é atribuído a ela, seu valor padrão é undefined.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let variavelIndefinida;
console.log(variavelIndefinida); // Saída: undefined`}/>
        </div>
        <p >Neste exemplo, a variável variavelIndefinida é declarada, mas nenhum valor é atribuído explicitamente a ela. Portanto, seu valor padrão é undefined.</p>
        <h6>Retorno de Funções:</h6>
        <p className="textCode">Funções em JavaScript podem não ter um valor de retorno explícito. Nesse caso, o valor de retorno padrão é undefined.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`function semRetorno() {
  // Esta função não tem uma instrução de retorno
}

let resultado = semRetorno();
console.log(resultado); // Saída: undefined`}/>
        </div>
        <h6>Argumentos Ausentes:</h6>
        <p className="textCode">Quando uma função é chamada com menos argumentos do que o número de parâmetros definidos, os parâmetros ausentes recebem o valor undefined.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`function soma(a, b) {
  return a + b;
}

let resultado = soma(5);
console.log(resultado); // Saída: NaN (porque b é undefined)`}/>
        </div>
        <h6>Acesso a Propriedades Indefinidas:</h6>
        <p className="textCode">Ao tentar acessar uma propriedade que não existe em um objeto, o resultado é undefined.</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let objeto = { chave: 'valor' };
console.log(objeto.outraChave); // Saída: undefined`}/>
        </div>


        </div>{/*-------Boolean-------*/}

        {/*-------NULL-------*/}
        <div id="null">
          <h5>Null</h5>
        </div>{/*-------null-------*/}
        
        {/*-------SYMBOL-------*/}
        <div id="symbol">
          <h5>Symbol</h5>
        </div>{/*-------symbol------*/}
        
        <h4>TIPOS OBJETOS</h4>
        <div id="object">
          <h5>Object</h5>
        </div>
        
        <div id="array">
          <h5>Array</h5>
        </div>
        
        <div id="function">
          <h5>Function</h5>
        </div>
        <div id="date">
          <h5>Date</h5>
        </div>

        <div id="regexp">
          <h5>RegExp</h5>
        </div>
        
      </div>
      <div id="operadores">
        <h3 className="tituloh3">OPERADORES</h3>
        <div className="line"></div>
        <h4>Operadores Aritmeticos</h4>
        <h5 id="adicao">Adicao(+)</h5>
        <h5 id="subtracao">Subtracao(-)</h5>
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