(function(){
    const wrapper = document.querySelector('.wrapper'),
    indicator = document.querySelector('.indicator'),
    currentWinWidth = parseInt(window.getComputedStyle(wrapper).width),
    totalScrollHeight = parseInt(document.body.scrollHeight - document.documentElement.clientHeight);
    
    window.addEventListener('scroll', () => {
    indicator.style.width = (window.pageYOffset)/totalScrollHeight*currentWinWidth + 'px';
    });
})();