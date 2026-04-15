 console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);


let count = 0;

const clock = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
  
  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);


function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts(callback) {
  setTimeout(() => {
    console.log("User Posts Fetched");
    callback();
  }, 1000);
}

// Callback Hell
loginUser(() => {
  getUserData(() => {
    getUserPosts(() => {
      console.log("All Done");
    });
  });
});


function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test error

      if (success) {
        resolve(["Laptop", "Mobile", "Tablet"]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

// Using Promise
getProducts()
  .then((products) => {
    console.log("Products:", products);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request completed");
  });


