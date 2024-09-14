// WindowScroll
window.addEventListener('scroll',() => {
    const sidebar = document.querySelector('.sidebar');
    const nav = document.querySelector('nav');
        if (window.scrollY > 0) {
            sidebar.classList.add('hideSidebar');
            setTimeout(() => {
                sidebar.style.display = 'none';
            },300);

            nav.classList.add('sticky');
        }

        if (window.scrollY === 0) {
            nav.classList.remove('sticky');
        }
});

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// Sidebar
 function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('nav ul li.menu-button');
    sidebar.classList.remove('hideSidebar');
    sidebar.classList.add('showSidebar');
    sidebar.style.display = 'flex';
    menuBtn.style.display = 'none';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('nav ul li.menu-button');
    sidebar.classList.add('hideSidebar');
    setTimeout(() => {
         sidebar.style.display = 'none';
     },300);
    sidebar.classList.remove('showSidebar');
    menuBtn.style.display = 'inline';
}

// outHover
const navList = document.querySelectorAll('nav ul li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5)');
navList.forEach(navItem => {
    navItem.addEventListener('mouseout',() => {
        navItem.classList.add('outHover');
    });

    navItem.addEventListener('mouseover',() => {
        navItem.classList.remove('outHover');
    });
});
