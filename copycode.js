document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName('code-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        var code = document.querySelector(this.getAttribute('data-code')).innerText.trim();
        copyToClipboard(code);
        alert('Code Copied: ' + code);
      });
    }
  });
  
  function copyToClipboard(text) {
    var temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }
  