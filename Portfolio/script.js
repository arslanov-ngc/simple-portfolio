window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    const menu = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation a');
    
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menu.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    const scrollBtn = document.querySelector('.scrollToTop');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 700);
    });
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 300;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            }
        }
    });
});