/*scroll tI op top*/
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

/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

function view_topics(bId,mId,cId){
  // Get the modal
var modal = document.getElementById(mId);

// Get the button that opens the modal
var btn = document.getElementById(bId);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName(cId)[0];
  
modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}