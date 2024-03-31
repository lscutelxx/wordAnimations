let word = document.querySelector('.word')

function showSmoothly(elem) {
    const keyframes = [
        { 
            opacity: 0,
            transform: "translateY(-50px)"
        },
        { 
            opacity: 1,
            transform: "translateY(0px)"
        }
    ];
    
    const options = 2000;
    
    elem.animate(keyframes, options)
}

showSmoothly(word)