function main() {
    'use strict';

    var f = document.getElementById('foo');
    document.addEventListener('mousemove', function (ev) {
        f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
        f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
    }, false);
}

window.addEventListener('load', main);
