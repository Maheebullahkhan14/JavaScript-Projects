const AddEl = document.getElementById('addnote')
const titleEl = document.getElementById('title')
const textareaEl = document.getElementById('textbox')
const notesDiv = document.getElementById('notes')

let notes = []
function addNotes (){
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notes = []
    }else{
        notes = JSON.parse(notes)
    }
    if(textareaEl.value === ''){
        alert('plz enter note')
        return
    }
    const noteobj ={
        title : titleEl.value,
        text : textareaEl.value
    }
    notes.push(noteobj)
    
    titleEl.value = ''
    textareaEl.value = ''
    localStorage.setItem('notes' , JSON.stringify(notes))
    showNote()
}



function showNote(){
    let notesHTML = ''
    let notes = localStorage.getItem('notes')
    if(notes == null){
        return
    }else{
        notes = JSON.parse(notes)
    }
    for(let i=0; i<notes.length; i++){
        notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</span>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML
}
function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNote();
}
AddEl.addEventListener('click', addNotes);
