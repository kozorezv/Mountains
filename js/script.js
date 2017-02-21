var menuButton = document.getElementById('hamburger');

function toggleClassName(elementId, className){
	var element = document.getElementById(elementId);
	element.classList.toggle(className);
}
menuButton.addEventListener('click', function(){
	toggleClassName('mobileNav', 'shown');
	toggleClassName('hamburger', 'is-active');
});