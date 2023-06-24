// Your code here
function moveDodgerLeft(){
    var leftNumber = dodger.style.left.replace("px","");
    var left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = left - 10 + "px";
    }

}
function moveDodgerRight(){
    var leftNumber = dodger.style.left.replace("px","");
    var left = parseInt(leftNumber, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Arrowleft"){
        moveDodgerLeft();
    }
});

document.addEventListener("keydown",(e) => {
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});
