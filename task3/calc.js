function Solve(val) {
    var v=document.getElementById ('r');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById ('r').value
    try{
        var num2= eval(num1.replace ('x','*'));
        document.getElementById('r').value = num2;
    }
    catch{
        document.getElementById ('r').value = 'Error';
    }
}
function Clear(){
    var ip =document.getElementById('r');
    ip.value='';
}
function Back(){
    var bck =document.getElementById('r');
    bck.value= bck.value.slice(0,-1);
}
document.getElementById('r').addEventListener('keydown', function(event) {
    const key=event.key;
    const validKeys='0123456789+-*.%/';
    if (validKeys.includes(key)) {
        Solve(key==='*'?'x': key);
} else if (key==='Enter'){
    Result();
} else if (key==='DEL'){
    Back();
} else if(key.toLowerCase() ==='AC'){
    Clear();
}
});