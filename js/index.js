const settings = {
  social: {
    twitchUsername: 'techno',
    twitterUsername: '',
    facebookUsername: '',
    instagramUsername: '',
    youtubeUsername: '',
    snapchatUsername: '',
    steamUsername: '',
    battlenetUsername: '',
    discordUsername: ''
  },

  popup: {
    displayTime: 10,
    pauseTime: 0
  }
};

$('.popup .right span').each(function() {
  const socialName = settings.social[$(this).data('name')];

  $(this).append(socialName);
});

$('.popup').each(function() {
  const supporterEnable = settings.social[$(this).data('box')].length;
  const boxName = $(this).data('box');

  if (supporterEnable) {
    $('input[name=' + boxName + ']').prop('checked', true);
    $(this).addClass('animate-popup');
  } else {
    $('input[name=' + boxName + ']').prop('checked', false);
    $(this).addClass('no-popup');
  }
});

const popups = $('.animate-popup');
const pT = settings.popup.pauseTime * 1000;

let i = 0;

function animatePopup() {
  if (i >= popups.length) {
    i = 0;
  }

  popups.eq(i)
    .addClass('show-popup')
    .delay(settings.popup.displayTime * 1000)
    .queue(function() {
      $(this).removeClass('show-popup');
      $(this).dequeue();

      if (i === popups.length) {
        setTimeout(animatePopup, pT);
      } else {
        animatePopup();
      }
    });
  i++;
}

animatePopup();
