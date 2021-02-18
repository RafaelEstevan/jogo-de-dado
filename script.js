// Player name 
const j1 = "Jogador 1"; 
const j2 = "Jogador 2"; 

function jogar() { 
     
        const randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        const randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        document.querySelector(".img1").setAttribute("src", 
            "dice" + randomNumber1 + ".png"); 

        document.querySelector(".img2").setAttribute("src", 
            "dice" + randomNumber2 + ".png"); 

        if (randomNumber1 === randomNumber2) { 
            document.querySelector("h1").innerHTML = "Empate"; 
        } 

        else if (randomNumber1 < randomNumber2) { 
            document.querySelector("h1").innerHTML 
                = (j2 + " Venceu!"); 
        } 

        else { 
            document.querySelector("h1").innerHTML 
                = (j1 + " Venceu!"); 
        } 
} 