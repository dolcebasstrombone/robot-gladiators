//variable functions
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var fight = function (enemy) {
  // repeat as long as enemy is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
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
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("You now have " + playerInfo.money + " money remaining.");
        break;
      }
    } else if (promptFight === "fight" || promptFight === "FIGHT") {
      // subtract player health from enemy health and log it
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money = playerInfo.money + 20;
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // subtract enemy attack from player health and log it
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
    } else {
      window.alert("You must choose a valid option. Try again!");
    }
  }
};

var startGame = function () {
  //reset player stats
playerInfo.reset();
  //game logic
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + "!");
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      // if we're not the last enemy in the array, shop
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health < 0) {
    window.alert(
      "Great job, you've survived the game! You have a score of " +
        playerInfo.money +
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
      playerInfo.refillHealth();
      break;
    // Upgrade
    case "UPGRADE": // fall through
    case "upgrade":
      playerInfo.upgradeAttack();
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

// player variables
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

//enemy variables
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

startGame();

//TODO:
//add fuction to repropmt shop after buying something
//start enemies with random health between 40 and 60
//as well as random attack from 10 to 14
//attack damage is random, using players attack value as upper limit. ex, attack=10, damage can be 7-10

//use objects to organize player and enemy data
//create objects to perform player actions
