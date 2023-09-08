    function addUser() {
    player1Name = document.getElementById("palyer1NameInput").Value;
    player2Name = document.getElementById("palyer2NameInput").Value;
  
    localStorage.setItem("player1Name",player1Name)
    localStorage.setItem("player2Name",player2Name)
    
    window.location = "game_page.html";
    }

    

    