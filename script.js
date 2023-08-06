// adding click logic to the navbar dropdown
var topNavDropdownButtons = document.querySelectorAll("div.top-nav-dropdown > span");
for ( var button of topNavDropdownButtons )
{
    button.addEventListener( "click", function( event ){
        event.target.parentElement.classList.toggle("show");
    });
}


// adding click logic to the FAQs accordions
var accordionItems = document.getElementsByClassName("accordion-item");
for ( var item of accordionItems )
{
    item.addEventListener( "click", function( event ){
        event.target.classList.toggle("show");
    });
}