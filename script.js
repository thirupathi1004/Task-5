let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];

let cart2 = [
  { name: "Watch", price: 2000 }
];

// Merge carts
let mergedCart = [...cart1, ...cart2];

// Add new product
mergedCart.push({ name: "Cap", price: 300 });

// Remove last product
mergedCart.pop();

// Calculate total price
let total = mergedCart.reduce((sum, item) => sum + item.price, 0);

console.log("Cart:", mergedCart);
console.log("Total Price:", total);


let user = {
  name: "Thirupathi J",
  role: "Dotnet Developer",
  salary: 40000
};

let update = {
  role: "Developer",
  salary: 50000
};

// Merge
let updatedUser = { ...user, ...update };

// Destructure
let { name, role, salary } = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);


function teamScore(teamName, ...scores) {
  console.log("Team:", teamName);
  console.log("Scores:", scores);

  let total = scores.reduce((a, b) => a + b, 0);
  let highest = Math.max(...scores);

  console.log("Total Score:", total);
  console.log("Highest Score:", highest);
}

teamScore("Warriors", 50, 60, 70, 80);

let apiData = {
  user: {
    name: "Thirupathi",
    address: {
      city: "Hyderabad",
      pincode: 500060
    }
  }
};

// Destructuring
let {
  user: {
    
    address: { city, pincode }
  }
} = apiData;

console.log(`${name} lives in ${city} - ${pincode}`);


let users = ["A", "B", "C", "D", "E"];

// Remove C, D and add X, Y
users.splice(2, 2, "X", "Y");

// First 3 users
let firstThree = users.slice(0, 3);

// Check existence
let hasB = users.includes("B");

// Find index
let indexE = users.indexOf("E");

console.log(users);
console.log("First 3:", firstThree);
console.log("Has B:", hasB);
console.log("Index of E:", indexE);

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// Flatten
let flatData = messyData.flat(Infinity);

// Remove null & undefined
let cleanData = flatData.filter(item => item != null);

console.log(cleanData);

let prices = [1000, 200, 50, 5000];

// Correct sort
prices.sort((a, b) => a - b);

console.log(prices);



let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

// Total revenue
let totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);

// Average
let avg = totalRevenue / orders.length;

console.log("Total Revenue:", totalRevenue);
console.log("Average Order Value:", avg);


let inventory1 = ["Pen", "Book", "Pencil"];
let inventory2 = ["Eraser", "Sharpener"];

// Add item
inventory1.push("Marker");

// Remove item
inventory1.pop();

// Update item (replace "Book" with "Notebook")
let index = inventory1.indexOf("Book");
if (index !== -1) {
  inventory1.splice(index, 1, "Notebook");
}

// Search
console.log("Has Pen:", inventory1.includes("Pen"));

// Merge inventories
let finalInventory = [...inventory1, ...inventory2];

console.log(finalInventory);


function processData(...data) {
  // Flatten
  let flat = data.flat(Infinity);

  // Remove duplicates
  let unique = [...new Set(flat)];

  // Sort ascending
  unique.sort((a, b) => a - b);

  return unique;
}

console.log(processData(1, 2, [3, 4], [5, [6]]));


