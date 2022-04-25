// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

//enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// functions
var fight = function() {
    // alert that the round has started
    window.alert("Welcome to Robot Gladiators!");

    // subtract player attack from enemy health and update enemy health
    enemyHealth = enemyHealth - playerAttack;

    // log a message showing it worked
    console.log(
        playerName + " attacked " + enemyName + ". " +  enemyName + " now has " + enemyHealth + " health remaining."
    )

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract enemy attack from player health and update player health
    playerHealth = playerHealth - enemyAttack;

    // log a message showing it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}

fight();
