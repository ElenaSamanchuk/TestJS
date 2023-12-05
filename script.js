let btn = document.querySelector('#btn');
let answers = document.querySelector('#right_answers');

btn.addEventListener('click', () => {
    let fio = document.querySelector('#fio').value;
    let group = document.querySelector('#group').value;
    let count = 0;
    if (document.getElementById('1.1').checked) {
        count++;
    }

    if (document.getElementById('2.1').checked 
        && !document.getElementById('2.2').checked 
        && document.getElementById('2.3').checked
        && !document.getElementById('2.4').checked) {
        count++;
    }

    if (document.getElementById('3.1').value == 0 
        && document.getElementById('3.2').value == 1) {
        count++;
    }

    if (document.getElementById('4.1').value == 'br') {
        count++;
    }

    answers.innerHTML = fio + ' ' + group + ', ' + count + ' правильных ответов';
})

