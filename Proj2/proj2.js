//variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');


//EventListeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});


//this function will allow the modal to close from anywhere we click on page, callback function is executed.
window.addEventListener('click', function(e){
    
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }

});

/* Key Concept for this project are: -
1. document.getElementById()
2. addEventListener()
3. e.target
4. CSS Styling Through JavaScript
5. CSS Animation through JavaScript. */