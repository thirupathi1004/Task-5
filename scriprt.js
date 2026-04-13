
let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

// Total price
let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Cart Value:", total);

// Products above 1000
let expensive = cart.filter(item => item.price > 1000);
console.log("Expensive Products:", expensive);

// Product names uppercase
let namesUpper = cart.map(item => item.name.toUpperCase());
console.log("Uppercase Names:", namesUpper);


let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

// Failed students
let failed = students.filter(s => s.marks < 50);
console.log("Failed Students:", failed);

// Any distinction (>80)
let hasDistinction = students.some(s => s.marks > 80);
console.log("Any Distinction:", hasDistinction);

// All passed (>35)
let allPassed = students.every(s => s.marks > 35);
console.log("All Passed:", allPassed);

// First failed student
let firstFail = students.find(s => s.marks < 50);
console.log("First Failed:", firstFail);


let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

// Increase salary by 10%
let updated = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.10
}));
console.log("Updated Salaries:", updated);

// Salary > 30000
let highEarners = employees.filter(emp => emp.salary > 30000);
console.log("High Earners:", highEarners);

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary Expense:", totalSalary);

// Sort by highest salary
let sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Salary:", sorted);


let products = ["Laptop", "Mobile", "Tablet", "Camera"];

// Check exists
console.log("Has Mobile:", products.includes("Mobile"));

// Lowercase
let lower = products.map(p => p.toLowerCase());
console.log("Lowercase:", lower);

// Index of Tablet
console.log("Index of Tablet:", products.indexOf("Tablet"));

// Join
console.log("Joined String:", products.join("-"));

let dob = new Date("2003-01-01"); // change DOB here
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log(`You are ${age} years old`);

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let user = users.find(u => u.username === inputUser);

if (user && user.password === inputPass) {
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}

let numbers = [10, 15, 20, 25, 30];

// Even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// Any odd
let hasOdd = numbers.some(n => n % 2 !== 0);
console.log("Any Odd:", hasOdd);

// All even
let allEven = numbers.every(n => n % 2 === 0);
console.log("All Even:", allEven);

// First > 20
let firstGreater = numbers.find(n => n > 20);
console.log("First > 20:", firstGreater);


let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

// Total revenue of delivered
let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

console.log("Delivered Revenue:", revenue);

// Pending orders
let pending = orders.filter(o => o.status === "pending");
console.log("Pending Orders:", pending);

// Any order > 1000
let bigOrder = orders.some(o => o.amount > 1000);
console.log("Any Order > 1000:", bigOrder);

// Sort ascending
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Orders:", sortedOrders);