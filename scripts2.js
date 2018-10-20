function a(b) {
    if (b === '.scenarios') document.querySelector(b + '__paginator .paginator__arrow_right').classList.add('paginator__arrow_disabled');
    document.querySelector(b + '__paginator .paginator__arrow_left').classList.remove('paginator__arrow_disabled');
    document.querySelector(b).scrollLeft = 1366;
}
function c(d) {
    document.querySelector(d).classList.add('modal_open');
    document.querySelector('body').style.overflow = 'hidden';
}