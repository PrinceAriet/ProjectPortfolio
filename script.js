function DarkMode() {
    var bgTheme = document.body;
    var logo = document.getElementById('logo');
    var navLinks = document.querySelector('.nav-links');
    var mainBlock = document.querySelector('.main-content');
    var themeIconSrc = document.getElementById('theme-changing-icon').src;
    var themeIcon = document.getElementById('theme-changing-icon');
    var info = document.querySelector('.intro');
    var gif = document.getElementById('sunset');
    // var about_box = document.querySelector('.about-box');
    bgTheme.classList.toggle('dark-theme');
    logo.classList.toggle('dark-logo');
    navLinks.classList.toggle('dark-nav-links');
    mainBlock.classList.toggle('dark-main-content');
    // about_box.classList.toggle('dark-about-box');
    if (themeIconSrc.indexOf("images/icons8-smiling-sun-96.png")!=-1) {
        themeIcon.src = "images/icons8-sad-sun-96.png";
    } else {
        themeIcon.src = "images/icons8-smiling-sun-96.png";
    }
    gif.src = "images/patrick.gif";
    gif.style.marginTop = '100px';
    info.textContent = "Welcome to my place. My name is Ariet. I'm proffesional burger eater";
    console.log('I am working!');
}
