
setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  document.querySelector(".display-time").innerHTML = date.toLocaleTimeString();
}