value1.addEventListener("input",checkNumber);
value2.addEventListener("input",checkNumber);
if(value1.value === ""){
    value1.value=0;
}
if(value2.value === ""){
    value2.value=0;
}

function checkNumber(){
if(isNaN(value1.value) || isNaN(value2.value)){
    alert("Value X must be a number");
}
}

function assignment(){
    
    for (var i = 0; i <select.length; i++){
        if(select.options[i].selected == true){
            if(select.options[i].value == "+"){
                return result.value = +(value1.value) + +(value2.value) ;
            }
            if(select.options[i].value == "/"){
                return result.value = +(value1.value) / +(value2.value) ;
            }
            if(select.options[i].value == "-"){
                return result.value = +(value1.value) - +(value2.value) ;
            }
            if(select.options[i].value == "*"){
                return result.value = +(value1.value) * +(value2.value) ;
            }
        }
    }
}
 
button.onclick = function(){

     assignment();
}

