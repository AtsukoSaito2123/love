$(function () {

    /* =============================================
    ローディング画面をフェードアウトする
    ============================================= */
    $(function () {
        setTimeout(function () {
            $("#splash").fadeOut();
        }, 5000);
    });

    /* =============================================
    再読み込み時　トップへ戻す
    ============================================= */
    $(function () {
        $('html,body').animate({ scrollTop: 0 }, '1');
    });

    /* =============================================
    ナビゲーションメニュー スクロール場所にあわせてアイコンが動く
    ============================================= */
    $(window).on("load scroll resize", function () {
        var st = $(window).scrollTop();
        var wh = $(window).height();

        $(".sec-scroll-point").each(function (i) {
            var tg = $(this).offset().top;
            var id = $(this).attr("id");

            if (st > tg - wh + wh / 2) {
                $(".header-link").removeClass("is-active");
                var link = $(".header-link[href *= " + id + "]");
                $(link).addClass("is-active");
            }
        });
    });



    /* =============================================
  ハンバーガーメニュー
    ============================================= */

    $(".sp-hamburger").on("click", function () {
        $(".sp-header").toggleClass("open");
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $(".mask").on("click", function () {
        $(".sp-header").removeClass("open");
    });

    // リンクをクリックした時にメニューを閉じる
    $("nav a").on("click", function () {
        $(".sp-header").removeClass("open");
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

    /* =============================================
play btn モーダルウインドウ
============================================= */

    // モーダルビデオ1
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementById("closeModalBtn");
    var video = document.getElementById("myVideo");
    var overlay = document.getElementById("overlayClick");



    btn.onclick = function () {
        modal.style.display = "block";
        setTimeout(function () {
            modal.style.opacity = "1";
            document.body.classList.add("modal-open");
        }, 10);
    };

    span.onclick = function () {
        modal.style.opacity = "0";
        setTimeout(function () {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }, 300);
        video.pause();
    };


    // ビデオコントロールバー制御　＊video1
    video.addEventListener("click", function () {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    });

    overlay.onclick = function () {
        if (video.paused || video.ended) {
            video.play();
            var textOverlay = document.querySelector('.text-overlay');
            textOverlay.style.display = 'none';
        } else {
            video.pause();
        }
    };

    $(function ($) {
        var movie = document.getElementById("myVideo");
        movie.controls = false;
    });


    // モーダルビデオ2
    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("openModalBtn2");
    var span2 = document.getElementById("closeModalBtn2");
    var video2 = document.getElementById("myVideo2");
    var overlay2 = document.getElementById("overlayClick2");

    btn2.onclick = function () {
        modal2.style.display = "block";
        setTimeout(function () {
            modal2.style.opacity = "1";
            document.body.classList.add("modal-open");
        }, 10);
    };

    span2.onclick = function () {
        modal2.style.opacity = "0";
        setTimeout(function () {
            modal2.style.display = "none";
            document.body.classList.remove("modal-open");
        }, 300);
        video2.pause();
    };

    // ビデオコントロールバー制御　＊video2

    video2.addEventListener("click", function () {
        if (video2.paused || video2.ended) {
            video2.play();
        } else {
            video2.pause();
        }
    });

    overlay2.onclick = function () {
        if (video2.paused || video2.ended) {
            video2.play();
            var textOverlay2 = document.querySelector('.text-overlay2');
            textOverlay2.style.display = 'none';
        } else {
            video2.pause();
        }
    };

    $(function ($) {
        var movie2 = document.getElementById("myVideo2");
        movie2.controls = false;
    });



    /* =============================================
    mainvisual vegas
    ============================================= */
    //画像の設定
    var windowwidth =
        window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768) {
        var responsiveImage = [
            //PC用の画像
            { src: "img/home/img-01.png" },
            { src: "img/home/img-02.png" },
            { src: "img/home/img-03.png" },
            { src: "img/home/img-04.png" },
        ];
    } else {
        var responsiveImage = [
            //タブレットサイズ（768px）以下用の画像
            { src: "img/home/img-01.png" },
            { src: "img/home/img-02.png" },
            { src: "img/home/img-03.png" },
            { src: "img/home/img-04.png" },
        ];
    }
    //Vegas全体の設定
    $(function () {
        setTimeout(function () {
            $("#slider").vegas({
                transition: "blur",
                transitionDuration: 1000,
                delay: 4000, //スライド間の遅延をミリ秒単位で。
                animationDuration: 5000, //スライドアニメーション時間をミリ秒単位で設定
                animation: "kenburns",
                slides: responsiveImage,
                timer: false,
            });
        }, 4000);
    });

    /* =============================================
    pc-top-1 ＊円のところ スクロール  gsap
    ============================================= */

    gsap.registerPlugin(ScrollTrigger);

    const TL = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play none none reverse", // 上スクロールで戻る
            trigger: ".obsession",
            duration: 1,
            scrub: 0.2,
            start: "top top",
            end: "+=100%",
            anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
            invalidateOnRefresh: true,
            // markers: true,
        },
        onEnterBack: () => {
            document.querySelector('.obsession').innerHTML = 'onEnterBack';
        },
        onLeaveBack: () => {
            document.querySelector('.obsession').innerHTML = 'onLeaveBack';
        },
    });


    // Case 1
    TL.to(".element1", { opacity: 1, y: 0, duration: 1 })
        .to(".item1", { yPercent: -110, xPercent: -65, color: "#fff", duration: 1 }, "tl1")
        .to([".span1", ".span3"], { borderBottomColor: "#fff", duration: 1 }, "tl1")
        .to([".img1", ".circle1"], { opacity: 0, duration: 1 }, "tl1")
        .to(".bg1", { background: "transparent", duration: 1 }, "tl1")
        .to(".element1", { opacity: 0, duration: 1 }, "tl1")
        .to(".mask", { background: "#658896", duration: 1 }, "tl1")
        .to(".item2", { yPercent: 110, xPercent: -65, color: "#000", duration: 1 }, "tl1")
        .to([".span2"], { borderBottomColor: "#000", duration: 1 }, "tl1")
        .to([".img2", ".circle2"], { opacity: 1, duration: 1 }, "tl1")
        .to(".bg2", { background: "#fff", duration: 1 }, "tl1")
        .to(".element2", { opacity: 1, y: 0, duration: 1 }, "tl1")
        .to(".item3", { yPercent: 0, xPercent: 130, duration: 1 }, "tl1")
        .to(".img3", { opacity: 0, duration: 1 }, "tl1")
        .to(".circle3", { opacity: 0, duration: 1 }, "tl1")
        .to(".bg3", { background: "transparent", duration: 1 }, "tl1");

    // Case 2
    TL.to(".item1", { yPercent: -110, xPercent: 65, color: "#fff", duration: 1 }, "tl2")
        .to(".item2", { yPercent: 0, xPercent: -130, color: "#fff", duration: 1 }, "tl2")
        .to([".span2", ".span3"], { borderBottomColor: "#fff", duration: 1 }, "tl2")
        .to([".img2", ".circle2"], { opacity: 0, duration: 1 }, "tl2")
        .to(".bg2", { background: "transparent", duration: 1 }, "tl2")
        .to(".element2", { opacity: 0, duration: 1 }, "tl2")
        .to(".item3", { yPercent: 110, xPercent: 65, color: "#000", duration: 1 }, "tl2")
        .to(".element3", { opacity: 1, y: 0, duration: 1 }, "tl2")
        .to(".mask", { background: "#798D8A", duration: 1 }, "tl2")
        .to([".span3"], { borderBottomColor: "#000", duration: 1 }, "tl2")
        .to([".img3", ".circle3"], { opacity: 1, duration: 1 }, "tl2")
        .to(".bg3", { background: "#fff", duration: 1 }, "tl2");



    /* =============================================
      LINE UP スライド *gsap
     ============================================= */

    const e = gsap.timeline({
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".line-up",
            scrub: 1,
            start: "top 100%",
            end: "bottom 100%",
        },
    }),
        t = document.querySelectorAll(".product-inner-item");
    t.forEach(function (t, n) {
        e.addLabel("item_".concat(n)),
            e.fromTo(
                t,
                {
                    yPercent: 20,
                },
                {
                    yPercent: 0,
                    delay: 0.25,
                }
            );
    }),
        t.forEach(function (n, r) {
            for (var i = 0; t.length - r - 1 > i; i++)
                e.to(
                    n,
                    {
                        x: "".concat(9 * (i + 1), "rem"),
                        y: "".concat(-3 * (i + 1), "rem"),
                        delay: 0.25,
                    },
                    "item_".concat(i + 1 + r, "+=30%")
                );
        });

    e.scrollTrigger.refresh()

    /* =============================================
    コンセプト ボトル背景の動き ＊gsap
    ============================================= */

    gsap.to(".image", {
        y: -30,
        x: -20, // -X軸方向に移動
        ease: "cicr", // アニメーションのイージング(noneは定速)
        duration: 0.5,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".video1", // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top-=300 top", // アニメーションが始まる位置
        },
    });
    /* =============================================
    コンセプト ボトルの動き gsap
    ============================================= */

    gsap.to(".shampoo-img", {
        y: 120,
        ease: "cicr",
        duration: 0.5,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".video1",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top-=300 top",
        },
    });
    /* =============================================
    コンセプト 雫の動き gsap
    ============================================= */
    gsap.to(".drop-move", {
        y: 100,
        ease: "expo",
        duration: 1,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".mainvisual",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });
    gsap.to(".drop-move1", {
        y: 120,
        ease: "expo",
        duration: 1,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".concept",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });
    gsap.to(".drop-move2", {
        y: 50,
        ease: "expo",
        duration: 5,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".mask-img",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });
    gsap.to(".drop-move3", {
        y: 50,
        ease: "expo",
        duration: 5,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".video-right",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });
    gsap.to(".drop-move4", {
        y: 80,
        ease: "expo",
        duration: 1,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".concept",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });
    gsap.to(".drop-move5", {
        y: 80,
        ease: "expo",
        duration: 1,
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".video2",
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top top",
        },
    });



    /* =============================================
    Voice スライド ＊gsap
    ============================================= */

    const area = document.querySelector(".js-area");
    const wrap = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    const wrapperWidth = wrap.offsetWidth;

    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 90 / num + "%" });

    gsap.to(items, {
        xPercent: -100 * (num - 1),
        ease: "none",
        scrollTrigger: {
            trigger: area,
            start: "top top",
            // end: "bottom bottom",
            pin: true,
            scrub: 2,
            end: `+=${wrapperWidth}`, // アニメーションが終わる位置
            anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
            invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
            // markers: true,
        }
    });




});