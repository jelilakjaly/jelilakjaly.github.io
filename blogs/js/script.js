document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre').forEach((el) => {
    let text = el.textContent;

    // remove newlines from start and all the white space from the end
    text = text.replace(/^[\n]+/).trimEnd();

    let texts = text.split(/\n/);
    let startSpaces = 0;
    if (texts.length > 0) {
      startSpaces = countLeadinWhiteSpaces(texts[0]);
      texts.forEach(t => {
        let n = countLeadinWhiteSpaces(t);
        if (n < startSpaces) {
          startSpaces = n
        }
      });
    }

    texts = texts.map(t => {
      return t.substring(startSpaces);
    });

    el.textContent = texts.join("\n");
    el.classList.add("code", "language-bash")
    //hljs.highlightElement(el);

  });

  document.querySelectorAll('em').forEach((el) => {
    el.classList.add("code", "language-bash")
    //hljs.highlightElement(el);
  });
});

function countLeadinWhiteSpaces(text) {
  return text.search(/\S|$/);
}