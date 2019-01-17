filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("projects");
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
  }
}
