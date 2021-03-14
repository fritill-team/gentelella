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
  // .each(".list-group .menu-tree .list-group-item .title", function () {
  //   $(this).on("click", function(){
  //       $(".list-group .menu-tree").addClass("active");
  //   })
  // })
  // .on("click", "li.expandable", function() {
  //   $(this).children('ul').toggle();
  //   return false;
  // })
  .on("click", ".tree li div > a", function (e) {
    var link = $(this);
      e.preventDefault();
      link.next().toggle("slow");
      link.toggleClass("active");
  });
