const button1 = document.getElementById('add-element');
button1.addEventListener('click',() =>{
    elements.innerHTML=
    `<div class="element">
        <h3>Element 4</h3>
        <h4>This is an element</h4>
        <button>Delete</button>
    </div>

    `;
    const button2 = document.getElementsByTagName('button')[1];
    button2.addEventListener('click',() =>{
    const div2 = document.getElementsByClassName('element')[0];
    div2.innerHTML='';
    })
})

