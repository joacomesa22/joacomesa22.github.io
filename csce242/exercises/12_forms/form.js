document.querySelector("#form-raccoon").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const raccoonName = form.elements["raccoon-name"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;
  const size = getRadioValue("size");
  console.log(raccoonName, size, demeanor, termsChecked);
});

const getRadioValue = (radioName) => {
  const radios = document.getElementsByName(radioName);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
};

const sendEmail = async (json) => {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    return res;
  } catch (error) {
    console.log(error);
    result.innerHTML = "Sorry, your email couldn't be sent";
  }
};

document
  .querySelector("#contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.querySelector("#result");
    result.innerHTML = "Sending...";
    const httpResult = await sendEmail(json);
    if (httpResult.status === 200) {
      result.innerHTML = "Email sent successfully!";
    } else {
      result.innerHTML = "Failed to send email. Please try again later.";
    }
  });
