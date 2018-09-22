 const undo = () => {
     document.execCommand('undo', false, null);
 }

 const redo = () => {
    document.execCommand('redo', false, null);
}

const print = () => {
    window.print();
}

const deleteHandler = () => {
    document.execCommand('delete', false, null)
}

const cutHandler = () => {
    document.execCommand('cut', false, null);
}

const copyHandler = () => {
    document.execCommand('copy', false, null);
}

const striketrought = () => {
    document.execCommand('strikeThrough', false, null); 
}

const selectedAll = () => {
    document.execCommand('selectAll', false, null);
}

const bold = () => {
    document.execCommand('bold', false, null);
}

const italic = () => {
    document.execCommand('italic', false, null);
}

const underline = () => {
    document.execCommand('underline', false, null);
}

const changeFontFamily = () => {
    var value = document.getElementById('font-family').value;
    document.execCommand('fontName', false, value);
}

const alignLeft = () => {
    document.execCommand('justifyLeft',false, null);
}

const alignCenter = () => {
    document.execCommand('justifyCenter',false, null);
}

const alignRight = () => {
    document.execCommand('justifyRight',false, null);
}

const alignJustify = () => {
    document.execCommand('justifyFull', false, null);
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

const zoom = () => {
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
    

}

const insertLink = () => {
    let link = document.getElementById('link').value;
    document.execCommand('createLink', false, link);
    editableFalse();
}

const editableFalse = () => {
    let a = document.getElementsByTagName('a');
    for(let i = 0; i<a.length; i++){
        a[i].setAttribute("contenteditable", false);    
    }
}

const insertImage = () => {
    let linkImage = document.getElementById('linkImage').value;
    document.execCommand('insertImage', false, linkImage);
}