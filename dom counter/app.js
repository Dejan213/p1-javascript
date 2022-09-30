let title = document.getElementById("title");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let count = 0;

//maak een functie genaamd clicker
function clicker(){
    count += 1;
    title.innerText = count + "keer geklikt";
    document.body.style.backgroundColor = "blue";
    btn.style.backgroundColor = "red";

}

function clicker2(){
    count -= 1;
    title.innerText = count + "keer geklikt";
    document.body.style.backgroundColor = "red";
    btn2.style.backgroundColor = "blue";

}
