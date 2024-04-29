function showList(index) {
    var lists = document.querySelectorAll('.information_block');
    for (var i = 0; i < lists.length; i++) {
        if (i === index) {
            lists[i].classList.add('active');
        } else {
            lists[i].classList.remove('active');
        }
    }
}