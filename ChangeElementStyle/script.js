const select = document.getElementsByTagName('select')[0];
select.addEventListener('change',checkOptions);

submit.addEventListener('click',changeColor);


function checkOptions() {
    for (var index = 0; index < select.length; index++) {
        if (select.options[index].selected === true){
                if (select.options[index].value != "")
                {
                    
                    submit.classList.remove('disabled');
                }
                else
                {
                    submit.classList.add('disabled');
                }
        }
    }
}



function changeColor(event)
{
    const content = document.getElementById('content');
    event.preventDefault();

    // another solution
    // if (select.value !== ""){
    //     content.classList.add(`${select.value}`);
    // }

    // for (var index = 0; index < select.length; index++)
    // {
    //     if (select.options[index].selected === true)
    //     {
    //         if(select.options[index].value === "red")
    //         {
            
    //            content.classList.add('red');
    //         }
    //         if(select.options[index].value === "green")
    //         {
    //             content.classList.add('green');
    //         }
    //         if(select.options[index].value === "blue")
    //         {
    //             content.classList.add('blue');
    //         }
    //         if(select.options[index].value === "purple")
    //         {
    //             content.classList.add('purple');

    //         }
            
    //     }
    // }
    
}

