$(function () {

    window.addEventListener('resize', function () {
        location.reload();
        // setTimeout(function () {
        //     location.reload();
        // }, 2000);// ページを再読み込みする
    });
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
            // document.body.classList.add("modal-open");
        }, 10);
    };

    closeBtn.onclick = function () {
        asideModal.style.opacity = "0";
        setTimeout(function () {
            asideModal.style.display = "none";
            // document.body.classList.remove("modal-open");
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
            { src: "./img/home/img-01.png" },
            { src: "./img/home/img-02.png" },
            { src: "./img/home/img-03.png" },
            { src: "./img/home/img-04.png" },
        ];
    } else {
        var responsiveImage = [
            //タブレットサイズ（768px）以下用の画像
            { src: "./img/home/img-01.png" },
            { src: "./img/home/img-02.png" },
            { src: "./img/home/img-03.png" },
            { src: "./img/home/img-04.png" },
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
                trigger: ".obsession",
                scrub: 3,
                start: "top top",
                end: "bottom-=500 bottom",
            },
        });

        // case1
        TL.to(".element1", {
            opacity: 1,
            y: 0,
        })
            .to(
                ".item1",
                {
                    yPercent: -110,
                    xPercent: -65,
                    color: "#fff",
                },
                "tl1"
            )
            .to(
                ".span1",
                {
                    borderBottomColor: "#fff",
                },
                "tl1"
            )
            .to(
                ".img1",
                {
                    opacity: 0,
                },
                "tl1"
            )
            .to(
                ".circle1",
                {
                    opacity: 0,
                },
                "tl1"
            )
            .to(
                ".bg1",
                {
                    background: "transparent",
                },
                "tl1"
            )
            .to(
                ".element1",
                {
                    opacity: 0,
                    duration: 0.2,
                },
                "tl1"
            )

            .to(
                ".mask",
                {
                    background: "#658896",
                },
                "tl1"
            )
            .to(
                ".item2",
                {
                    yPercent: 110,
                    xPercent: -65,
                    color: "#000",
                },
                "tl1"
            )
            .to(
                ".span2",
                {
                    borderBottomColor: "#000",
                },
                "tl1"
            )
            .to(
                ".img2",
                {
                    opacity: 1,
                },
                "tl1"
            )
            .to(
                ".circle2",
                {
                    opacity: 1,
                },
                "tl1"
            )
            .to(
                ".bg2",
                {
                    background: "#fff",
                },
                "tl1"
            )
            .to(
                ".element2",
                {
                    opacity: 1,
                    y: 0,
                },
                "tl1"
            )

            .to(
                ".item3",
                {
                    yPercent: 0,
                    xPercent: 130,
                },
                "tl1"
            )
            .to(
                ".span3",
                {
                    borderBottomColor: "#fff",
                },
                "tl1"
            )
            .to(
                ".img3",
                {
                    opacity: 0,
                },
                "tl1"
            )
            .to(
                ".circle3",
                {
                    opacity: 0,
                },
                "tl1"
            )
            .to(
                ".bg3",
                {
                    background: "transparent",
                },
                "tl1"
            );

        const TL2 = gsap.timeline();
        TL2.to(
            ".item1",
            {
                yPercent: -110,
                xPercent: 65,
                color: "#fff",
            },
            "tl2"
        )
            .to(
                ".item2",
                {
                    yPercent: 0,
                    xPercent: -130,
                    color: "#fff",
                },
                "tl2"
            )
            .to(
                ".span2",
                {
                    borderBottomColor: "#fff",
                },
                "tl2"
            )
            .to(
                ".img2",
                {
                    opacity: 0,
                },
                "tl2"
            )
            .to(
                ".circle2",
                {
                    opacity: 0,
                },
                "tl2"
            )
            .to(
                ".bg2",
                {
                    background: "transparent",
                },
                "tl2"
            )
            .to(
                ".element2",
                {
                    opacity: 0,
                    duration: 0.2,
                },
                "tl2"
            )
            .to(
                ".item3",
                {
                    yPercent: 110,
                    xPercent: 65,
                    color: "#000",
                },
                "tl2"
            )
            .to(
                ".element3",
                {
                    opacity: 1,
                    y: 0,
                },
                "tl2"
            )
            .to(
                ".mask",
                {
                    background: "#798D8A",
                },
                "tl2"
            )
            .to(
                ".span3",
                {
                    borderBottomColor: "#000",
                },
                "tl2"
            )
            .to(
                ".img3",
                {
                    opacity: 1,
                },
                "tl2"
            )
            .to(
                ".circle3",
                {
                    opacity: 1,
                },
                "tl2"
            )
            .to(
                ".bg3",
                {
                    background: "#fff",
                },
                "tl2"
            );

        TL.add(TL2);

        /* =============================================
          LINE UP スライド *gsap
         ============================================= */

        const e = gsap.timeline({
            scrollTrigger: {
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

        /* =============================================
        コンセプト ボトル背景の動き ＊gsap
        ============================================= */

        gsap.to(".image", {
            y: -30,
            x: -20, // -X軸方向に移動
            ease: "cicr", // アニメーションのイージング(noneは定速)
            duration: 0.5,
            scrollTrigger: {
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
                trigger: ".concept .text",
                toggleActions: "play none none reverse",
                scrub: 1,
                start: "top-=200 top",
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

        gsap.set(wrap, { width: num * 100 + "%" });
        gsap.set(items, { width: 90 / num + "%" });

        gsap.to(items, {
            xPercent: -100 * (num - 1),
            ease: "none",
            scrollTrigger: {
                invalidateOnRefresh: true,
                trigger: area,
                start: "top top",
                end: "bottom+=2000 top",
                pin: true,
                scrub: true,
            }
        });


    // initAnimation();

    // // リロード時にアニメーションを再初期化
    // window.addEventListener("beforeunload", function () {
    //     gsap.registerPlugin(ScrollTrigger); // プラグインを再度登録
    //     initAnimation(); // アニメーションを再初期化
    // });




});