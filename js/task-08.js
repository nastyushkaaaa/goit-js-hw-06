const form = document.querySelector(".login-form");
const object = {
  login: " ",
  password: " ",
};

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  object.login = email.value;
  object.password = password.value;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else console.log(object);
  event.currentTarget.reset();
}
