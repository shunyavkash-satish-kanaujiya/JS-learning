let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let conPass = document.getElementById("con-password");
let eyeIcon = document.getElementById("eye");
let passErr = document.getElementById("pass-err");

// Toggle password visibility
eyeIcon.addEventListener("click", function() {
  if (password.value.length > 0) {
    if (password.type == "password") {
      password.type = "text";
      eyeIcon.src = "./assets/image/eye-open.png";
    } else {
      password.type = "password";
      eyeIcon.src = "./assets/image/eye-close.png";
    }
  } else {
    passErr.textContent = "*please first enter your password";
  }
});

const signup = (e) => {
  // console.log(JSON.stringify(e));
  e.preventDefault();

  const nameRegex = /^[a-zA-Z ]{3,20}$/;
  const emailRegex = /^[A-Za-z\d]+(?:[.%_+][A-Za-z\d]+)*@[A-Za-z\d]+\.[A-Za-z]{2,}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

  // Clear all error messages
  document
    .querySelectorAll(".error")
    .forEach((curEle) => (curEle.textContent = ""));
  let isValid = true;

  if (!nameRegex.test(name.value)) {
    document.getElementById("name-err").textContent =
      "* Please enter a valid name";
    isValid = false;
  }

  if (!emailRegex.test(email.value)) {
    document.getElementById("email-err").textContent =
      "* Please enter a valid email address";
    isValid = false;
  }

  if (!passRegex.test(password.value)) {
    document.getElementById("pass-err").textContent =
      "* Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    isValid = false;
  }

  if (password.value !== conPass.value) {
    document.getElementById("con-pass-err").textContent =
      "* Password and confirm password do not match";
    isValid = false;
  }
  if (!terms.checked) {
    document.getElementById("terms-err").textContent =
      "* You must agree to the terms and conditions";
    isValid = false;
  }

  if (isValid) {
    let newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Welcome ${name.value}, You Registered Successfully.`);
    document.getElementById("signup-form").reset();
  }
};
