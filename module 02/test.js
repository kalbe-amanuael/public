const form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;

  console.log(name);
  console.log(password);
});
