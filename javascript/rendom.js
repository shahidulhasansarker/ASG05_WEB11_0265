function randomNumber(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}