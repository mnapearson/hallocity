var deadline = new Date("may 1, 2021, 9:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + ": " + hours + ": " + minutes + ": " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "NEW RELEASE!";
  }
}, 1000);
