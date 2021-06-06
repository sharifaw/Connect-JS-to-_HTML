const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

value1.addEventListener("input",checkNumber);
value2.addEventListener("input",checkNumber);


function zeroValue(input){
    if(input.value === ""){
        input.value=0;
    }
}

function checkNumber(input){
    
if(isNaN(input.target.value)){
    alert("Value X must be a number");
}
}

function assignment(){
    for (var index = 0; index <select.length; index++){
        if(select.options[index].selected == true){
            if(select.options[index].value == "+"){
                return result.value = +(value1.value) + +(value2.value) ;
            }
            if(select.options[index].value == "/"){
                return result.value = +(value1.value) / +(value2.value) ;
            }
            if(select.options[index].value == "-"){
                return result.value = +(value1.value) - +(value2.value) ;
            }
            if(select.options[index].value == "*"){
                return result.value = +(value1.value) * +(value2.value) ;
            }
        }
    }
        
}
 
button.onclick = function(){
    zeroValue(value1);
    zeroValue(value2);
     assignment();
}

