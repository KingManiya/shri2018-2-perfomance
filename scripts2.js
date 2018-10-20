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

const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
arrowRightScens.addEventListener('click', function () {
    const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
    arrowRightScens.classList.add('paginator__arrow_disabled');
    arrowLeftScens.classList.remove('paginator__arrow_disabled');
    const scenarios = document.querySelector('.scenarios');
    scenarios.scroll({
        top: 0,
        left: 645,
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