
// Read File

document.getElementById('file-input')
    .addEventListener('change', readFile, false);

fileName = '';
editorSelected = 'editor';

function readFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    fileName = file.name.replace('.xml', '');
    var reader = new FileReader();

    reader.onload = function (e) {

        var contents = e.target.result;

        // Creating new tab

        let tabs = document.getElementById('myTab');

        let fragment = document.createDocumentFragment();
        let newTab = document.createElement('li');
        let tabButton = document.createElement('button');

        tabButton.setAttribute('class', 'nav-link');
        tabButton.setAttribute('id', fileName + 'tab');
        tabButton.setAttribute('data-bs-target', '#'+fileName);
        tabButton.setAttribute('role', 'tab');
        tabButton.setAttribute('type', 'button');
        tabButton.setAttribute('data-bs-toggle', 'tab');
        tabButton.setAttribute('onclick', `getTabName(event)`)

        newTab.setAttribute('class', 'nav-item');

        tabButton.innerHTML = fileName;
        newTab.appendChild(tabButton);
        fragment.appendChild(newTab);
        tabs.appendChild(fragment);

        // Creating new pane

        let paneContent = document.getElementById('myTabContent');
        let pane = document.createElement('div');
        let newEditor = document.createElement('TEXTAREA');
        let newFragment = document.createDocumentFragment();

        pane.setAttribute('class', 'tab-pane fade');
        pane.setAttribute('id', fileName);
        pane.setAttribute('role', 'tabpanel');
        pane.setAttribute('aria-labelledby', fileName);

        newEditor.setAttribute('id', fileName+'-editor');
        newEditor.setAttribute('class', fileName + '-editor');

        pane.appendChild(newEditor);
        newFragment.appendChild(pane);
        paneContent.appendChild(newFragment);

        newEditor.value = contents;
        generateEditor();
    };
    reader.readAsText(file);
}

function generateEditor() {
    let newEditor = CodeMirror.fromTextArea(document.getElementById(fileName + "-editor"), config);
    newEditor.setSize("550", "311");
}

function getTabName() {

    if(editorSelected != 'editor') editorSelected = editorSelected + '-editor';
}


function parse() {
    console.log(editorSelected);
    let editor = document.getElementsByClassName(editorSelected);
    console.log(editor[0].value);
}

function saveFile() {
    let editor = document.getElementById(editorSelected);
    console.log(editor);
    let contents = editor.value;
    var blob = new Blob([contents], { type: "text/plain;charset=utf-8" });
    saveAs(blob, editorSelected + '.xml');
}


function download() {
    let editor = document.getElementById(editorSelected);
    let contents = editor.value;
    var file = new Blob([contents], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, editorSelected);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = editorSelected;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
