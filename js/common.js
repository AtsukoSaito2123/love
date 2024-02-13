$(function () {

  $('.lineup-slick-area').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      // autoplay: true,
      // autoplaySpeed: 1200,
      dots: true,

      responsive: [{
          breakpoint: 700,
          settings: {
              slidesToShow: 1,
              speed: 600,
          },
      },
      ]
  });

  $('.slick-step').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      arrows: true,
      infinite: false,
      prevArrow: '<button class="slide-arrow arrow-left"></button>',
      nextArrow: '<button class="slide-arrow arrow-right"></button>',
      // autoplay: true,
      // autoplaySpeed: 1200,
      dots: false,

      responsive: [{
          breakpoint: 700,
          settings: {
              speed: 600,
          },
      },
      ]
  });

  // display スタイルを削除する
  $('.arrow-left').css('display', '');


  // 部分スクロール
  $(window).on('load', function () {
      $(function ($) {
          // 追従させたい要素のクラス名を宣言
          var hoge = $('.flex-left');
          offset = hoge.offset();
          $(window).scroll(function () {
              if ($(window).scrollTop() > offset.top) {
                  // 追従させたい要素の位置までスクロールしたらクラス付与
                  hoge.addClass('hoge_fixed');
              } else {
                  // それ以外はクラスを外す
                  hoge.removeClass('hoge_fixed');
              }
          });
      });
  });


  /* =============================================
aside フェードイン
============================================= */
  // フェードインさせたい要素の対象を取得
  const fadeInElement = document.querySelector('.pc-amazon-buy');
  // フェードアウトさせたい要素の対象を取得
  const fadeOutElement = document.querySelector('.pc-amazon-buy');

  // スクロールイベントを監視
  window.addEventListener('scroll', () => {
      // メインビジュアルを過ぎたらフェードイン
      if (window.scrollY > document.getElementById('mainvisual').offsetHeight - 500) {
          fadeInElement.classList.add('fade-in');
      } else {
          fadeInElement.classList.remove('fade-in');
      }

      // フッターに到達したらフェードアウト
      if (window.scrollY + window.innerHeight > document.getElementById('footer').offsetTop) {
          fadeOutElement.classList.add('fade-out');
      } else {
          fadeOutElement.classList.remove('fade-out');
      }
  });
  /* =============================================
aside モーダル
============================================= */

  var asideModal = document.getElementById("asideModal");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = function () {
      asideModal.style.display = "block";
      setTimeout(function () {
          asideModal.style.opacity = "1";
          document.body.classList.add("modal-open");
      }, 10);
  };

  closeBtn.onclick = function () {
      asideModal.style.opacity = "0";
      setTimeout(function () {
          asideModal.style.display = "none";
          document.body.classList.remove("modal-open");
      }, 300);
  };
  // 背景クリックでもクローズ
  asideModal.onclick = function () {
      if (event.target === asideModal) {
          closeBtn.click(); // 閉じるボタンのクリックイベントをトリガー
      }
  };
});