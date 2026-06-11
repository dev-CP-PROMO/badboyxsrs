// ================================================
// MUDE APENAS ESTA LINHA COM O SEU LINK TELEGRAM
// ================================================
var TELEGRAM_LINK = 'http://t.me/badboyxsrs';
// ================================================

(function () {
    function replace() {
        document.querySelectorAll('a[href]').forEach(function (a) {
            if (/t\.me|telegram\.me|tg\.me/i.test(a.getAttribute('href'))) {
                a.href = TELEGRAM_LINK;
                a.target = '_blank';
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replace);
    } else {
        replace();
    }

    setTimeout(replace, 1000);
    setTimeout(replace, 3000);
})();
