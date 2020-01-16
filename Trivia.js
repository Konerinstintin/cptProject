function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;

        } else {
            localStorage.clickcount = 1;
        }
    } else {
        localStorage.clickcount = 1;
    }
}



function result() {
    document.getElementById("score").innerHTML = (((localStorage.clickcount / 12) * 100).toFixed(0)) + "%";
    var desision = (((localStorage.clickcount / 12) * 100).toFixed(0));

    if (desision < 80) {

        document.getElementById("result").innerHTML = ("Sorry but you have scored less than the required amount to unlock the online quiz please click &#34;Reset&#34; and try agian");
    } else if (desision <= 100) {

        document.getElementById("result").innerHTML = ("Congradulations you have scored more than 80% on the quiz, you can now continue to the next online quiz<br><br>https://www.google.ca");

    } else if (desision > 100) {
        document.getElementById("result").innerHTML = ("Error press reset");
    } else {
        document.getElementById("result").innerHTML = ("You did not get anything right please press reset");
    }
}

function deleteItems() {
    localStorage.clear();
}
