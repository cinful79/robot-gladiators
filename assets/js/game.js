//Game States
// startGame()
// "WIN" - Player robot has defeated all the enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less | the game ends and all activity stops
//
//fight()
//  * make a fight sequence that loops through each robot until
//  player dies or robot dies

//endGame()
//  * alert player's total stats
//  * asks the player if they want to play again
//  * if yes call startGame() to restart the game
// - After skipping or defeating an enemy while theres more robots to fight still
//      * ask player if they want to "shop"
//      * if no continue as normal
//      * if yes call the shop() function
//      * in shop(), ask player if they want to refill health, upgrade attack, or leave the shop
//      * if refill, subtract money points from the player and increase health
//      * if upgrade, subtract money points from the play and increase power
//      * if leave, alert goodbye and exit the function
//      * if any other invalid option, call shop() again
//
//randomnumber()
//  * create function to generate random numbers for health and attacks
//  of the players and enemies


//caution! javascript started!
window.alert("Welcome to Robot Gladiators! A console based text RPG- to begin: open the browser console and type startGame(); then press enter!");
//function for getting player name and return the value of the function as the value stored in the variable name
//loops while there is a blank name or a null return from the prompt
var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
        console.log("Your robot's name is: " + name);
        console.log("To start playing type startGame(); into the console and hit ENTER")
    }
    return name;
}

//function for handling the fight or skip prompt issue of the nothing input or null input
var fightOrSkip = function(){
    //ask user if they'd like to fight or skip using this function
    var promptFightOrSkip = window.prompt ("ITS YOUR TURN!!! Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    //conditional recursive function call here!
    if (promptFightOrSkip === "" || promptFightOrSkip === null){
        window.alert("You need to provide a valid answer! Please try again.");
        //returns the function call of its own function call so that the function starts all over again.
        //ask the question again!!!!
        return fightOrSkip();//return the function call as the value of the function call to call the function again
    }
    //if user picks "fight" confirm the fight then continue the block of code in the 
    //fight() function that handles all the fight messages and the calculations
    if(promptFightOrSkip === "fight" || promptFightOrSkip === "FIGHT"){
        //RIGHT NOW IF SOMEONE TYPES ANYTHING EXCEPT A BLANK OR NULL IT FIGHTS YOU COULD TYPE HOLY BOB SAGET AND IT WILL CONTINUE FIGHTING
        //continue on the block of code in fight() 
    }
    //if user picks "skip" confirm and then stop the loop and proceed with confirm skip
    if (promptFightOrSkip === "skip" || promptFightOrSkip === "SKIP"){
        //confirm the user wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
        //if yes (true), leave battle
        if (confirmSkip){//is true
            window.alert(playerInfo.name + "has decided to skip this fight!");
            //subtract money from playerMoney for skipping
            playerInfo.money = playerInfo.money - 10;
            console.log("Viking has lost money from skipping battle and now has: " + playerInfo.money + " Rubles.");
            shop();
            return true;
        }
    }
}

//THESE GLOBAL VARIABLES CAN CHANGE WHEN DECLARED AGAIN INSIDE A FUNCTION
//declaring global variables for player name, health, and attack
//CREATING AS OBJECTS IN NEW VARIABLE playerInfo
var playerInfo = 
{
    name: getPlayerName(),
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },//COMMA!!!!!!!!!!!!!
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 Rubles.");
            this.health +=20;
            this.money -= 7;
            console.log(this.name + "'s health is now: " + this.health);
            console.log(this.name + " has left the shop.");
        } else {
            window.alert("You don't have enough money!");
            console.log(this.name + " has left the shop.");
        }
    },// comma here please
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 Rubles.");
            this.attack += 6;
            this.money -= 7;
            console.log(this.name + "'s attack is now: " + this.attack);
            console.log(this.name + " has left this shop.");
        } else {
            window.alert("You don't have enough money!");
            console.log(this.name + " has left the shop.");
        }
    }//NO COMMA HERE NOT ADDING ANYTHING ELSE 
};

