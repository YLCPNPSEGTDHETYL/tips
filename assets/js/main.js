
let scrollHintInstance = null;

function initializeScrollHint() {
    // ScrollHintの初期化
    scrollHintInstance = new ScrollHint('.table-content', {
        suggestiveShadow: true,
        remainingTime: 8000,
        i18n: {
            scrollable: 'スクロールできます'
        }
    });
}

let start_position = 0,
    window_position,
    $window = $(window),
    $header = $('#header'),
    header_height;


document.addEventListener('DOMContentLoaded', function () {
    header_height = $("#header").height();

    $("article").css("margin-top", header_height + 10);

    document.body.classList.add('js-loaded');
});


$window.on('scroll', function () {
    window_position = $(this).scrollTop();

    if (window_position <= start_position) {
        $header.css('top', '0');
    } else {
        $header.css('top', - header_height);
    }
    start_position = window_position;

});

$window.trigger('scroll');

//global func
window.initializeScrollHint = initializeScrollHint;