let closeBtn1 = document.getElementById("close1");
let closeBtn8 = document.getElementById("close8");
let showContainer1 = document.getElementById("show1");
let showContainer8 = document.getElementById("show8");
let img1 = document.getElementById("pic1");
let pic8 = document.getElementById("pic8");
let nextBtn8 = document.getElementById("next8");
let prevBtn1 = document.getElementById("prev1");

function closeShowPic1() {
  showContainer1.style.visibility = "hidden";
  showContainer1.style.opacity = '0'
  showContainer1.style.transition = "0.5s"
}
closeBtn1.onclick = closeShowPic1;
function closeShowPic8() {
  showContainer8.style.visibility = "hidden";
  showContainer8.style.opacity = '0'
  showContainer8.style.transition = "0.5s"
}
closeBtn8.onclick = closeShowPic8;


function showPic1() {
  showContainer1.style.visibility = "visible";
  showContainer1.style.opacity = '1'
  showContainer1.style.transition = "0.5s"
}
function clickOn1() {
  pic1.onclick = showPic1;
  prevBtn1.style.visibility = "hidden";
}
clickOn1();
function showPic8() {
  showContainer8.style.visibility = "visible";
  showContainer8.style.opacity = '1'
  showContainer8.style.transition = "0.5s"
}
function clickOn8() {
  pic8.onclick = showPic8;
  nextBtn8.style.visibility = "hidden";
}
clickOn8();
