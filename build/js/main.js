//SLIDER

var slider = document.getElementsByClassName('slider')[0],
    btnLeft = document.getElementsByClassName('btn-left')[0],
    btnRight = document.getElementsByClassName('btn-right')[0],
    header = document.getElementsByClassName('header')[0],
    bgMove = 0,
    position = 0,
    step = -1200;

btnRight.addEventListener('click', function() {
    position += step;
    slider.style.marginLeft = position + 'px';
    bgMove +=-150;
    header.style.backgroundPositionX = bgMove + 'px';
    if(bgMove < -300) {
        bgMove = 0;
        header.style.backgroundPositionX = bgMove + 'px';
    } 
    if(position < -2400) {
        position = 0;
        slider.style.marginLeft = position + 'px';
    }
});

btnLeft.addEventListener('click', function() {
    position -= step;
    slider.style.marginLeft = position + 'px';
    bgMove += 150;
    header.style.backgroundPositionX = bgMove + 'px';
    if(bgMove > 300) {
        bgMove = 0;
        header.style.backgroundPositionX = bgMove + 'px';
    }if(bgMove > 0) {
        bgMove = -300;
        header.style.backgroundPositionX = bgMove + 'px';
    }
    if(position > 0) {
        position = -2400;
        slider.style.marginLeft = position + 'px';
    }
});