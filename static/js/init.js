AOS.init({
    offset: 200,
      duration: 700,
      easing: 'ease-in',
      delay: 300,
  }, {offset:'50%'});

  jQuery(document).ready(function($) {
            // $('.counter').counterUp({
            //     delay: 10,
            //     time: 1000
            // });
            //fix toggle collapse issue
            $('.navbar-toggle').click(function(event) {
            $('.navbar-collapse').toggle('in');
          });
        });