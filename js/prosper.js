$(document).ready(function () {
  $(".toggle-manu").click(function () {
    $("nav").slideToggle();
  });

  $(".back-to-top").hide();
  $(".back-to-top").click(function () {
    $("html").animate({ scrollTop: "0" });
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

// nav slider

$(document).ready(function () {
  $("nav ul li a").click(function (e) {
    $(this).parent("nav ul li").find(".dropdown").slideToggle("slow");
    $(this)
      .parent("nav ul li")
      .prevAll("nav ul li")
      .find(".dropdown")
      .slideUp("slow");
    $(this)
      .parent("nav ul li")
      .nextAll("nav ul li")
      .find(".dropdown")
      .slideUp("slow");
  });
});

$(document).ready(function () {
  $(".toggle-manu").click(function (e) {
    $(this)
      .parent(".navbar")
      .find(".toggle-manu i")
      .toggleClass("ri-menu-line ri-close-line ro-animation");
  });
});

$(document).ready(function () {
  $("nav ul li a").click(function (e) {
    $(this).parent("#p-icon").find(".click-icon i").toggleClass("on-icon-1");
    $(this)
      .parent("#p-icon")
      .prevAll("#p-icon")
      .find(".click-icon i")
      .removeClass("on-icon-1");
    $(this)
      .parent("#p-icon")
      .nextAll("#p-icon")
      .find(".click-icon i")
      .removeClass("on-icon-1");
  });
});

$(document).ready(function () {
  $(".dropdown ul li a").click(function (e) {
    $(this).parent(".dropdown ul li").find(".submanu").slideToggle();
    $(this)
      .parent(".dropdown ul li")
      .prevAll(".dropdown ul li")
      .find(".submanu")
      .slideUp();
    $(this)
      .parent(".dropdown ul li")
      .nextAll(".dropdown ul li")
      .find(".submanu")
      .slideUp();
  });
});
// slider

$(document).ready(function () {
  var owl = $('.owl-carousel');
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 2,
        stagePadding: 50,
      },
      900: {
        items: 3,
        stagePadding: 50,
      },
      1000: {
        items: 4,
        stagePadding: 100,
      },
    },
  });

  // button

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});

// counter js

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
