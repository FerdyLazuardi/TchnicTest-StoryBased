const playerQueue = [1, 2, 3, 4, 5, 6, 7];

const yourPosition = playerQueue.length;
// console.log(yourPosition);

const impostorPosition = playerQueue[5];
// console.log(impostorPosition);

if (yourPosition % impostorPosition === 1) {
  console.log("Go away!, don't kill my friend!");
} else {
  const playerToWarn = playerQueue.indexOf(yourPosition);
  //   console.log(playerToWarn);
  console.log(
    `Hey, Player number ${playerToWarn}, RUNN!!! That impostor will kill you!`
  );
}
