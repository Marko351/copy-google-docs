const writingArea = document.querySelector('#writing-area');

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
    function selectElementContents(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
    
    selectElementContents(writingArea);
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
plainPaste() {
    
},
paste: function(e){
    alert('For paste press Ctrl + V')
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
    writingArea.style.fontFamily = `${value}`;
    // document.execCommand('fontName', false, value);
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
    const span = document.createElement("span");
    span.style.fontSize = `${value}px`;
    
    var sel = window.getSelection();
    var range = sel.getRangeAt(0).cloneRange();
    sel.removeAllRanges();
    range.surroundContents(span);
    sel.addRange(range);
},
increaseFontSize(){
    const span = document.createElement("span");
    
    let sel = window.getSelection();
    let range = sel.getRangeAt(0).cloneRange();
    range.surroundContents(span);
    span.style.fontSize  = parseInt(span.parentElement.style.fontSize) + 2 + 'px';
    sel.removeAllRanges();
    sel.addRange(range);

},
decreaseFontSize(){
    const span = document.createElement("span");
    
    let sel = window.getSelection();
    let range = sel.getRangeAt(0).cloneRange();
    range.surroundContents(span);
    span.style.fontSize  = parseInt(span.parentElement.style.fontSize) - 2 + 'px';
    sel.removeAllRanges();
    sel.addRange(range);

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
wordCount(){
    const text = writingArea.textContent;
    const arrayOfWords = text.split(' ');
    let count = 0

    for(var i = count; i<arrayOfWords.length; i++){
        if(arrayOfWords[i].trim().length !== 0){
            count++
        }
    }

    alert('You have '+ count + ' words in paper.')
},
insertOrderedList() {
    document.execCommand('insertOrderedList', false, null);
},
insertUnorderedList() {
    document.execCommand('insertUnorderedList', false, null);
},
zoom() {
    let zoom = document.getElementById('zoom').value;
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
    utilFunctions.editableFalse();
},
unlink(){
    document.execCommand('unlink', false, false);
},
insertImage() {
    let linkImage = document.getElementById('linkImage').value;
    document.execCommand('insertImage', false, linkImage);
},
lineSpacing() {
    const lineSpace = document.getElementById('lineSpacing').value;
    writingArea.style.lineHeight = lineSpace;
},
save() {
    const savingContent = writingArea.innerHTML;
    localStorage.setItem('myItems', savingContent);
},
insertTable() {
    const numOfRow = document.querySelector('#numOfRow').value;
    const numOfCell = document.querySelector('#numOfCell').value;
    const table = document.createElement('table');
    table.style.border = '1px solid red';

    let cells = [];
    
    for(var j = 0; j<parseInt(numOfRow); j++){ 
    
        var row = table.insertRow(table.rows.length);
    
    	for(var k = 0; k<parseInt(numOfCell); k++){
    		cells.push(row.insertCell(k));
    	}
    
    	for(var i = 0; i<cells.length; i++){
            // cells[i].innerHTML = "cell";
            cells[i].setAttribute('contenteditable', true)
            cells[i].style.border = '1px solid black';
            cells[i].style.width = '50px';
            cells[i].style.height = '25px';
    	}
    
    }
    
    writingArea.appendChild(table);
},
getContent() {
    writingArea.innerHTML = localStorage.getItem('myItems');
    writingArea.style.fontSize = `14px`;
    writingArea.style.fontFamily = `Arial`;
}

}

const utilFunctions = {
    editableFalse() {
        let a = document.getElementsByTagName('a');
        for(let i = 0; i<a.length; i++){
            a[i].setAttribute("contenteditable", false);    
        }
    },
    setCaratTo(contentEditableElement, position) {
        var range,selection;
        if(document.createRange) {
            range = document.createRange();
            range.selectNodeContents(contentEditableElement);
                    
            range.setStart(contentEditableElement.firstChild, position);
            console.log(contentEditableElement)
            range.setEnd(contentEditableElement.firstChild, position)
                    
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

let countSpace = 0;

writingArea.addEventListener('keyup', function(e) {
    if(countSpace < 1){
        if(e.which === 32){
            let string = writingArea.textContent;
            writingArea.innerText = string.charAt(0).toUpperCase() + string.slice(1);

            utilFunctions.setCaratTo(writingArea, writingArea.textContent.length)
            countSpace++;        
        }
    }
    
})
 