//declaring global variables for enemy names health and attack
//CREATING AS OBJECTS IN NEW VARIABLE ARRAY enemyInfo instead of the enemyInfo
//NEED TO DEFINE randomNumber() BEFORE ITS CALLED FROM THIS GLOBAL OBJECT VARIABLE FOR USE...BUT I CAN CALL THE FUNCTION EXPRESSION FROM WITHIN ANOTHER FUNCTION REGARDLESS OF WHERE THE FUNCTION EXPRESSION IS PLACED
var randomNumber = function (min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var enemyInfo = 
[
    {
        name: "Darth Zannah",
        attack: randomNumber(10,14),
        // shield: {
        //     type: "wood",
        //     strength: 10
        // }//MAYBE IN THE FUTURE enemyInfo.shield.type: "string" | enemyInfo.shield.strength: integer etc.
    },
    {
        name: "Desann",
        attack: randomNumber(10, 14)
    },
    {
        name: "<TNT>Viking-M",
        attack: randomNumber(10, 14)
    }
];
//NO LONGER USING THESE
//enemy health is now defined and generated randomly within functions since global variables can always change within functions
//var enemyHealth = 13;
//var enemy.attack = 12;



//argument (pickedEnemyObj) is passed into this parameter (enemy) inside the for loop when calling fight(pickedEnemyObj)
var fight = function(enemy, i) {//passing i into here to display stats of current enemy
    
    while(enemy.health > 0 && playerInfo.health > 0){
    //initializing player turn variable for the upcoming conditional statement
    var isPlayerTurn = true;
    //THE FIGHT SEQUENCE NEEDS TO BE SPLIT UP TO MATCH THE CONDITIONAL STATEMENT. 
    console.log(Math.random());
    var turn = Math.random();
    console.log(turn + " turn random value calculated");
    if(turn < 0.5){//if turn value is less than 0.5 its not player turn
        isPlayerTurn = false;
        console.log("ENEMY TURN!!!")
        //ENEMY FIGHT CODE HERE
        //ENEMY ATTACK
        console.log("It's the enemies' turn!!!!")
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);//CALCULATE ENEMY ATTACK AGAINST PLAYER HEALTH NO NEGATIVE NUMBERS
        //Log the enemy attacking the player
        console.log(enemy.name + " dealt " + damage + " damage!")
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        console.log(playerInfo);
        //CHECK playerInfo.health
        if(playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            console.log(
                playerInfo.name + " has died!"
            );
            break;//PLAYER IS DEAD BREAK OUT OF THE WHILE LOOP
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            console.log(playerInfo);
        }
    }//no need for else...it is assumed that if math.random < 0.5 then isPlayerTurn will keep the same stored value: true
    //repeat and execute as long as the enemy robot is alive AND if the player robot is alive
        if (isPlayerTurn){//player turn is true ask if they want to skip..
            console.log("its the player's turn!!! choose fight or skip!!!")
            //ask user if they want to fight or skip using fight or skip....okay theres no fight conditional inside our function....sooooo did i miss something??????
            if(fightOrSkip()){//this is a nested if conditional statement so its not calling this function until ITS MY TURN to fight (THE ENEMY COULD HAVE ATTACKED ALREADY) which is currently only handling the empty and null inputs and also the skip option to go into the shop...which i dont get why calling shop wayyy up there makes shop work if shop is declared AT THE BOTTOM!!!!!!!!!!!!WHAT!!!!!!
                //function is returning the value true so we're asking if (true) is true then break the } else { would be saying if true is false...but we dont care about that. just the true that we skipped and break out of the while loop
                break;//if true TO SKIP, leave fight by breaking out of the while loop GO TO THE NEXT ROBOT OR IF ITS THE LAST ROBOT THE GAME ENDS
            }//no else here
            //PLAYER ATTACKS CODE HERE
            //PLAYER ATTACK
            //console.log("its the player's turn!!!")
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);//CALCULATE THE PLAYER ATTACK AGAINST ENEMY HEALTH this will prevent negative health number values from appearing
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " dealt " + damage + " damage!")
            console.log("Enemy Stats: ");
            console.log(enemyInfo[i]);

            //CHECK ENEMY HEALTH
            if(enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            console.log(
                enemy.name + " has died!"
            );
            playerInfo.money = playerInfo.money + 10;
            console.log("Viking has won money from winning the battle and now has: " + playerInfo.money + " Rubles.");
            break;//ENEMY HAS DIED BREAK OUT OF THE IF ELSE STATEMENT
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }    
        }
        
    }//END OF WHILE LOOP ENEMY'S HEALTH OR PLAYER HEALTH IS NOT GREATER THAN ZERO

};


