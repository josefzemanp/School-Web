function arrangeInCircle(selectedDay) {
    var list = document.querySelector('.main_menu_list');
    var items = list.querySelectorAll('.main_menu_list_item');

    var selectedIndex = Array.from(items).findIndex(item => item.getAttribute('data-day') === selectedDay);

    var anglep = -(360 / (items.length - 1)) * (selectedIndex === 2 ? 0 : (selectedIndex < 2 ? selectedIndex - 1 - selectedIndex * 0.5 : (selectedIndex === 3 ? 0.5 : 1)) );

    var startAngle = Math.PI / 2 - (anglep * Math.PI / 180);

    var angleStep = -(Math.PI) / (items.length - 1);
    const radius = 330;

    items.forEach(function(item, index) {
        var angle = startAngle + index * angleStep;
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;

        if(index === selectedIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }

        item.style.left = x + 50 + 'px';
        item.style.top = y + 'px';
    });
}

document.querySelectorAll('.main_menu_list_item').forEach(function(item) {
    if (window.innerWidth >= 1200) {
        item.addEventListener('click', function () {
            var selectedDay = item.getAttribute('data-day');
            arrangeInCircle(selectedDay);
        });
    }
});

window.addEventListener('load', function() {
    if (window.innerWidth >= 1200) {
        arrangeInCircle("streda");
    }
});