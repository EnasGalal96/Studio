let counter = 0
function incCounter(){
    counter++
    if(counter==500){
        clearInterval(x)
    }
    document.getElementById("num1").innerHTML =counter
    document.getElementById("num2").innerHTML =counter
    document.getElementById("num3").innerHTML =counter
    document.getElementById("num4").innerHTML =counter
    document.getElementById("num5").innerHTML =counter
    document.getElementById("num6").innerHTML =counter
    document.getElementById("num7").innerHTML =counter
    document.getElementById("num8").innerHTML =counter
}
var x = setInterval(incCounter ,5)