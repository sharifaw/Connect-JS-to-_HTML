const button1 = document.getElementById('add-element');
const elements = document.getElementById('elements');
let index = 0;
let elementNumber = 0;
const button2 = document.getElementsByClassName('button2')[index-1];

button1.addEventListener('click',() =>{
    index++;
    elements.insertAdjacentHTML("beforeend",
    `<div class="element">
        <h3 >Element ${index}</h3>
        <h4>This is an element</h4>
        <button class="button2">Delete</button>
    </div>

    `);
    
})


    elements.addEventListener('click',(event) =>{
    console.log(event.target.tagName)
        if(event.target.tagName == "BUTTON"){
        event.target.parentElement.remove();
    };
    
    })