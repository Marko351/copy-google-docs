 function undo(){
     document.execCommand('undo', false, null);
 }

 function redo(){
    document.execCommand('redo', false, null);
}

const print = () => {
    window.print();
}

function bold(){
    document.execCommand('bold', false, null);
}

function italic(){
    document.execCommand('italic', false, null);
}

function underline(){
    document.execCommand('underline', false, null);
}

function changeFontFamily(){
    var value = document.getElementById('font-family').value;
    document.execCommand('fontName', false, value);
}

function alignLeft(){
    document.execCommand('justifyLeft',false, null);
}

function alignCenter(){
    document.execCommand('justifyCenter',false, null);
}

function alignRight(){
    document.execCommand('justifyRight',false, null);
}

const changeFontSize = () => {
    const value = document.getElementById('font-size').value;
    document.execCommand('fontSize', false, value);
}

const changeTextColor = () => {
    const color = document.getElementById('text-color').value;
    document.execCommand('foreColor', false, color);
}

const indent = () => {
    document.execCommand('indent', false, null);
}

const outdent = () => {
    document.execCommand('outdent', false, null);
}

const changeHighlightingColor = () => {
    const color = document.getElementById('highlighting-color').value;
    document.execCommand('hiliteColor', false, color);
}

const insertOrderedList = () => {
    document.execCommand('insertOrderedList', false, null);
}

const insertUnorderedList = () => {
    document.execCommand('insertUnorderedList', false, null);
}