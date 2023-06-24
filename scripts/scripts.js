function check() {
  var nameInput = document.getElementById("login").value;
  if (nameInput == "" || nameInput.length == 0 || nameInput == null) {
    alert("Please enter your name");
  } else {
    result.innerHTML = "<strong>Добро пожаловать, " + nameInput + "!</strong>";
    start.innerHTML = "<a class='startLink' href='pages/game.html'>Начать</a>";
  }
}
