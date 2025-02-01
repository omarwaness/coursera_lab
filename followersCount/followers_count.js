
let count = 0; // initialize count to 0

// function to display count
function displayCount() {
    // display the count on the html
    document.getElementById('countDisplay').innerHTML=count;
}

// function to increment count by 1
function increaseCount() {
    count++;            // increment count
    displayCount();     // display count
    checkCountValue();  // check count value
}

// function to check the value of count
function checkCountValue() {
    if (count == 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count == 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}


// Practice task
// function to reset count to 0
function resetCount() {
    count = 0;
    displayCount();
    alert("Followers count has been reset.")
}