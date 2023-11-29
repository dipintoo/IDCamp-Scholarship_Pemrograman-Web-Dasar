document.querySelectorAll("input.variation").forEach(function (input) {
  input.addEventListener("click", function () {
    if (parseInt(this.value) > 1) {
      document.body.style.background = "#23262a";
      document.querySelector("footer").className = "dark";
    } else {
      document.body.style.background = "#f9f9f9";
      document.querySelector("footer").className = "";
    }
  });
});
