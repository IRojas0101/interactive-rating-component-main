const butttomSubmit = document.querySelector('.buttom-submit');
const container1 = document.querySelector('fom-container1')
const container2 = document.querySelector('fom-container2')

const buttomOne = document.querySelector('#btn1');
const buttomtwo = document.querySelector('#btn2');
const buttomthree = document.querySelector('#btn3');
const buttomfour = document.querySelector('#btn4');
const buttomfive = document.querySelector('#btn5');



butttomSubmit.addEventListener('click', fom1);

container1.classList.toggle('inactive');



function modifyText(new_text) {
    const selecNumber = document.querySelector('strong');
    selecNumber.firstChild.nodeValue = new_text;
}

buttomOne.addEventListener('click', () => {modifyText(buttomOne.innerHTML);});
buttomtwo.addEventListener('click', () => {modifyText(buttomtwo.innerHTML);});
buttomthree.addEventListener('click', () => {modifyText(buttomthree.innerHTML);});
buttomfour.addEventListener('click', () => {modifyText(buttomfour.innerHTML);});
buttomfive.addEventListener('click', () => {modifyText(buttomfive.innerHTML);});
