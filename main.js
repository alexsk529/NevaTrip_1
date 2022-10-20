
let time = document.getElementsByClassName('container__time')

let arrayMore =[];
let btn = document.createElement('button');
btn.innerHTML = 'ещё...';
btn.setAttribute('class', 'time button-more');

for (let elem of time) {
    let timeElem = elem.getElementsByClassName('time');
    if (timeElem.length > 4) arrayMore.push(elem)
}

for (let elem of arrayMore) {
    let timeElem = elem.getElementsByClassName('time');
    for (let i = 3; i < timeElem.length; i++) {
        timeElem[i].classList.add('time_hidden', 'time_more')
    }
    elem.appendChild(btn);
}

let btns = document.getElementsByClassName('button-more')

for (let btn of btns) {

    btn.addEventListener('click', function () {
        this.parentNode.nextSibling.nextSibling.classList.toggle('footer_hidden');
        for (let elem of this.parentNode.getElementsByClassName('time_more')) {
            elem.classList.toggle('time_hidden');
        }
        if (this.innerHTML === 'ещё...') this.innerHTML = 'скрыть';
        else this.innerHTML ='ещё...';
    });
}