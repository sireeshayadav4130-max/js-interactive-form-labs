// Task 1: Live username counter and password feedback
const username = document.getElementById("username");
const charCount = document.getElementById("char-count");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

username.addEventListener("input", (e) => {
  const length = e.target.value.length;
  charCount.textContent = `${length} / 12`;
  charCount.classList.toggle("over-limit", length > 12);
});
password.addEventListener("input", (e) => {
  passwordError.textContent = e.target.value.length < 6
    ? "Password must be at least 6 characters" : "";
});

// Task 2: Plan change and terms validation
const subForm = document.getElementById("sub-form");
const planSelect = document.getElementById("plan-select");
const planDetails = document.getElementById("plan-details");
const termsCheck = document.getElementById("terms-check");
const formError = document.getElementById("form-error");
const plans = {
  free: "Selected: Free Plan ($0)",
  pro: "Selected: Pro Plan ($15/mo)",
  enterprise: "Selected: Enterprise Plan ($50/mo)"
};
planSelect.addEventListener("change", (e) => {
  planDetails.textContent = plans[e.target.value];
});
subForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!termsCheck.checked) {
    formError.textContent = "You must accept the terms to proceed";
  } else {
    formError.textContent = "";
    alert("Subscription successful!");
  }
});

// Task 3: Registration validation and profile cards
const registerForm = document.getElementById("register-form");
const fullName = document.getElementById("full-name");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const roleSelect = document.getElementById("role-select");
const nameError = document.getElementById("name-err");
const passError = document.getElementById("pass-err");
const roleError = document.getElementById("role-err");
const profileDisplay = document.getElementById("profile-display");
const profileEmpty = document.getElementById("profile-empty");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  passError.textContent = "";
  roleError.textContent = "";
  let isValid = true;

  const name = fullName.value.trim();
  if (!name) { nameError.textContent = "Name is required"; isValid = false; }
  if (pass.value !== confirmPass.value) {
    passError.textContent = "Passwords do not match"; isValid = false;
  }
  if (!roleSelect.value) { roleError.textContent = "Please select a role"; isValid = false; }
  if (!isValid) return;

  const card = document.createElement("article");
  card.classList.add("profile-card");
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.textContent = name.charAt(0).toUpperCase();
  const heading = document.createElement("h4");
  heading.textContent = name;
  const role = document.createElement("span");
  role.classList.add("role-pill");
  role.textContent = roleSelect.value;
  card.append(avatar, heading, role);
  profileDisplay.appendChild(card);
  profileEmpty.hidden = true;
  e.target.reset();
});