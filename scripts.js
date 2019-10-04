var options = {
  strings: ["better grades", "time management", "fitness", "making good friends", "reducing stress"],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 3000,
  cursorChar: '_',
  loop: true
}

var typed = new Typed("#options", options);

var learnMore = document.getElementById('learnMore');
var learnMoreForm = document.getElementById('learnMoreForm')
learnMore.onclick = function () {
  if (learnMoreForm.style.maxHeight) {
    learnMoreForm.style.maxHeight = null;
  } else {
    learnMoreForm.style.maxHeight = learnMoreForm.scrollHeight + "px";
  }
}