// $(".fixed-menu button.dropdown-toggle").on("click", function (event) {
//     $(this).parent().toggleClass("open");
//     $(".menu").toggleClass("open");
//     console.log("clicked")
// });
//
// $("body").on("click", function (e) {
//     if (!$('li.dropdown.mega-dropdown').is(e.target)
//         && $('li.dropdown.mega-dropdown').has(e.target).length === 0
//         && $('.open').has(e.target).length === 0
//     ) {
//         $('.fixed-menu ').removeClass('open');
//         $('.menu ').removeClass('open');
//     }
// });

$(document)
  .on("click", ".fixed-menu .dropdown-toggle", function (event) {
    $(this).parent().toggleClass("show");
    $(this).parent().find(".fixed-menu__menu").toggleClass("show");
  })
  .on("click", "body", function (e) {
    if ($(".show").has(e.target).length === 0) {
      $(".fixed-menu").removeClass("show");
      $(".fixed-menu__menu").removeClass("show");
    }
  })
  .on("click", ".list-group .menu-tree .list-group-item .title #test", function () {
    $(".menu-tree .list-group-item .menu").addClass("active");
  });
