const controls={
undo() {
     document.execCommand('undo', false, null);
},
redo() {
    document.execCommand('redo', false, null);
},
print() {
    window.print();
},
deleteHandler() {
    document.execCommand('delete', false, null)
},
cutHandler() {
    document.execCommand('cut', false, null);
},
copyHandler() {
    document.execCommand('copy', false, null);
},
striketrought() {
    document.execCommand('strikeThrough', false, null); 
},
selectedAll() {
    document.execCommand('selectAll', false, null);
},
subscript() {
    document.execCommand('subscript', false, null)
},
superscript() {
    document.execCommand('superscript', false, null)
},
insertLine() {
    document.execCommand('insertHorizontalRule', false, null);
},
bold() {
    document.execCommand('bold', false, null);
},
italic() {
    document.execCommand('italic', false, null);
},
underline() {
    document.execCommand('underline', false, null);
},
changeFontFamily() {
    var value = document.getElementById('font-family').value;
    document.execCommand('fontName', false, value);
},
alignLeft() {
    document.execCommand('justifyLeft',false, null);
},
alignCenter() {
    document.execCommand('justifyCenter',false, null);
},
alignRight() {
    document.execCommand('justifyRight',false, null);
},
alignJustify() {
    document.execCommand('justifyFull', false, null);
},
insertTable(){
    document.execCommand('enableInlineTableEditing', false, null);
},
changeFontSize() {
    const value = document.getElementById('font-size').value;
    document.execCommand('fontSize', false, value);
},
changeTextColor() {
    const color = document.getElementById('text-color').value;
    document.execCommand('foreColor', false, color);
},
indent() {
    document.execCommand('indent', false, null);
},
outdent() {
    document.execCommand('outdent', false, null);
},
changeHighlightingColor() {
    const color = document.getElementById('highlighting-color').value;
    document.execCommand('hiliteColor', false, color);
},
insertOrderedList() {
    document.execCommand('insertOrderedList', false, null);
},
insertUnorderedList() {
    document.execCommand('insertUnorderedList', false, null);
},
zoom() {
    let zoom = document.getElementById('zoom').value;
    let writingArea = document.getElementById('writing-area');
    if(zoom){
        zoom = zoom / 100;
    }

    writingArea.style.transform = `scale(${zoom})`;
    if(zoom > 1){
        writingArea.style.transformOrigin = `top left`;
    }else{
        writingArea.style.transformOrigin = `center`;
    }
},
insertLink() {
    let link = document.getElementById('link').value;
    document.execCommand('createLink', false, link);
    editableFalse();
},
unlink(){
    document.execCommand('unlink', false, null);
},
editableFalse() {
    let a = document.getElementsByTagName('a');
    for(let i = 0; i<a.length; i++){
        a[i].setAttribute("contenteditable", false);    
    }
},
insertImage() {
    let linkImage = document.getElementById('linkImage').value;
    document.execCommand('insertImage', false, linkImage);
},
lineSpacing() {
    const lineSpace = document.getElementById('lineSpacing').value;
    const writingArea = document.getElementById('writing-area');
    writingArea.style.lineHeight = lineSpace;
},
save() {
    const savingContent = document.getElementById('writing-area').innerHTML;
    localStorage.setItem('myItems', savingContent);
}
}

const getContent = () => {
    document.getElementById('writing-area').innerHTML = localStorage.getItem('myItems');
}





