console.log("-------Navigating the Food Chain-------");
var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants && eatsAnimals ? "omnivore" :
               eatsPlants ? "herbivore" :
               eatsAnimals ? "carnivore" :
               undefined;
console.log(category);


console.log("-------Musical Groups-------");
var musicians = 1;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}


console.log("-------Murder mystery--------");
var room = "billiards room"; 
var suspect = "Mrs. Sparr"; 
var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
} else if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
}
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


console.log("-------Checking Your Balance--------");
var balance = -325;
var checkBalance = true;
var isActive = true;
if (checkBalance) {  
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (!isActive) {
        console.log("Your account is no longer active");
    } else if (balance === 0) {
        console.log("Your account is empty");
    } else if (balance < 0) {
        console.log("Your balance is negative. Please contact the bank");
    }
} else{
    console.log("Thank you. Have a nice day!");
}


console.log("-------Ice Cream--------");
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";
if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")){
    
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}
console.log("==========================================================================================");
console.log("-------------------------challenge Number 1-----------------------------------------------");
function reverseString(str) {
    if (str.length < 3) {
        console.log ("This String Is Too Short");
    } else {
        let reversed = str.split('').reverse().join('');
        console.log(reversed);
    }
}
reverseString("Hi");      
reverseString("Hello");    
console.log("-------------------------challenge Number 2-----------------------------------------------");

function checkWord(text, word) {
    if (text.includes(word)) {
        console.log("The word is present");
    } else {
        console.log("The word is not present");
    }
}
checkWord("This is a test text", "test"); 
checkWord("This is a test text", "programming"); 

console.log("-------------------------challenge Number 3-----------------------------------------------");
function checkStringStartsWith(text, word) {
    if (text.startsWith(word)) {
        console.log("Yes, it starts with this word");
    } else {
        console.log("No, it does not start with this word");
    }
}
checkStringStartsWith("Welcome to the world of programming", "Welcome"); 
checkStringStartsWith("Welcome to the world of programming", "JavaScript");  
console.log("-------------------------challenge Number 4-----------------------------------------------");
function convertToUppercase(text) {
    const uppercasedText = text.toUpperCase();
        if (text.length > 10) {
        console.log(uppercasedText);
    } else {
        console.log("The text is too short");
    }
}
convertToUppercase("This is a long string"); 
convertToUppercase("Short");  


