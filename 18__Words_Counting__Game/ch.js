var str1 ="My name      is John Smith "
var str2 = str1.replace(/\s+/g,' ').trim()

var arr1 = str2.split(' ')
var ar2 = arr1.join('')
console.log(ar2)