var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName + " is ready for battle! " + playerHealth + "HP " + playerAttack + "AP.");

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create fight function 

var fight = function() {
    // alert that the round is starting
    window.alert("Welcome to Robot Gladiators!");
    // subtract the value of playerAttack from the value of enemyHealth and update enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to the console so we know it worked. 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "HP!"
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " HP.");
    };
    // subtract the value of enemyAttack from the value of playerHealth and update playerHealth variable
    playerHealth = playerHealth - enemyAttack;
    // log it
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "HP!"
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " HP.");
    };

};

// start fight
fight();