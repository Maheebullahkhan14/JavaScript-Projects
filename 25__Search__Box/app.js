function search(){

const input = document.getElementById('search').value.toUpperCase()
console.log(input)
let ul = document.getElementById('list')
let li = ul.getElementsByTagName('li')

for(let i = 0 ; i<li.length ; i++){
    let a = li[i].getElementsByTagName('a')[0]
    let textvalue = a.textContent

    if(textvalue.toUpperCase().indexOf(input) > -1){
        li[i].style.display =''
    }
    else{
        li[i].style.display ='none'
    }
}
}