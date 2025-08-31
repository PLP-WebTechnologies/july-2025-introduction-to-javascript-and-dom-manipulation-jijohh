// 🎯 Part 1: Variables & Conditionals
let price = 100;
let discount = 20;

if (discount >= 20) {
  console.log("Discount applied!");
} else {
  console.log("No discount applied.");
}

// ❤️ Part 2: Functions
function calculateTotal(price, discount) {
  return price - (price * (discount / 100));
}

function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(calculateTotal(200, 25)); 
console.log(greetUser("Jijoh"));

// 🔁 Part 3: Loops
let fruits = ["Apple", "Banana", "Cherry"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// while loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// 🌐 Part 4: DOM Manipulation
const output = document.getElementById("output");
const btnChangeText = document.getElementById("btnChangeText");
const btnAddItem = document.getElementById("btnAddItem");
const btnToggleColor = document.getElementById("btnToggleColor");
const itemList = document.getElementById("itemList");

// 1. Change text on button click
btnChangeText.addEventListener("click", () => {
  output.textContent = "The text has been changed dynamically!";
});

// 2. Add new list item
btnAddItem.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Item";
  itemList.appendChild(li);
});

// 3. Toggle color class
btnToggleColor.addEventListener("click", () => {
  document.body.classList.toggle("colorToggle");
});
