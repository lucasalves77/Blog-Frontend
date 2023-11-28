import React from "react";
import './Html.css';
import Codeide from '../components/Codeide';
import CodeHighlighter from '../components/CodeHighlighter';

const Html = () => {
  return (
    <>
      <div className="container">
        <h1>Html</h1>
        <div className="prefacio">
          <ul>
            <li><a href="#variaveis">Estrutura basica</a></li>
            <li><a href="#variaveis">Tipos de dados</a></li>
            <li><a href="#variaveis">Operadores</a></li>
            <li><a href="#variaveis">Condicionais</a></li>
          </ul>
        </div>
        <div>
          <h4>Estrutura basica</h4>
          <ul className="conteudo">
            <li>{'<!DOCTYPE html>'}</li> 
            <p>Declaração para especificar a versão do HTML.</p>
            <li>{'<html lang="en">'}</li> 
            <p>Elemento raiz. O atributo lang define o idioma da página.</p>
            <li>{'<head>'}</li>
            <p>Metadados e configurações da página.</p>
            <li>{'<meta charset="UTF-8" />'}</li>
            <p>Define o conjunto de caracteres para UTF-8.</p>
            <li>{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</li>
            <p>Configura a largura da viewport para o dispositivo e a escala inicial.</p>
            <li>{'<title>'}</li>
            <p>Título da página exibido no navegador.</p>
            <li>{'<body>'}</li>
            <p>Conteúdo visível na página.</p>
          </ul>
        <div className="ide">
          <Codeide/>
          <CodeHighlighter 
            language="html" 
            code={`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Minha Página HTML</title>
    </head>
    <body>
      <h1>Olá, Mundo!</h1>
      <p>Esta é uma página HTML básica.</p>
    </body>
  </html>
            `}
          />
        </div>
        </div>      
        <div className="line"></div>
      </div>
    </>
  );
}

export default Html;
