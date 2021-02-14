var blackBtn = document.getElementById("btn1");
var redBtn = document.getElementById("btn2");
var purpleBtn = document.getElementById("btn3");
var pinkBtn = document.getElementById("btn4");
var timeBtn = document.getElementById("timeBtn");
var heartBtn = document.getElementById("heartBtn");
var image = document.getElementById("TheImage");

blackBtn.addEventListener("click", function () {
  image.src = "Images/black.png";
  image.alt = "Black Watch";
});

redBtn.addEventListener("click", function () {
  image.src = "Images/red.png";
  image.alt = "Red Watch";
});

purpleBtn.addEventListener("click", function () {
  image.src = "Images/purple.png";
  image.alt = "PurpleWatch";
});

pinkBtn.addEventListener("click", function () {
  image.src = "Images/pink.png";
  image.alt = "Pink Watch";
});

var clockTimer = () => {
  document.getElementById("heart").style.visibility = "hidden";
  document.getElementById("heartRate").style.visibility = "hidden";
  document.getElementById("time").style.visibility = "visible";

  setInterval(function () {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
  }, 0);
};

clockTimer();

timeBtn.addEventListener("click", clockTimer);

var heartBeat = () => {
  document.querySelector(".Time").style.visibility = "hidden";
  document.querySelector("#heart").style.visibility = "visible";
  document.querySelector("#heartRate").style.visibility = "visible";
};

heartBtn.addEventListener("click", heartBeat);
