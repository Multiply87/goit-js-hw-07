document.querySelector("form.login-form").addEventListener("submit", (event) => {
  event.preventDefault(); 
  const {email, password} = event.target.elements;
  if (!email.value.trim() || !password.value.trim()) {
    alert("All form fields must be filled in");
  } else {
    console.log({ email: email.value, password: password.value });
    event.target.reset();
  }
});