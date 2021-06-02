const select = document.getElementsByTagName('select')[0];
select.addEventListener('change',checkOptions);
submit.classList.remove('disabled');
submit.addEventListener('click',changeColor);


function checkOptions() {
    for (var i = 0; i < select.length; i++) {
        if (select.options[i].selected === true){
                if (select.options[i].value != "")
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
    for (var i = 0; i < select.length; i++)
    {
        if (select.options[i].selected === true)
        {
            if(select.options[i].value === "red")
            {
            document.body.classList.add('red');
            }
            if(select.options[i].value === "green")
            {
            document.body.classList.add('green');
            }
            if(select.options[i].value === "blue")
            {
            document.body.classList.add('blue');
            }
            if(select.options[i].value === "purple")
            {
            document.body.classList.add('purple');
            }
            
        }
    }
    
}

