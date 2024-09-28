const diceImg = [
    'imgs/dice1.png',
    'imgs/dice2.png',
    'imgs/dice3.png',
    'imgs/dice4.png',
    'imgs/dice5.png',
    'imgs/dice6.png'
]
const btn = document.querySelector('button')
let img = document.querySelector('#rollDice');
let index = 0;


btn.addEventListener('click', () => {
    btn.disabled = true;
    let li = document.createElement('li');
    let dice = parseInt(Math.random() * 6) + 1;
    index++;
    img.classList.add('animate-dice');

    img.addEventListener('animationend', () =>{
        img.classList.remove('animate-dice');
        for (let i = 1; i <= diceImg.length; i++) {
            if (i === dice) {
                img.src = diceImg[i - 1];
                li.innerHTML = `Roll ${index}: <img src="${diceImg[i - 1]}" alt="dice" id="li-dice">`;
                document.querySelector('ul').appendChild(li);
            }
        }
    }, {once: true});

    setTimeout(()=>{
        btn.disabled = false;
    },1000);
    
});