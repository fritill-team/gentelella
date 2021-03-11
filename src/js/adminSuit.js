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
  .on("click", ".fixed-menu button.menu-toggle", function (event) {
    $(this).parent().toggleClass("open");
    $(".menu").toggleClass("open");
  })
  .on("click", "body", function (e) {
    if ($(".open").has(e.target).length === 0) {
      $(".fixed-menu ").removeClass("open");
      $(".menu ").removeClass("open");
    }
  })
  .on("click", ".list-group .menu-tree .list-group-item .title #test", function () {
    $(".menu-tree .list-group-item .menu").addClass("active");
  });
