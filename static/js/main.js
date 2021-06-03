
const config = {
    lineNumbers: false,
    mode: "text/html",
    matchBrackets: true,
    theme: "dracula",
    autoCloseBrackets: true,
    autofocus: true,
    lineWrapping: true
}

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), config);
editor.setSize("550", "311");
