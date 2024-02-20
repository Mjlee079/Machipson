let openmenu = document.querySelector('#menu-bar')
let menuclose = document.querySelector('#close-bar')
let navigation = document.querySelector('.side-bar')

openmenu.addEventListener('click', () => {
    navigation.classList.toggle('show')
})

menuclose.addEventListener('click', () => {
    navigation.classList.remove('show')
})


document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text')
    

  

    setTimeout(function() {
        animatedText.classList.remove('animated-text');
        animatedText.textContent = 'WELCOME TO DIGITAL MARKEING AGENCY';
        setTimeout(function() {
            animatedText.classList.add('animated-text');
        }, 3000);
    }, 5000);

});
