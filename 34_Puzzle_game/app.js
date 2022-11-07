var row = 5;
var column = 5;

var currTile
var otherTile

var turns = 0;


window.onload = function(){
    for(let i = 0 ; i< row ; i++){
    for(let j = 0 ; j < column ; j++ ){
        let tile = document.createElement('img')
        tile.src = './images/blank2.jpg'
        
        tile.addEventListener('dragstart' ,dragStart)
        tile.addEventListener('dragover' ,dragOver)
        tile.addEventListener('dragenter' ,dragEnter)
        tile.addEventListener('dragleave' ,dragLeave)
        tile.addEventListener('drop' ,dragDrop)
        tile.addEventListener('dragend' ,dragEnd)

        document.getElementById('board').append(tile)
        console.log(i,j)
    }
    
}
    // Making the array of 25 and then placing the images
    let pieces = []
    for(let k = 1 ; k <= row*column ; k++){
        pieces.push(k.toString())
    
    }
    pieces.reverse()
    // For Swapping the Images
    for ( let y = 0 ; y < pieces.length ; y++){
        let random = Math.floor(Math.random() * pieces.length)
            let temp = pieces[y]
            pieces[y] = pieces[random]
            pieces[random] = temp   
    }

    // For placing Images into div
    for(let x = 0 ; x < pieces.length ; x++){
        let tile = document.createElement('img')
        tile.src = './images/' + pieces[x] +'.jpg' 
        


        tile.addEventListener('dragstart' ,dragStart)
        tile.addEventListener('dragover' ,dragOver)
        tile.addEventListener('dragenter' ,dragEnter)
        tile.addEventListener('dragleave' ,dragLeave)
        tile.addEventListener('drop' ,dragDrop)
        tile.addEventListener('dragend' ,dragEnd)

        document.getElementById('board2').append(tile)
    }
}

function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
    
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}