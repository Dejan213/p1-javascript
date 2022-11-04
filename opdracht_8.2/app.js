let title = document.getElementById("title")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

function add() {
    if (input1.value > 0 && input2.value > 0){
    let answer = Number(input1.value) + Number(input2.value)

    title.innerText = "Het Antwoord = " + answer;
    }
}

function multiply() {
    if (input1.value > 0 && input2.value > 0){
    let answer = input1.value * input2.value

    title.innerText = "Het Antwoord = " + answer;
    }
}

function devide() {
    if (input1.value > 0 && input2.value > 0){
    let answer =  input1.value / input2.value

    title.innerText = "Het Antwoord = " + answer;
    }
}

function minus() {
    if (input1.value > 0 && input2.value > 0){
    let answer =  input1.value - input2.value

    title.innerText = "Het Antwoord = " + answer;
    }
}