const tabBtn = document.querySelectorAll('.catalog__tab');
const tabItem = document.querySelectorAll('.catalog__content');

tabBtn.forEach(function(item, i) {
    item.addEventListener('click', () => {
        if (i == 0) {
            item.classList.add('catalog__tab_active');
            tabBtn[1].classList.remove('catalog__tab_active');
            tabBtn[2].classList.remove('catalog__tab_active');
            tabItem[0].classList.add('_active-tab');
            tabItem[1].classList.remove('_active-tab');
            tabItem[2].classList.remove('_active-tab');
        } else if (i == 1) {
            item.classList.add('catalog__tab_active');
            tabBtn[0].classList.remove('catalog__tab_active');
            tabBtn[2].classList.remove('catalog__tab_active');
            tabItem[1].classList.add('_active-tab');
            tabItem[0].classList.remove('_active-tab');
            tabItem[2].classList.remove('_active-tab');

        } else if (i == 2) {
            item.classList.add('catalog__tab_active');
            tabBtn[1].classList.remove('catalog__tab_active');
            tabBtn[0].classList.remove('catalog__tab_active');
            tabItem[2].classList.add('_active-tab');
            tabItem[1].classList.remove('_active-tab');
            tabItem[0].classList.remove('_active-tab');
        }
    });
});