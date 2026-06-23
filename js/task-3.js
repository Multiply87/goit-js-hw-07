document.querySelector("input#name-input").addEventListener("input", (event) => {
  const nameOutput = document.querySelector("span#name-output");
  const inputValue = event.target.value.trim();
  nameOutput.textContent = inputValue ? inputValue : "Anonymous";
});