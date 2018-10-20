const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');

rangeSLider.oninput = function() {
    output.innerHTML = this.value > 0 ? '+' + this.value : this.value;
}

const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');
const devices = document.querySelector('.devices');
let currentPageDevs = 1;

arrowRightDevs.addEventListener('click', function () {
    currentPageDevs += 1;
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
    devices.scroll({
        top: 0,
        left: 1366,
        behavior: 'smooth'
    });
});

arrowLeftDevs.addEventListener('click', function () {
    if (currentPageDevs > 1) {
        currentPageDevs -= 1;
        arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
        devices.scroll({
            top: 0,
            left: -1366,
            behavior: 'smooth'
        });
    }
});

let curValue;
let curRotate;
let maxRotate = 0.42; // 150 градусов
let minRotate = -0.42; // -150 градусов

const MIN_VALUE = 26;
const INDICATOR_OFFSET = 265;

const rotateToValue = function(rotate) {
    return Math.floor((Math.abs(rotate * 360 * 1.73 + INDICATOR_OFFSET) / 53) + MIN_VALUE);
}


/**
 * @param {Number} rotate Количество оборотов от нейтриального положения.
 */
function setRotate(rotate) {
    if (rotate > maxRotate) {
        rotate = maxRotate;
    } else if (rotate < minRotate) {
        rotate = minRotate;
    }

    curRotate = rotate;
    curValue = rotateToValue(rotate);

    document.querySelector('.modal_knob .modal__value').innerHTML = '+' + curValue;
    document.querySelector('.knob__value').innerHTML = '+' + curValue;
    document.querySelector('.knob__indicator').style.strokeDasharray = curRotate * 360 * 1.73 + INDICATOR_OFFSET + ' 629';
    document.querySelector('.knob__arrow').style.transform = 'rotate(' + (curRotate * 360) + 'deg)';
}
// setRotate(0);

document.querySelectorAll('.modal_close').forEach(b => {
    b.onclick = function() {
        document.querySelectorAll('.modal').forEach(m => {
            m.classList.toggle('modal_open', false);
            document.querySelector('body').style.overflow = 'auto';
        });
    }
});

const TEMPS = {
    'manual': -10,
    'cold': 0,
    'warm': 23,
    'hot': 30
}

document.querySelectorAll('.modal__filter-item_temp').forEach(l => {
    l.onclick = function() {
        document.querySelector('.adjust-bar_theme_temp').value = TEMPS[this.id];
        document.querySelector('.modal_temp .modal__value').innerHTML = TEMPS[this.id] > 0 ? '+' + TEMPS[this.id] : TEMPS[this.id];
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