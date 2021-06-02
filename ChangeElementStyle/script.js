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
    event.preventDefault();
    for (var index = 0; index < select.length; index++)
    {
        if (select.options[index].selected === true)
        {
            if(select.options[index].value === "red")
            {
            document.body.classList.add('red');
            }
            if(select.options[index].value === "green")
            {
            document.body.classList.add('green');
            }
            if(select.options[index].value === "blue")
            {
            document.body.classList.add('blue');
            }
            if(select.options[index].value === "purple")
            {
            document.body.classList.add('purple');
            }
            
        }
    }
    
}

