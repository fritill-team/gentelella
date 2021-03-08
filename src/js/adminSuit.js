$(".fixed-menu button.dropdown-toggle").on("click", function (event) {
    $(this).parent().toggleClass("open");
    $(".menu").toggleClass("open");
    console.log("clicked")
});

$("body").on("click", function (e) {
    if (!$('li.dropdown.mega-dropdown').is(e.target)
        && $('li.dropdown.mega-dropdown').has(e.target).length === 0
        && $('.open').has(e.target).length === 0
    ) {
        $('.fixed-menu ').removeClass('open');
        $('.menu ').removeClass('open');
    }
});
