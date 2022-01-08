

/*scroll top top*/
const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

/*Navigation*/
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

/*scroll bar*/
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
progress.style.height = progressHeight + "%";
}

/*clip-path*/
let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText')
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center center)";
    text.style.left = 100 - value/5 + '%';
    innerText.style.left = 100 - value/5 + '%';
})
