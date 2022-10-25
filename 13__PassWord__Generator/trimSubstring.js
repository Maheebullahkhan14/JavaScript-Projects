function truncate(str, num){
    if (str.length > num){
        let substr = str.substring(0,num);
        return substr ;
    }else {
        return  str
    }
}

str1 = 'khanMaheebullah'
num = 25
console.log(truncate(str1,num))