// $(document).ready(function () {
//     if (window.innerWidth > 992) {
//         var logo = $('#logo');
//     var initialLogo = './img/logo1.png';
//     var scrolledLogo = './img/logo1a.png';

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) { // Adjust this value based on when you want the change to occur
//             logo.find('img').attr('src', scrolledLogo);
//         } else {
//             logo.find('img').attr('src', initialLogo);
//         }
//     });
        
//     }
// });


$(document).ready(function() {
    var logo = $('#logo');
    var initialLogo = '../img/logo1.png';
    var scrolledLogo = '../img/logo1a.png';
  
    function updateLogo() {
      if ($(window).width() > 992) {
        if ($(this).scrollTop() > 50) {
          logo.find('img').attr('src', scrolledLogo);
        } else {
          logo.find('img').attr('src', initialLogo);
        }
      } else {
        // Reset to initial logo if window width is less than or equal to 992px
        logo.find('img').attr('src', scrolledLogo);
      }
    }
  
    // Initial execution
    updateLogo();
  
    $(window).scroll(function() {
      // Execute only if the window width is greater than 992px
      if ($(window).width() > 992) {
        updateLogo();
      }
    });
  
    // Update logo on window resize
    $(window).resize(function() {
      // Execute only if the window width is greater than 992px
      if ($(window).width() > 992) {
        updateLogo();
      }
    });
  });
  