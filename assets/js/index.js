$(document).ready(function() {
  console.log("Don't look at me, I'm hideous! ^_^");
  $( ".project-window" ).hover(
    function() {
      $($( this ).find(".live-link")).removeClass( "display-none" );
      $($( this ).find(".github-link")).removeClass( "display-none" );
      $($( this ).find(".live-link")).addClass( "display-now" );
      $($( this ).find(".github-link")).addClass( "display-now" );
    }, function() {
      $($( this ).find(".live-link")).removeClass( "display-now" );
      $($( this ).find(".github-link")).removeClass( "display-now" );
      $($( this ).find(".live-link")).addClass( "display-none" );
      $($( this ).find(".github-link")).addClass( "display-none" );
    }
  );

  $('#sidebar a[href="#intro"] li').addClass('active');
  $('#sidebar a[href="#intro"]').siblings().find("li").removeClass("active")


  $("#main").scroll(function() {
      var scroll_top = $(document).scrollTop();
      var scroll_bottom = $(document).scrollTop() + $(window).height()
      var div_one_top = $('a[name=intro]').position().top;
      var div_two_top = $('a[name=about-me]').position().top;
      var div_three_top = $('a[name=projects]').position().top;
      var div_four_top = $('a[name=resume]').position().top;
      var div_five_top = $('a[name=contact]').position().top;

      if(scroll_top >= 0 && scroll_top < div_two_top - 100) {
          $('#sidebar a[href="intro"] li').addClass('active');
          $('#sidebar a[href="intro"]').siblings().find("li").removeClass("active")
      } else if( scroll_top > div_two_top - 100 && scroll_top < div_three_top-50) {
          $('#sidebar a[href="about-me"] li').addClass('active');
          $('#sidebar a[href="about-me"]').siblings().find("li").removeClass("active")
      } else if( scroll_top > div_three_top-100 && scroll_top < div_four_top-100) {
          $('#sidebar a[href="projects"] li').addClass('active');
          $('#sidebar a[href="projects"]').siblings().find("li").removeClass("active")
        } else if( scroll_top > div_four_top + 200) {
          $('#sidebar a[href="contact"] li').addClass('active');
          $('#sidebar a[href="contact"]').siblings().find("li").removeClass("active")
        } else if( scroll_top > div_four_top - 100) {
            $('#sidebar a[href="resume"] li').addClass('active');
            $('#sidebar a[href="resume"]').siblings().find("li").removeClass("active")
        }
  });

  $(".nav-links a").click(function(event) {
    event.preventDefault();
    $("#main").scrollTo($("a[name=" + $(event.currentTarget).attr("href") + "]"),{duration: 500})
  })

  $("a[href=\"top\"]").click(function(event) {
    event.preventDefault();
    $("#main").scrollTo($("a[name=top]"),{duration: 500})
  })

  if($(window).width() <= 900){
    $("#main").height($(window).height()-$("#sidebar").height());
  } else {
    $("#main").height($(window).height());
  }

  $(window).on('resize', function(){
    if($(window).width() <= 900){
      $("#main").height($(window).height()-$("#sidebar").height());
    } else {
      $("#main").height($(window).height());
    }
  })

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    addEventListener("click", function() {
        var el = document.documentElement
        , rfs =
                el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
        ;
        rfs.call(el);
    });
  }
});
