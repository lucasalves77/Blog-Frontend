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
            <li><a href="#variaveis">Variaveis</a></li>
            <li><a href="#tiposDeDados">Tipos de dados</a></li>
            <li><a href="#operadores">Operadores</a></li>
            <li><a href="#condicionais">Condicionais</a></li>
            <li><a href="#arraysObjetos">Arrays e Objetos</a></li>
            <li><a href="#funcoes">Funcoes</a></li>
            <li><a href="#escopoClosures">Escopo e Closures</a></li>
            <li><a href="#callbacks">Callbacks</a></li>
            <li><a href="#promises">Promises</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#manipulacaoDoDom">Manipulacao do Dom</a></li>
          </ul>
      </div>
        <h3 className="tituloh3" id="Variaveis">VARIAVEIS</h3>
        <div className="line"></div>
        <p><b>Var</b>: Antiga forma de declarar variáveis. Escopo de função.</p>
        <p><b>Let</b>: Introduzido no ECMAScript 6 (ES6). Escopo de bloco.</p>
        <p><b>Const</b>: Também introduzido no ES6. Similar ao let, mas a variável não pode ser.</p>
        <div>
          <h4>Variavel var</h4>
        <p>Em JavaScript, a palavra-chave var é usada para declarar uma variável. Uma variável é como uma caixa de armazenamento que você pode usar para guardar valores. Aqui está um exemplo simples:</p>
        <div className="ide">
        <Codeide/>
        <CodeHighlighter language="javascript" code={'var minhavariavel = 10;'}/>
        </div>
        <ul className="topico">
          <li><b>var</b>: A palavra-chave que indica que você está declarando uma variável.</li>
          <li><b>minhaVariavel</b>: O nome que você escolhe para a sua variável. Pode ser praticamente qualquer coisa, contanto que siga algumas regras, como não começar com números e não conter espaços.</li>
          <li><b>=</b>: O operador de atribuição. Ele diz ao JavaScript para atribuir o valor à direita à variável à esquerda.</li>
          <li><b>10</b>: O valor que está sendo atribuído à variável.</li>
        </ul>
        <p>Depois de declarar a variável, você pode usá-la em seu código. Por exemplo:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" code={'console.log(minhaVariavel; // Isso imprimirá 10 no console.)'}/>
        </div>
        <p>É importante mencionar que <b>var</b> tem algumas peculiaridades em comparação com outras formas de declarar variáveis em JavaScript, como <b>let</b> e <b>const</b>. Por exemplo, <b>var</b> é funcionalmente "elevado" para o topo do escopo em que foi declarado (isso é chamado de hoisting), o que pode levar a comportamentos inesperados. Em projetos mais modernos, geralmente é preferível usar <b>let</b> ou <b>const</b> em vez de <b>var</b>, pois essas palavras-chave têm um escopo mais previsível.</p>
      </div>
      <div>
        <h4>Variavel let</h4>
        <p>A palavra-chave let em JavaScript é usada para declarar uma variável, assim como var. No entanto, let tem algumas diferenças importantes, especialmente em relação ao escopo.</p>
        <p>Diferentemente de var, let tem um escopo de bloco, o que significa que a variável só é visível dentro do bloco em que foi declarada.</p>
        <p>Aqui está um exemplo simples de como você pode usar let para declarar e atribuir uma variável:</p>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter language="javascript" code={'let minhaVariavel = 10;'}/>   
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
      </div>
      <div id="arraysObjetos">
        <h3 className="tituloh3">ARRAYS E OBJETOS</h3>
        <div className="line"></div>
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