window.addEventListener('load', () => {
  const wheelBtn = document.getElementById('wheel__button');
  const wheelSpinner = document.getElementById('wheel__spinner');
  const popup = document.getElementById('popup');
  const popupBtn = document.getElementById('popup__btn');
  const popupWindow1 = document.getElementById('popup__window_1');
  const popupWindow2 = document.getElementById('popup__window_2');
  const imgPath = wheelSpinner.getAttribute('data-img');

  let counter = 0;
  let $html = $('html'), $preloader = $('.preloader'), $currLang = $('.curr_lang'),
      lang = localStorage.lang,
      langList = ['kz', 'ru'];

  if (!lang) {
      // default lang
      let countryToLang = {
          ru: 'ru',
          kz: 'kz',
          default: 'ru',
      };
      let country = $html.attr('data-country');
      lang = countryToLang[country] || countryToLang['default'];
      localStorage.lang = lang;
  }


  let langListData = 0;
  let i;

  for (i = 0; i < langList.length; i++) {
      if (lang === langList[i]) {
          langListData = 1;
      }
  }
  if (langListData === 0) {
      $html.addClass('ru');
      lang = 'ru';
  }

  wheelSpinner.src = imgPath + "/wheel-" + lang + ".png";

  langList.forEach(function (element) {
      $html.removeClass(element).addClass(lang);
  });

  $('.lang_list_item[data-lang="' + lang + '"]')
      .addClass('curr')
      .siblings()
      .removeClass('curr');
  $currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());


  var $langSwitcher = $('.lang_switcher'), $langList = $('.lang_list'), $langListItem = $('.lang_list_item');


  $langSwitcher.click(function () {
      $langList.toggleClass('act');
  });


  $langListItem.click(function () {
      $preloader.fadeIn();
      setTimeout(function () {
          $preloader.fadeOut();
      }, 200);
      var lang = $(this).data('lang');
      var langs = $('.lang_list_item').map(function (i, el) {
          return $(el).data('lang');
      }).toArray().join(" ");
      $html.removeClass(langs).addClass(lang);
      localStorage.lang = lang;
      $('.lang_list_item[data-lang="' + lang + '"]')
          .addClass('curr')
          .siblings()
          .removeClass('curr');
      $currLang.html($(this).html());
      wheelSpinner.src = imgPath + "/wheel-" + lang + ".png";
  });

  $(document).mouseup(function (e) {
      if (!$langSwitcher.is(e.target) && $langSwitcher.has(e.target).length === 0) {
          $langList.removeClass('act');
      }
  });


  wheelBtn.addEventListener('click', () => {
      if (counter == 0) {
          wheelBtn.disabled = true;
          wheelSpinner.classList.remove('wheel__spinner_animated');
          wheelSpinner.classList.add('wheel__spinner_win1');
          setTimeout(function () {
              popup.classList.add('popup__show');
              popupWindow1.classList.add('popup__window_show');
              localStorage.spin_2619_1 = 'spin_1';
              counter++;
          }, 4500);
      }
  })

  popupBtn.addEventListener('click', () => {
      wheelSpinner.classList.remove('wheel__spinner_animated');
      wheelSpinner.classList.remove('wheel__spinner_win1');
      popup.classList.remove('popup__show');
      popupWindow1.classList.remove('popup__window_show');
      wheelSpinner.classList.add('wheel__spinner_win2');
      setTimeout(function () {
          popup.classList.add('popup__show');
          popupWindow2.classList.add('popup__window_show');
          localStorage.spin_2619_1 = 'spin_2';
      }, 4500);
  })


  switch (localStorage.spin_2619_1) {
      case 'spin_1': {
          wheelBtn.disabled = true;
          wheelSpinner.classList.remove('wheel__spinner_animated');
          wheelSpinner.style.transform = 'rotate(716deg)'
          popup.classList.add('popup__show');
          popupWindow1.classList.add('popup__window_show');
          counter = 1;
          break
      }
      case 'spin_2': {
          wheelBtn.disabled = true;
          wheelSpinner.classList.remove('wheel__spinner_animated');
          wheelSpinner.classList.remove('wheel__spinner_animated_2');
          wheelSpinner.style.transform = 'rotate(1665deg)'
          popup.classList.add('popup__show');
          popupWindow2.classList.add('popup__window_show');
          counter = 2;
          break
      }
      default:
          break;
  }

});
