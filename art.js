/*scroll top top*/
const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


/*scroll bar*/
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
progress.style.height = progressHeight + "%";
}

/*Navigation*/
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const position = document.documentElement;
position.addEventListener("mousemove", e => {
  position.style.setProperty('--x', e.clientX + 'px');
})