var startGame = function(){
    //debugger;
    playerInfo.reset();
    // playerInfo.health = 100;
    // playerInfo.money = 10;
    // playerInfo.attack = 40;
    console.log(playerInfo.name + " has entered the battlefield!");
    console.log(playerInfo.name + "'s current stats: ");
    console.log(playerInfo);

    for(var i = 0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            //let user know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            console.log(
                "Welcome to Robot Gladiators! Round " + ( i + 1 ) 
            );
            //pick new enemy to fight based on the index number of the enemys array
            var pickedEnemyObj = enemyInfo[i];
            console.log(pickedEnemyObj.name + " has approached the battle!");
            //display the enemyInfo object info in this case our argument matches the array of objects we created above. and not the startgame function below.
            console.log("Enemy Stats: ");
            console.log(enemyInfo[i]);
            //reset pickedEnemyObj.health to a random number between 0 and 59.xx before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            //use debugger to pause the script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy parameter
            //passing the i as the parameter to refer back to the enemy's object info in the console
            fight(pickedEnemyObj, i);
            //AFTER THE FIGHT ENDS THE WHILE LOOP IS EXITED AND CODE WILL CONTINUE BELOW THIS LINE
            //if we're not at the last enemy in the array
            //ensures that shop() is called after every fight
            //but only if the loop iterator, i, still has room to increment
            // if i < the last index number in the array...basically
            if (i < /*2*/ enemyInfo.length - 1 && playerInfo.health > 0) {//fixed this part, the player was going into the store if he died. since we added the randomizer LOL
                shop();//set to enemyInfo.length - 1 so that the cycle is functioning logically in case later the amount of enemy robots changes, I dont need to change this line at all. this will always iterate the way i want it.
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    //startGame(); //when placed here calling a function inside its own function call causes an infinite loop
    //after all the robots are dead or your die, enter endGame() function
    endGame();//this enters the endGame sequence to choose if you want to play again or quit playing
};

var endGame = function(){
    window.alert("The game has ended. Let's see how you did!")
    console.log(
        "The game has ended. Let's see how you did!"
        );
        //check local storage for high score, if it's not there use 0
        var highScore = localStorage.getItem("High Score");
        if(highScore === null){
            highScore = 0;
        }
        //compare the player robot score with current high score
        //if player score is higher, set new high score (my game contains Rubles as score)
        if (playerInfo.money > highScore){
            // *set new high score object into localStorage
            localStorage.setItem("High Score", playerInfo.money);
            // *set new player robot's name object into local storage
            localStorage.setItem("name", playerInfo.name);

            // send player the message that they beat the high score.
            window.alert(playerInfo.name + " you beat the high score! and now have the score of " + playerInfo.money);
        } else {
            //iff current stored score is higher, send message player did not beat high score
            window.alert(playerInfo.name + " did not beat the high score of " + highScore);
        }
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You have won a total of " + playerInfo.money + " Rubles.");
        console.log("Great job, you've survived the game! Here are your final character stats!");
        console.log(playerInfo.name + "'s current stats: ");
        console.log("Attack: " + playerInfo.attack);
        console.log("Health: " + playerInfo.health);
        console.log("Money: " + playerInfo.money);
        console.log(playerInfo);
    } else {
        window.alert("You've lost your robot in battle!");
        console.log(
            "You've lost your robot in battle!"
        );
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    //if user confirms yes OK playAgainConfirm = true
    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        console.log(
            "Thank you for playing Robot Gladiators! Come back soon!"
        );
    }
};//after the else statement there is no more instruction so the function ends and the game stops

var shop = function(){
    console.log(playerInfo.name + " entered the shop");
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        playerInfo.name + " has entered the Shop\nWould you like to:\n1: to refill health\n2: to upgrade your attack\n3: to leave the shop\nAfter your choice press ENTER or click OK."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1 :
            playerInfo.refillHealth();
            break;
        case 2 :
            playerInfo.upgradeAttack();
            break;
        case 3 :
            window.alert("Leaving the shop.");
            console.log(playerInfo.name + " has left the shop.")
            //do nothing here so function ends
            break;
    default:
        window.alert("You did not pick a valid option. Try again.");
        console.log("You did not pick a valid option. Try again.");
        //call shop() again to force player to pick a valid option
        shop();
        break;
    }
}

//create function to execute to generate a number
//assigning parameters to the randomNumber() function - min, and max