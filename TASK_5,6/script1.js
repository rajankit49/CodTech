document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting automatically

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("error");

  // Validation
  if (name === "" || email === "" || password === "") {
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(name)) {
    errorMsg.textContent = "⚠️ Name should contain only letters.";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errorMsg.textContent = "⚠️ Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "⚠️ Password must be at least 6 characters.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "✅ Form submitted successfully!";
});
