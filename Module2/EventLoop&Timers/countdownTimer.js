let seconds = 5;
console.log(`Countdown starting from ${seconds} seconds...`);

let countdown = setInterval(() => {
    console.log(`Time left ${seconds}`);
    seconds--;

    if (seconds <0) {
        clearInterval(countdown);
        console.log("Countdown Complete");
    }
}, 1000);

setTimeout(() => {
    let userPressedKey = "s";

    if (userPressedKey === "s") {
        clearInterval(countdown);
        console.log("Countdown Stopped by User");
    }
}, 3000);