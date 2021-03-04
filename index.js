var deadline = new Date("may 1, 2021, 9:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 WE'RE LIVE !";
  }
}, 1000);

var speechBubble = document.getElementById("speech-bubble");
var speechBubbleTwo = document.getElementById("speech-bubble-two");

document.getElementById("my_button").onclick = function () {
  document.getElementById("mce-EMAIL").focus();
  speechBubble.classList.add("speech-bubble");
  speechBubble.classList.remove("speech-bubble-hidden");
  speechBubbleTwo.classList.add("speech-bubble");
  speechBubbleTwo.classList.remove("speech-bubble-hidden");
};
