function $$(element) {
    return document.querySelectorAll(element);
}
function $(element) {
    return document.querySelector(element);
}
let items = $$('.carousel .images>li')
let prevBtn = $('.carousel .prev');
let nextBtn = $('.carousel .next');
let bullet = $$('.carousel .bullet>li')
let index = 0;
let timer = null;

let clearActive = () => {
    items.forEach( item => {
        item.classList.remove('active');
    })
    bullet.forEach( e => {
        e.classList.remove('active');
    })
}

let addActive = j => {
    items[j].classList.add('active');
    bullet[j].classList.add('active');
}

let goPlay = () => {
    clearActive();
    index = ++index % items.length;
    addActive(index);
}
//右按钮事件
nextBtn.addEventListener('click', () => {
    clearInterval(timer);
    clearActive();
    index = ++index % items.length;
    addActive(index);
    autoPlay();
})

//左按钮事件
prevBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    clearActive();
    index = (--index + items.length) % items.length;
    addActive(index);
    autoPlay();
})

bullet.forEach((e, i) => {
    e.addEventListener('mouseover', () => {
        clearInterval(timer);
        clearActive();
        index = i;
        addActive(i);
        autoPlay();
    })
})
let autoPlay = () => timer = setInterval(goPlay, 3000);
autoPlay();