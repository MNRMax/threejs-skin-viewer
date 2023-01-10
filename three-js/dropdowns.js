var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var icon = this.children[1]
    if (icon.style.transform == 'rotate(0deg)') {
        icon.style.transform = 'rotate(-90deg)';
    }
    else {
        icon.style.transform = 'rotate(0deg)';
    }
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
