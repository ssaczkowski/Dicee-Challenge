var randomNumber1 = Math.ceil(Math.random() * 6);
var newSourceImageDice1 = 'images/dice' + randomNumber1 + '.png';
document.querySelector('img.img1').setAttribute('src',newSourceImageDice1)

var randomNumber2 = Math.ceil(Math.random() * 6);
var newSourceImageDice2 = 'images/dice' + randomNumber2 + '.png';
document.querySelector('img.img2').setAttribute('src',newSourceImageDice2)


if (randomNumber1 > randomNumber2)
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!'
else if (randomNumber1 < randomNumber2)
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩'
else
    document.querySelector('h1').innerHTML = 'Draw!'
