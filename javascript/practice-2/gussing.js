let max = prompt("Enter the max number:");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number:");

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("Now, you are not part of this game......");
        break;
    }
    if (parseInt(guess) === random) {
        console.log("You are right, congratulations! 🎉 The random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("Hint: Your guess was too small. Please try again...");
    } else {
        guess = prompt("Hint: Your guess was too large. Please try again...");
    }
}
