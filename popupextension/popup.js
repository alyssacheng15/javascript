document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickMe").onclick = handleClick;
  });

function handleClick() {
    document.getElementById("message").textContent = "Button Clicked!";
    var button = document.getElementById("clickMe");
    button.parentNode.removeChild(button);
  }  