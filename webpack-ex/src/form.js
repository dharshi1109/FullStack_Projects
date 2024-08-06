document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in all fields.";
    } else {
      
      console.log("Username:", username);
      console.log("Password:", password);
  
      
      errorMessage.textContent = "Login successful!";
      
    }
  });
  