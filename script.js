const writingArea = document.querySelector('#writing-area');

const controls={
undo() {
     document.execCommand('undo', false, null);
    returnFocus();
},
redo() {
    document.execCommand('redo', false, null);
    returnFocus();
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
    returnFocus();
},
alignCenter() {
    document.execCommand('justifyCenter',false, null);
    returnFocus();
},
alignRight() {
    document.execCommand('justifyRight',false, null);
    returnFocus();
},
alignJustify() {
    document.execCommand('justifyFull', false, null);
    returnFocus();
},
insertTable(){
    document.execCommand('enableInlineTableEditing', false, null);
},
changeFontSize() {
    const value = document.getElementById('font-size').value;
    const selectedRange = document.getSelection().getRangeAt(0);

    const span = document.createElement("span");
    span.style.fontSize = `${value}px`;

    let startingNode = selectedRange.startContainer;
    let startIndex = selectedRange.startOffset;
    let endingNode = selectedRange.endContainer;
    let endIndex = selectedRange.endOffset;
    let nodes = [];

    let string = '';
    if(startingNode.parentNode.parentNode.id === 'writing-area' && 
       endingNode.parentNode.parentNode.id === 'writing-area'){
        string = startingNode.textContent.slice(startIndex, endIndex)
        let span = document.createElement("span");
        span.innerHTML = string;
        span.style.fontSize = `${value}px`;
        console.log(span)
    }

    let startingString = '';
    let endingString = '';
    if(startingNode.parentNode !== endingNode.parentNode){
        startingString = startingNode.textContent.slice(startIndex);
        endingString = endingNode.textContent.slice(0, endIndex)
    }

    console.log(string)
    console.log(startingString);
    console.log(endingString);
    console.log(selectedRange)  


    // var sel = window.getSelection();
    // var range = sel.getRangeAt(0);
    // sel.removeAllRanges();
    // range.surroundContents(span);
    // sel.addRange(range);
    
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
    const words = text.match(/[a-z]+/gi);
    const character = text.match(/[^a-z0-9]/gi);
    const characterWithoutSpace = text.match(/[^a-z0-9 ]/gi);

    alert(`Words ${words.length}
Character ${character.length}
Characters excluding spaces ${characterWithoutSpace.length}`)
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
    
    extractNodes().forEach(node => node.style.lineHeight = lineSpace)

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
paintFormat(){
    let selection = document.getSelection().getRangeAt(0);
    selection.style.fontSize = '34px';
},
getContent() {
    writingArea.innerHTML = localStorage.getItem('myItems');
    // writingArea.style.fontSize = `14px`;
    // writingArea.style.fontFamily = `Arial`;
}

}

const utilFunctions = {
    editableFalse() {
        let a = document.getElementsByTagName('a');
        for(let i = 0; i<a.length; i++){
            a[i].setAttribute("contenteditable", false);    
        }
    },
    setCarotTo(contentEditableElement, position) {
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

function extractNodes(){
    const startingNode = document.getSelection().anchorNode.parentNode;
    const endingNode = document.getSelection().focusNode.parentNode;
    const nodes = [];

    addNodes(endingNode, nodes)

    let mainEndingNode = nodes.filter(node => node.parentNode.id === 'writing-area');

    addNodes(startingNode, nodes, mainEndingNode[0])  

    console.log(nodes);
    return nodes;
}

function addNodes(node, nodes, endingNode){

    if(node.parentNode.id === 'writing-area'){
        // console.log(node.parentNode.nodeName)

        addChildren(node, nodes);

        nodes.push(node);

        let nodesOfMainDiv = node.parentNode.children;

        if(endingNode && node !== endingNode){
            for(let i = 0; i<nodesOfMainDiv.length; i++){
                if(nodesOfMainDiv[i] === node){
                    addNextSibling(node, endingNode, nodes);
                    break;
                }

                if(nodesOfMainDiv[i] === endingNode){
                    addPreviousSibling(node, endingNode, nodes);
                    break;
                }
            }
        }

    }else{
        addNodes(node.parentNode, nodes, endingNode);
    }
}

function addChildren(node, nodes){
    if(node.children.length > 0){
        for(let i = 0; i<node.children.length; i++){
            nodes.push(node.children[i])
            addChildren(node.children[i], nodes);
        }
    }
}


function addNextSibling(startingNode, endingNode, nodes){
    if(startingNode.nextSibling && endingNode !== startingNode && startingNode.nextSibling !== endingNode){
        addChildren(startingNode.nextSibling, nodes);

        nodes.push(startingNode.nextSibling);

        addNextSibling(startingNode.nextSibling, endingNode, nodes);
    }
    
}

function addPreviousSibling(startingNode, endingNode, nodes){
    if(startingNode.previousSibling && startingNode !== endingNode && startingNode.previousSibling !== endingNode){
        addChildren(startingNode.previousSibling, nodes);
        
        nodes.push(startingNode.previousSibling)

        addPreviousSibling(startingNode.previousSibling, endingNode, nodes);
    }
}

function returnFocus(){
    writingArea.focus();
}
 












