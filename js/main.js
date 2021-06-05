
$('.pricing__carosuel').owlCarousel({

      items:2,
      loop:true,
      nav:false,
      dots:true,
      margin:30,


      responsive : {
            // breakpoint from 0 up
            0 : {
                items:1

            },
            // breakpoint from 480 up
            480 : {
                  items:1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
                
            }
        }
});