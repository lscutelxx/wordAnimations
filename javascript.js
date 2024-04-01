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

/* showSmoothly(word) */


let container = document.querySelector('.wrap');
let arrayLetters = word.innerText.split('');
console.log(arrayLetters)

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
console.log(arrayLettersHtml)

let timing = 0;
/* arrayLettersHtml.forEach((letterTag) => {
    console.log(letterTag);
    const keyframes = new KeyframeEffect(
        letterTag,
        [
            { 
                opacity: 0,
                transform: "translateY(-50px)"
            },
            { 
                opacity: 1,
                transform: "translateY(0px)"
            }
        ],
        {
            duration: 2000,
            delay: timing
        }
    );
    const animation = new Animation(
        keyframes,
        document.timeline,
    );
    animation.play();
    timing += 1000;
}) */