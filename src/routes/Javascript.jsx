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
          <h4>Variavel var</h4>
        <span className="textCode">Em JavaScript, a palavra-chave var é usada para declarar uma variável. Uma variável é como uma caixa de armazenamento que você pode usar para guardar valores. Aqui está um exemplo simples:</span>
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
        <span className="textCode">Depois de declarar a variável, você pode usá-la em seu código. Por exemplo:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(minhaVariavel; // Isso imprimirá 10 no console.)`}/>
        </div>
        <p>É importante mencionar que <b>var</b> tem algumas peculiaridades em comparação com outras formas de declarar variáveis em JavaScript, como <b>let</b> e <b>const</b>. Por exemplo, <b>var</b> é funcionalmente "elevado" para o topo do escopo em que foi declarado (isso é chamado de hoisting), o que pode levar a comportamentos inesperados. Em projetos mais modernos, geralmente é preferível usar <b>let</b> ou <b>const</b> em vez de <b>var</b>, pois essas palavras-chave têm um escopo mais previsível.</p>
      </div>
      <div>
        <h4>Variavel let</h4>
        <p>A palavra-chave let em JavaScript é usada para declarar uma variável, assim como var. No entanto, let tem algumas diferenças importantes, especialmente em relação ao escopo.</p>
        <p>Diferentemente de var, let tem um escopo de bloco, o que significa que a variável só é visível dentro do bloco em que foi declarada.</p>
        <span className="textCode">Aqui está um exemplo simples de como você pode usar let para declarar e atribuir uma variável:</span>
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
        <h4>Tipos primitivos</h4>
        <h5>Number</h5>
        <h5>String</h5>
        <h5>Boolean</h5>
        <h5>Undefined</h5>
        <h5>Null</h5>
        <h5>Symbol</h5>
        <h4>Tipos Objetos</h4>
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
        <h4>Arrays</h4>
        <p>Um array é uma coleção ordenada de valores. Os valores podem ser de qualquer tipo, e cada elemento em um array é associado a um índice.</p>
        <span className="textCode">Criando um Array:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`let frutas = ['maçã', 'banana', 'laranja'];
let numeros = [1, 2, 3, 4, 5];
let misto = [1, 'maçã', true, { tipo: 'fruta' }];`}/>
        </div>
        <span className="textCode">Acessando Elementos do Array:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(frutas[0]);  // 'maçã'
console.log(numeros.length);  // 5`}/>
        </div>
        <span className="textCode">Modificando Elementos do Array:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`frutas[1] = 'uva';
frutas.push('abacaxi');  // Adiciona ao final do array`}/>
        </div>
        <span className="textCode">Métodos Úteis de Array:</span>
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
        <h4>Objetos</h4>
        <p>Um objeto é uma coleção de pares chave-valor, onde cada chave é uma string única que identifica um valor associado.</p>
        <span className="textCode">Criando um Objeto:</span>
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
        <span className="textCode">Acessando Propriedades do Objeto:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`console.log(pessoa.nome);  // 'João'
console.log(pessoa['idade']);  // 25
console.log(pessoa.endereco.cidade);  // 'Cidade Exemplo'`}/>
        </div>
        <span className="textCode">Modificando Propriedades do Objeto:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`pessoa.nome = 'Carlos';
pessoa['idade'] = 30;
pessoa.endereco.cidade = 'Nova Cidade';`}/>
        </div>
        <span className="textCode">Adicionando Novas Propriedades:</span>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" 
          code={`pessoa.profissao = 'Desenvolvedor';`}/>
        </div>
        <span className="textCode">Métodos e Funções em Objetos:</span>
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