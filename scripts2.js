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

const showModal = function(selector) {
    document.querySelector(selector).classList.add('modal_open');
    document.querySelector('body').style.overflow = 'hidden';
};