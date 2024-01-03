
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Establece "player1_name" usando la función localStorage.setItem()
	  //Establece "player2_name" usando la función localStorage.setItem()

  player1_namelocalStorage.setItem("player1_name");
  player2_namelocalStorage.setItem("player2_name");

    window.location = "game_page.html";
}

