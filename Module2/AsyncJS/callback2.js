function timer(duration, oneComplete) {
    console.log(`Timer started for ${duration} ms...`);

    setTimeout(() => {
        oneComplete(`Timer of ${duration} ms finished`)
    }, duration)
}
function handleCompletion(message){
    console.log(message);
}
timer(2000, handleCompletion);