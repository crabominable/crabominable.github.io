// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 950) {
    $('#abilities-section-cards-content').css({ opacity: "1", transition: "1s" });
    $('.abilities-section-card-graphic-bar-border').css({ opacity: "1", transition: "1.5s", width: "100%" })
  }
  var x = $(this).scrollTop();
  if (x > 100) {
    $('.qualification__container').css({ opacity: "1", transition: "1s" });
  }
  var z = $(this).scrollTop();
  if (z > 400) {
    $('.qualification__content2').css({ opacity: "1", transition: "1s" });
  }
  var k = $(this).scrollTop();
  if (k > 1600) {
    $('.projects-section-container-content').css({ opacity: "1", transition: "1s" });
  }
  var z = $(this).scrollTop();
  if (z > 2400) {
    $('.contact-section-container-content').css({ opacity: "1", transition: "1s" });
  }
});
// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$('#code-atoms').click(function() {
  if($('.code-atoms-explications').css("opacity") === '1') {
    $('.code-atoms-explications').css({opacity: '0', transition: '1s'});
  } else {
    $('.code-atoms-explications').css({opacity: '1', transition: '1s'});
  }
});
// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$('.left-arrow').click(function() {
  if ($('.projects-section-content-card-frontend-online-store').css("display") === 'flex') {
    $('.projects-section-content-card-frontend-online-store').fadeOut('fast', function() {
      $('.projects-section-content-card-recipe-app').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-trivia').css("display") === 'flex') {
    $('.projects-section-content-card-trivia').fadeOut('fast', function() {
      $('.projects-section-content-card-frontend-online-store').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-trybewallet').css("display") === 'flex') {
    $('.projects-section-content-card-trybewallet').fadeOut('fast', function() {
      $('.projects-section-content-card-trivia').css({display: 'flex'});
    });
  }
});
// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$('.right-arrow').click(function() {
  if ($('.projects-section-content-card-recipe-app').css("display") === 'flex') {
    $('.projects-section-content-card-recipe-app').fadeOut('fast', function() {
      $('.projects-section-content-card-frontend-online-store').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-frontend-online-store').css("display") === 'flex') {
    $('.projects-section-content-card-frontend-online-store').fadeOut('fast', function() {
      $('.projects-section-content-card-trivia').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-trivia').css("display") === 'flex') {
    $('.projects-section-content-card-trivia').fadeOut('fast', function() {
      $('.projects-section-content-card-trybewallet').css({display: 'flex'});
    });
  }
});
// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$('.left-arrow-2').click(function() {
  if ($('.projects-section-content-card-complexorj').css("display") === 'flex') {
    $('.projects-section-content-card-complexorj').fadeOut('fast', function() {
      $('.projects-section-content-card-codeatoms').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-nuis').css("display") === 'flex') {
    $('.projects-section-content-card-nuis').fadeOut('fast', function() {
      $('.projects-section-content-card-complexorj').css({display: 'flex'});
    });
  }
});
// Site desenvolvido e compilado por Lucas Pinheiro > https://github.com/crabominable, https://www.linkedin.com/in/lucas-pinheiro-alberdanha/
$('.right-arrow-2').click(function() {
  if ($('.projects-section-content-card-codeatoms').css("display") === 'flex') {
    $('.projects-section-content-card-codeatoms').fadeOut('fast', function() {
      $('.projects-section-content-card-complexorj').css({display: 'flex'});
    });
  }
  if ($('.projects-section-content-card-complexorj').css("display") === 'flex') {
    $('.projects-section-content-card-complexorj').fadeOut('fast', function() {
      $('.projects-section-content-card-nuis').css({display: 'flex'});
    });
  }
})