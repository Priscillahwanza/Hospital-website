const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

openNavBtn.addEventListener('click',() =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'Inline-block';

})
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'Inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click',closeNav);

//close nav menu when a menu item is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}



//change navbar styles on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toogle('window-scroll',window.scrollY > 0);
})
// Initialize Swiperjs (TESTIMONIALS SECTION)
    
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        //Responsive breakpoints
        breakpoints: {
            //when window width is >=600px
            600: {
                slidesPerView: 2
            },
            //when window width is >=1024px
            1024: {
                slidesPerView: 3
            }


        }
      });
    
      