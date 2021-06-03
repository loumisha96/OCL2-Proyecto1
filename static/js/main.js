document.getElementById('file-input')
  .addEventListener('change', readFile, false);

const config = {
    lineNumbers: true,
    mode: "text/x-java",
    matchBrackets: true,
    theme: "dracula",
    autoCloseBrackets: true,
    autofocus: true,
    lineWrapping: true
}

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), config);
editor.setSize("550", "311");


// Read File

function readFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsText(file);
  }
