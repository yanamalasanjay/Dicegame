var player1;
var player2;
function myFunction2() {
    var randomNumber1 = Math.floor(6 * Math.random()) + 1;
    var randomNumber2 = Math.floor(6 * Math.random()) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".jpg";
    document.getElementById("img1").setAttribute("src", randomDiceImage);
    var randomDiceImage2 = "dice" + randomNumber2 + ".jpg";
    document.getElementById("img2").setAttribute("src", randomDiceImage2);
    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerText = player1 + " wins"
    }
    else if (randomNumber1 < randomNumber2) {
        document.getElementById("result").innerText = player2 + " wins"
    }
    else {
        document.getElementById("result").innerText = "Draw!";
    }
}
function myFunction() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
    document.getElementById("p1").innerText = player1;
    document.getElementById("p2").innerText = player2;
    document.getElementById("start").remove();
    document.getElementById("container").style.visibility = "visible";
}
