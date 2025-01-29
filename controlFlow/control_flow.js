
// part 1
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// display the accesss level
console.log("Access Level:", accessLevel);


// part 2
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}


// display welcome message
console.log("User Message:", userMessage);


// part 3
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

// display the output
console.log("User Category:", userCategory);


// part 5
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// display the output
console.log("Authentication Status:", authenticationStatus);



// Practice task
let role = "Employee";
let dietAccess;

if (role == "Employee") 
{
    dietAccess = "authorized";
}
else if (role == "Enrolled Membe")
{
    dietAccess = "authorized";
}
else if (role == "Subscriber")
{
    dietAccess = "partial access";
}
else 
{
    dietAccess = "no access";
}

console.log("dietary services access: " + dietAccess);


