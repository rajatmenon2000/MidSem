function buttonOn(){
    let button = document.getElementById("but");
    button.innerHTML = "Don't press me!"
}

function buttonOff(){
    let button = document.getElementById("but");
    button.innerHTML = "Press me!";
}

function changeColour(){
    let body = document.getElementById("body");
    body.style.backgroundColor = 'red';
    let para = document.getElementById("para");
    para.style.display = 'block';
}