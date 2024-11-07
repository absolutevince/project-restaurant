import "./contact.css";

export default (function Contact() {
  const element = document.createElement("div");
  const form = document.createElement("form");
  const labelName = document.createElement("label");
  const labelEmail = document.createElement("label");
  const labelMessage = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const messageInput = document.createElement("textarea");
  const submitButton = document.createElement("button");

  labelName.textContent = "Your Name";
  labelEmail.textContent = "Your Email";
  submitButton.textContent = "Submit";
  emailInput.type = "email";
  nameInput.type = "text";

  element.id = "contact";
  form.classList = "contact-form";

  form.append(
    labelName,
    nameInput,
    labelEmail,
    emailInput,
    labelMessage,
    messageInput,
    submitButton
  );

  element.append(form);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("message submitted");
  });

  return {
    html: () => element,
  };
})();
