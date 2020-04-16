$(document).ready(function() {
  let targetScore = Math.floor(Math.random() * 101) + 19;

  $("#target-number").html(targetScore);

  let userScore = 0;

  let wins = 0;
  let loss = 0;

  const earth = $("#earth-element");
  const water = $("#water-element");
  const air = $("#air-element");
  const fire = $("#fire-element");
  const victoryDefeat = $("#victory-defeat");

  victoryDefeat.html("<h2>Lets Play!</h2>");

  let randomNum1 = Math.floor(Math.random() * 11) + 1;
  let randomNum2 = Math.floor(Math.random() * 11) + 1;
  let randomNum3 = Math.floor(Math.random() * 11) + 1;
  let randomNum4 = Math.floor(Math.random() * 11) + 1;

  const winOrLoss = () => {
    if (userScore === targetScore) {
      wins++;
      $("#wins").html("Wins: " + wins);
      victoryDefeat.html("<h2>Victory!</h2>");

      console.log("winner winner!");
      reset();
    } else if (userScore > targetScore) {
      loss++;
      $("#loss").html("Loss: " + loss);
      victoryDefeat.html("<h2>Defeat!</h2>");
      console.log("loser");
      reset();
    }
  };

  $(earth).on("click", () => {
    userScore += randomNum1;
    $("#user-number").html(userScore);
    console.log(userScore);

    winOrLoss();
  });

  $(water).on("click", () => {
    userScore += randomNum2;
    $("#user-number").html(userScore);
    console.log(userScore);

    winOrLoss();
  });

  $(air).on("click", () => {
    userScore += randomNum3;
    $("#user-number").html(userScore);
    console.log(userScore);

    winOrLoss();
  });

  $(fire).on("click", () => {
    userScore += randomNum4;
    $("#user-number").html(userScore);
    console.log(userScore);

    winOrLoss();
  });

  //reset
  const reset = () => {
    targetScore = Math.floor(Math.random() * 101) + 19;

    $("#target-number").html(targetScore);

    userScore = 0;

    $("#user-number").html(userScore);

    victoryDefeat;

    randomNum1 = Math.floor(Math.random() * 11) + 1;
    randomNum2 = Math.floor(Math.random() * 11) + 1;
    randomNum3 = Math.floor(Math.random() * 11) + 1;
    randomNum4 = Math.floor(Math.random() * 11) + 1;
  };
});
