// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function (enemyName) {
  // repeat as long as enemy is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    // fight or skip prompt
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if skip is selected stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if true, leave the fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("You now have " + playerMoney + " money remaining.");
        break;
      }
    } else if (promptFight === "fight" || promptFight === "FIGHT") {
      // subtract player health from enemy health and log it
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      // subtract enemy attack from player health and log it
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    } else {
      window.alert("You must choose a valid option. Try again!");
    }
  }
};

var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  //game logic
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + "!");
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      // if we're not the last enemy in the array, shop
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the shop before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost you robot in battle! Game Over!");
      break;
    }
  }
  // play again or exit
  endGame();
};

var endGame = function () {
  //if player is alive, they win, if not, they lose
  if (playerHealth < 0) {
    window.alert(
      "Great job, you've survived the game! You have a score of " +
        playerMoney +
        " ."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  // ask what the player would like to do
  var shopeOptionPrompt = window.prompt(
    "WOuld you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // switch to carry out action
  switch (shopeOptionPrompt) {
    // Refill
    case "REFILL": // fall through
    case "refill":
      if (playerMoney >= 7) {
        window.alert(
          "Refilling " + playerName + "'s health by 20 for 7 dollars."
        );
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don'd have enough money!");
        shop();
      }
      break;
    // Upgrade
    case "UPGRADE": // fall through
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading " + playerName + "'s attack by 6 for 7 dollars.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don'd have enough money!");
        shop();
      }
      break;
    // Leave
    case "LEAVE": // fall through
    case "leave":
      window.alert("Leaving the shop.");
      break;
    // anything else, invalid input
    default:
      window.alert("YOu did not pick a valid option. Try again!");
      shop();
      break;
  }
};

startGame();

//TODO:
//add fuction to repropmt shop after buying something
