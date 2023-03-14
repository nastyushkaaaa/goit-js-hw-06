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

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  object.login = email.value;
  object.password = password.value;

  console.log(object);
  event.currentTarget.reset();
}
