/** 
 * Collapse the navbar whenever the user clicks outside.
 */
(function() {
  var toggler = $('.navbar-toggler');
  var navbar = $('#navbar');

  toggler.blur(function() {
    if (navbar.hasClass('show')) {
      toggler.click();
    }
  })
}());
