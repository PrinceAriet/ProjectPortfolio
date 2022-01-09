function DarkMode() {
    var bgTheme = document.body;
    var logo = document.getElementById('logo');
    var navLinks = document.querySelector('.nav-links');
    var mainBlock = document.querySelector('.main-content');
    var themeIconSrc = document.getElementById('theme-changing-icon').src;
    var themeIcon = document.getElementById('theme-changing-icon');
    var about_box = document.querySelector('.about-box');
    var alert = document.querySelector('.alert')
    bgTheme.classList.toggle('dark-theme');
    logo.classList.toggle('dark-logo');
    navLinks.classList.toggle('dark-nav-links');
    mainBlock.classList.toggle('dark-main-content');
    about_box.classList.toggle('dark-about-box');
    alert.classList.toggle('dark-alert');
    if (themeIconSrc.indexOf("images/icons8-smiling-sun-96.png")!=-1) {
        themeIcon.src = "images/icons8-sad-sun-96.png";
    } else {
        themeIcon.src = "images/icons8-smiling-sun-96.png";
    }
    console.log('I am working!');
}
let cursed = document.getElementById('cursed-img');
cursed.onclick = function() {
    var bg = document.body;
    bg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/862a735726b51bf496b4820d1985e707.jpg')";
    bg.style.backgroundRepeat = "repeat";
    bg.style.backgroundSize = "contain";
    var main_block_bg = document.querySelector('.main-content');
    main_block_bg.style.backgroundImage = "url('images/862a735726b51bf496b4820d1985e707.jpg')";   
    var logo_bg = document.getElementById('logo');
    logo_bg.style.backgroundImage = "url('images/862a735726b51bf496b4820d1985e707.jpg')";
    var navLinks_bg = document.querySelector('.nav-links');
    navLinks_bg.style.backgroundImage = "url('images/862a735726b51bf496b4820d1985e707.jpg')";
    var strange_images = document.querySelector('.strange-img.one');
    strange_images.src = "images/862a735726b51bf496b4820d1985e707.jpg";
    var strange_images2 = document.querySelector('.strange-img.two')
    strange_images2.src = "images/862a735726b51bf496b4820d1985e707.jpg";
    var strange_images3 = document.querySelector('.strange-img.three')
    strange_images3.src = "images/862a735726b51bf496b4820d1985e707.jpg";
    var pfp = document.querySelector('.pfp');
    pfp.src = "images/862a735726b51bf496b4820d1985e707.jpg";
    alert("You shouldn't have clicked...");
    console.log('I am working!');
};
