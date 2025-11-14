function isPrime(num) {
    if (num<=1) return false;
    if (num==2) return true;

    for(let i=2;i<num;i++){
        if (num%i==0)
            return false;
    } return true;
} console.log(isPrime(7));

//Function to check if a number is even or odd
function evenOdd(num) {
    if(num%2===o) {
        return true;
    } else {
        return false;
    }
}