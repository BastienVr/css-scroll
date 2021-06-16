let button = document.querySelector('.button');

button.addEventListener('click', function() {
    
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });

    
});

let button2 = document.querySelector('.final-button');

    button2.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });


    });

let button3 = document.querySelector('.scroll-to-top');

    button3.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    });


let body = document.querySelector('body')    
window.addEventListener('scroll', function() {
    if(window.pageYOffset === 0) {
       button3.style.display = "none";
    }
      
    else {
        button3.style.display = "block";   
    }

    
    
})

