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
  // .each(".list-group .menu-tree .list-group-item .title", function () {
  //   $(this).on("click", function(){
  //       $(".list-group .menu-tree").addClass("active");
  //   })
  // })
  // .on("click", "li.expandable", function() {
  //   $(this).children('ul').toggle();
  //   return false;
  // })
  .on('click', '.toggle-children', function () {
    var ref = $(this).data('ref')
    $(`.tree-item[data-parent=${ref}]`).toggleClass('tree-item--hidden')
  })
  // .on("click", ".tree li div > a", function (e) {
  //   var link = $(this);
  //     e.preventDefault();
  //     link.next().toggle("slow");
  //     link.toggleClass("active");
  // });
