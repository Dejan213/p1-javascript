let title = document.getElementById("title");
let btn = document.getElementById("btn");

let count = 0;

function clicker(){


    if(count >= 10) {
        count = 0;
    }else {
        count += 1;
    }
    title.innerText = count + "keer geklikt";
}




