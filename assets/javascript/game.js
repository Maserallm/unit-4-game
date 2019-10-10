

$(document).ready(function() {

    let targetScore = Math.floor(Math.random() * 101) + 19;
    
    $("#target-number").html(targetScore);

    let userScore = 0;
    
    let wins = 0;
    let loss = 0;

    let earth = $("#earth-element");
    let water = $("#water-element");
    let air = $("#air-element");
    let fire = $("#fire-element");

    let randomNum1 = Math.floor(Math.random() * 12) + 1;
    let randomNum2 = Math.floor(Math.random() * 12) + 1;
    let randomNum3 = Math.floor(Math.random() * 12) + 1;
    let randomNum4 = Math.floor(Math.random() * 12) + 1;

    $(earth).on("click", function () {

        userScore += randomNum1;
        $("#user-number").html(userScore);
        console.log(userScore);

        if (userScore === targetScore) {
            $("#wins").html("Wins: " + wins++);
            console.log("winner winner!");
            reset();
        } else if (userScore > targetScore) {
            $("#loss").html("Loss: " + loss++);
            console.log("loser")
            reset();
        }
    });

    $(water).on("click", function () {

        userScore += randomNum2;
        $("#user-number").html(userScore);
        console.log(userScore);

        if (userScore === targetScore) {
            $("#wins").html("Wins: " + wins++);
            console.log("winner winner!");
            reset();
        } else if (userScore > targetScore) {
            $("#loss").html("Loss: " + loss++);
            console.log("loser")
            reset();
        }
    });

    $(air).on("click", function () {

        userScore += randomNum3;
        $("#user-number").html(userScore);
        console.log(userScore);

        if (userScore === targetScore) {
            $("#wins").html("Wins: " + wins++);
            console.log("winner winner!");
            reset();
        } else if (userScore > targetScore) {
            $("#loss").html("Loss: " + loss++);
            console.log("loser")
            reset();
        }
    });

    $(fire).on("click", function () {

        userScore += randomNum4;
        $("#user-number").html(userScore);
        console.log(userScore);

        if (userScore === targetScore) {
            $("#wins").html("Wins: " + wins++);
            console.log("winner winner!");
            reset();
        } else if (userScore > targetScore) {
            $("#loss").html("Loss: " + loss++);
            console.log("loser")
            reset();
        }
    });

    //reset
    function reset() {
        targetScore = Math.floor(Math.random() * 101) + 19;
    
        $("#target-number").html(targetScore);
        userScore = 0;

        randomNum1 = Math.floor(Math.random() * 12) + 1;
        randomNum2 = Math.floor(Math.random() * 12) + 1;
        randomNum3 = Math.floor(Math.random() * 12) + 1;
        randomNum4 = Math.floor(Math.random() * 12) + 1;
    }





});

