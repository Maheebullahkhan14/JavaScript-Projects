const dob = document.getElementById('dob')
var e = new Date();
var o = e.toISOString();
var t = o.split("T")
document.getElementById('bd').value = t[0];


function cal(){
    if (dob.value == "") {
        alert("Please Input Date Of Birth");
    } else if (dob.value > bd.value) {
        alert("Please Enter a Valid Date");
    } else {

    document.getElementById('output').style.display ='block'
    
    var a = new Date(bd.value)
    var b = new Date(dob.value)
    var r = a.getTime() - b.getTime()
    var u = new Date(r);
    var v = new Date(0);
   
    var year = u.getFullYear() - v.getFullYear();
    var month = u.getMonth() - v.getMonth();
    var day = u.getDate() - v.getDate();
    
    document.getElementById('years').innerHTML = year + " Years ," + month + " Months ," + day + " Days .";

    document.getElementById('months').innerHTML = m + " Months, " + day + " Days .";

    document.getElementById('week').innerHTML = w + " Weeks, " + day + " Days ."

    document.getElementById('days').innerHTML = d + " Days."

    document.getElementById('hours').innerHTML = h + " Hours."

    var m = (year * 12 )+ month
    var w = (m * 4.345)
    w = Math.round(w)

    var d = (w*7)+ day
    var h = d*24

    var min = h * 60

    var s = min * 60
    

    // let dobweek = dobdate.get


    
}
}
btn.addEventListener('click' ,cal)