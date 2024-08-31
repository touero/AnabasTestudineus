import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import he from 'he';

hljs.registerLanguage('shell', shell)

export function highlightCode(key: string) {
      const code = `curl -X POST -H "Content-Type: application/json" -d '{"key": "${key}"}' http://127.0.0.1:2518/api`;
      return he.decode(hljs.highlight(code, { language: 'shell' }).value);
    }

export function copyToClipboard() {
      const codeElement = document.querySelector('code.shell') as HTMLElement;
      if (codeElement) {
        const code = codeElement.innerText;
        navigator.clipboard.writeText(code).then(() => {
          console.log('copy success')
        });
      } else {
        console.log('Not find element, copy fail')
      }
   }