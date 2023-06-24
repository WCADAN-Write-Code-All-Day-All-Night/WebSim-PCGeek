// window.onload = function () {
//   document.getElementById("check").onclick = function () {
//     var nameInput = document.getElementById("login").value;
//     if (nameInput == "" || nameInput.length == 0 || nameInput == null) {
//       alert("Please enter your name");
//     }
//   };
// };

function check() {
  var nameInput = document.getElementById("login").value;
  if (nameInput == "" || nameInput.length == 0 || nameInput == null) {
    alert("Please enter your name");
  } else {
    result.innerHTML = "Добро пожаловать " + nameInput;
  }
}
