function add_user(){
    var player_name_1 = document.getElementById("player1_name").value;
    var player_name_2 = document.getElementById("player2_name").value;
    
    localStorage.setItem("player1", player_name_1);
    localStorage.setItem("player2", player_name_2);
    
    window.location = "game_page.html"
    }