function remover(elemento){
    elemento.remove()
}

let likes = Number(document.getElementById("likes").textContent);

function like(element){
    likes += 1;
    element.innerText = likes + " likes";
    alert("This page says \n Ninja was liked")
}

let login = document.getElementById("login").textContent;

function cambio(eleme){
    if (login==="Login"){
        eleme.innerText = "Logout"
        login = "Logout"
    }else if (login==="Logout"){
        eleme.innerText = "Login"
        login = "Login"
    }
    
}

let liker = Number(document.getElementById("liked").textContent);

function liked(element){
    liker += 1;
    element.innerText = liker + " likes";
    alert("This page says \n Ninja was liked")
}