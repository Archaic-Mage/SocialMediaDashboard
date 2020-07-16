
var checkBox = document.getElementById("check");

checkBox.addEventListener('click', darkMode);

function darkMode () {
    if (checkBox.checked == true) {
        document.querySelector('body').classList.add('d');
        
        document.querySelector('.header').classList.add('header-d');
        
        
        document.querySelector('.header-d').classList.remove('header');
        
        for (var i = 0; i < document.getElementsByClassName('heading').length; i++) {
            document.getElementsByClassName('heading')[i].classList.add('heading-d');
        }
        for (var i = 0; i < document.getElementsByClassName('heading-d').length; i++) {
            document.getElementsByClassName('heading-d')[i].classList.remove('heading');
        }
        for (var i = 0; i < document.getElementsByClassName('subHeading').length; i++) {
            document.getElementsByClassName('subHeading')[i].classList.add('subHeading-d');
        }
        for (var i = 0; i < document.getElementsByClassName('subHeading-d').length; i++) {
            document.getElementsByClassName('subHeading-d')[i].classList.remove('subHeading');
        }
        for (var a=0; a < document.querySelectorAll('div.card').length; a++) {
            document.querySelectorAll('div.card')[a].classList.add('d');
        }
                
        
        for (var b=0; b < document.querySelectorAll('div.card-body').length; b++) {
            document.querySelectorAll('div.card-body')[b].classList.add('d');
        }
        for (var i = 0; i < document.getElementsByClassName('cardText').length; i++) {
            document.getElementsByClassName('cardText')[i].classList.add('cardText-d');
        }
        for (var i = 0; i < document.getElementsByClassName('cardText-d').length; i++) {
            document.getElementsByClassName('cardText-d')[i].classList.remove('cardText');
        } 
        document.querySelector('.attribution').classList.add('d');        
    } else {
        document.querySelector('body').classList.remove('d');
        
        document.querySelector('.header-d').classList.add('header');
        
        
        document.querySelector('.header-d').classList.remove('header-d');
              
        for (var i = 0; i < document.getElementsByClassName('heading-d').length; i++) {
            document.getElementsByClassName('heading-d')[i].classList.add('heading');
        }
        
        
        for (var i = 0; i < document.getElementsByClassName('heading').length; i++) {
            document.getElementsByClassName('heading')[i].classList.remove('heading-d');
        }
        for (var i = 0; i < document.getElementsByClassName('subHeading-d').length; i++) {
            document.getElementsByClassName('subHeading-d')[i].classList.add('subHeading');
        }
        for (var i = 0; i < document.getElementsByClassName('subHeading-d').length; i++) {
            document.getElementsByClassName('subHeading-d')[i].classList.remove('subHeading-d');
        }
        
        for (var a=0; a < document.querySelectorAll('div.card').length; a++) {
            document.querySelectorAll('div.card')[a].classList.remove('d');
        }
        for (var b=0; b < document.querySelectorAll('div.card-body').length; b++) {
            document.querySelectorAll('div.card-body')[b].classList.remove('d');
        }
        for (var i = 0; i < document.getElementsByClassName('cardText-d').length; i++) {
            document.getElementsByClassName('cardText-d')[i].classList.add('cardText');
        }
        for (var i = 0; i < document.getElementsByClassName('cardText-d').length; i++) {
            document.getElementsByClassName('cardText-d')[i].classList.remove('cardText-d');
        }
        document.querySelector('.attribution').classList.remove('d');
        
    }
}

