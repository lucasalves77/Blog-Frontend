// CodeHighlighter.jsx
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';


// Importe os estilos de destaque (ajuste o caminho conforme necessário)
import './CodeHighlighter.css';

const CodeHighlighter = ({ language, code }) => {
  const codeRef = useRef();

  useEffect(() => {
    // Destaque o código quando o componente for montado
    hljs.highlightBlock(codeRef.current);
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
