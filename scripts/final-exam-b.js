const fullName = "Alexie Gabrielle L. Narciso";
const $main = $('main');
const $subNav = $('.sub-nav'); 
const $products = $('#products');
const $services = $('#services');
let currentSub;

$main.html(`<h2> COMP2132 Practical Exam </h2> <p>${fullName}</p>`);

$subNav.css('display', 'none');

$products.on('click', toggleSubNav);
$services.on('click', toggleSubNav);
$products.on('mouseenter', showSubNav);
$services.on('mouseenter', showSubNav);
$products.on('mouseleave', hideSubNav);
$services.on('mouseleave', hideSubNav);

function toggleSubNav() {
    currentSub = $(this.nextElementSibling);
    currentSub.toggle();
   
}

function showSubNav() {
    currentSub = $(this.nextElementSibling);
    currentSub.fadeIn("slow");
}

function hideSubNav() {
    currentSub = $(this.nextElementSibling);
    currentSub.fadeOut("fast");
}
