document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details").forEach(function (el) {
    const summary = el.querySelector(".btn");
    const answer = el.querySelector(".answer");
    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = answer.animate(closingAnimation(answer), animTiming);

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open");
        };
      } else {
        // open属性を付与
        el.setAttribute("open", "true");
        // アコーディオンを開くときの処理
        const openingAnim = answer.animate(openingAnimation(answer), animTiming);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details2").forEach(function (el) {
    const summary2 = el.querySelector(".btn2");
    const answer2 = el.querySelector(".answer2");
    summary2.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open2") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = answer2.animate(closingAnimation(answer2), animTiming);

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open2");
        };
      } else {
        // open属性を付与
        el.setAttribute("open2", "true");
        // アコーディオンを開くときの処理
        const openingAnim = answer2.animate(openingAnimation(answer2), animTiming);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details3").forEach(function (el) {
    const summary3 = el.querySelector(".btn3");
    const answer3 = el.querySelector(".answer3");
    summary3.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open3") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = answer3.animate(closingAnimation(answer3), animTiming);

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open3");
        };
      } else {
        // open属性を付与
        el.setAttribute("open3", "true");
        // アコーディオンを開くときの処理
        const openingAnim = answer3.animate(openingAnimation(answer3), animTiming);
      }
    });
  });
});

// アニメーションの時間とイージング
const animTiming = {
  duration: 300,
  easing: "ease-in-out",
};

// アコーディオンを閉じるときのキーフレーム
const closingAnimation = (answer) => [
  {
    height: answer.offsetHeight + "px",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];

// アコーディオンを開くときのキーフレーム
const openingAnimation = (answer) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: answer.offsetHeight + "px",
    opacity: 1,
  },
];


// ボタンの文字変更
var button = document.getElementById('toggleTextButton');
var displayText = document.getElementById('displayText');
var isTextVisible = true;

button.addEventListener('click', function() {
    isTextVisible = !isTextVisible; // トグル
    displayText.innerText = isTextVisible ? '+　続きをみる' : '-　隠す';
});


var button = document.getElementById('toggleTextButton2');
var displayText2 = document.getElementById('displayText2');
var isTextVisible = true;

button.addEventListener('click', function() {
    isTextVisible = !isTextVisible; // トグル
    displayText2.innerText = isTextVisible ? '+　続きをみる' : '-　隠す';
});


var button = document.getElementById('toggleTextButton3');
var displayText3 = document.getElementById('displayText3');
var isTextVisible = true;

button.addEventListener('click', function() {
    isTextVisible = !isTextVisible; // トグル
    displayText3.innerText = isTextVisible ? '+　続きをみる' : '-　隠す';
});


// $(function () {
//   $('.details-summary').click(function(){
//     $(this).toggleClass('active');
//     $(this).next('.details-content').toggleClass('active');
//   });
// });


  // ハンバーガーメニューをクリックした時
  $(".btn").on("click", function () {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $(".list").toggleClass("open");
  });
  // ハンバーガーメニューをクリックした時
  $(".btn2").on("click", function () {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $(".list2").toggleClass("open2");
  });
  // ハンバーガーメニューをクリックした時
  $(".btn3").on("click", function () {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $(".list3").toggleClass("open3");
  });
