// Part 1: JavaScript Basics


// Variable declarations and conditionals
let userName = "Guest";

// DOM interaction: update greeting when button is clicked
document.getElementById("askNameBtn").addEventListener("click", function() {
  userName = prompt("What is your name?") || "Guest";
  if (userName.toLowerCase() === "admin") {
    document.getElementById("greeting").textContent = "Welcome back, Admin!";
  } else {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
  }
});



// Part 2: Functions


// Custom function: calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// Another custom function: format currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Use the functions with DOM interaction
document.getElementById("calcTotalBtn").addEventListener("click", function() {
  let total = calculateTotal(100, 0.07); // Example: $100 with 7% tax
  document.getElementById("totalOutput").textContent =
    "Total price: " + formatCurrency(total);
});



// Part 3: Loops


// Example 1: Countdown using a for loop
document.getElementById("countdownBtn").addEventListener("click", function() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old list
  for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: Iterating through an array with forEach
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
  console.log("Fruit: " + fruit);
});



// Part 4: DOM Manipulation


// Example 1: Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Add items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// Example 3: Listen for clicks and respond
document.getElementById("dynamicList").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("You clicked on: " + e.target.textContent);
  }
});