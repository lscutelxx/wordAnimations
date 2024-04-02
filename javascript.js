let word = document.querySelector('.word')

/* function showSmoothly(elem) {
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

showSmoothly(word) */

///////////////Разбиваем слово на буквы
let container = document.querySelector('.wrap');
let arrayLetters = word.innerText.split('');

container.innerHTML = '';

function insertLetter() {
    arrayLetters.forEach(letter => {
        let wrapForLetter = document.createElement('span');
        wrapForLetter.classList = 'letter';
        wrapForLetter.textContent = letter;
        container.appendChild(wrapForLetter)
    })
}
insertLetter()

let arrayLettersHtml = document.querySelectorAll('.letter');

//////////////Анимация
let timing = 0;
arrayLettersHtml.forEach(letterTag => letterTag.style.opacity = 0);

arrayLettersHtml.forEach((letterTag) => {
    console.log(letterTag);
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
    const options = {
        duration: 1500,
        delay: timing
    };
    
    letterTag.animate(keyframes, options);
    letterTag.animate(keyframes, options).onfinish = (event) => {
        letterTag.style.opacity = 1;
        letterTag.style.transform = 'translateY(0px)'
    };
    timing += 500;

})
