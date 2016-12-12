var hello = function(msg) {
    $('div').first().css({
        'border': '1px solid yellow'
    });
};

export function init(msg) {
    hello(msg);
}
