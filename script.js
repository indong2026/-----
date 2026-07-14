const startPage = document.getElementById("startPage");
const questionPage = document.getElementById("questionPage");

const startBtn = document.getElementById("startBtn");
const yesBtns = document.querySelectorAll(".yes");
const noBtns = document.querySelectorAll(".no");

const correct = document.getElementById("correct");

const pages = document.querySelectorAll(".page");
let current = 0;

yesBtns.forEach((btn) => {
  btn.onclick = () => {
    correct.classList.add("show");

    setTimeout(() => {
      correct.classList.remove("show");
      nextPage();
    }, 1000);
  };
});

startBtn.onclick = () => {
  nextPage();
};

function nextPage() {
  if (current >= pages.length - 1) return;

  pages[current].classList.remove("active");

  current++;

  pages[current].classList.add("active");
}

noBtns.forEach((btn) => {
  btn.onclick = () => {
    const activePage = document.querySelector(".page.active");

    document.body.classList.add("error");
    activePage.classList.add("errorShake");

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }

    setTimeout(() => {
      document.body.classList.remove("error");
      activePage.classList.remove("errorShake");
    }, 500);
  };
});