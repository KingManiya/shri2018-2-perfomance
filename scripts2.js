const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');

rangeSLider.oninput = function() {
    output.innerHTML = this.value > 0 ? '+' + this.value : this.value;
}

const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');

arrowRightDevs.addEventListener('click', function () {
    const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', false);
    document.querySelector('.devices').scroll({
        top: 0,
        left: 1366,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.modal_close').forEach(b => {
    b.onclick = function() {
        document.querySelectorAll('.modal').forEach(m => {
            m.classList.toggle('modal_open', false);
            document.querySelector('body').style.overflow = 'auto';
        });
    }
});

const showModal = function(selector) {
    document.querySelector(selector).classList.toggle('modal_open', true);
    document.querySelector('body').style.overflow = 'hidden';
}

document.querySelectorAll('.panel_temp').forEach(p => {
    p.onclick = function() {
        showModal('.modal_temp');
    }
});

document.querySelectorAll('.panel_lamp').forEach(p => {
    p.onclick = function() {
        showModal('.modal_light');
    }
});

document.querySelectorAll('.panel_floor').forEach(p => {
    p.onclick = function() {
        showModal('.modal_knob');
    }
});

const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
let currentPage = 1;


arrowRightScens.addEventListener('click', function () {
    if (currentPage < pageCountScens) {
        currentPage += 1;
        arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
        arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
        scenarios.scroll({
            top: 0,
            left: 645,
            behavior: 'smooth'
        });
    }
});

arrowLeftScens.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage -= 1;
        arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
        arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
        scenarios.scroll({
            top: 0,
            left: -645,
            behavior: 'smooth'
        });
    }
});