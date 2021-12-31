const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

          clearMessage();
          let errorFlag = false;

          if(nameInput.value.length < 1) {
                    errorNodes[0].innerText = "Name cannot be blank";
                    nameInput.classList.add('error-border');
                    let errorFlag = true;
          } if(!emailIsValid(email.value)) {
                    errorNodes[1].innerText = "Invalid email address";
                    email.classList.add("error-border");
                    let errorFlag = true;
          } if(message.value.length < 1) {
                    errorNodes[2].innerText = "Please enter message";
                    email.classList.add("error-border");
                    let errorFlag = true;
          }

          if(!errorFlag == false) {
                    alert("Message Sent");
          }

          return errorFlag;
}

function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
  success.innerText = "";
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// send email
function sendEmail() {
  Email.send({
    Host : "smpt.gmail.com",
    Username : "mohamed9919698@gmail.com",
    Password : "mohamedehab200",
    To : "mohamed9919698@gmail.com",
    From : document.querySelector(".email").value,
    Subject : "From the portfolio contact form",
    Body : document.querySelector(".message").value
  }).then(
    message => alert(message)
  )
}

function circle(el) {
  $(el).circleProgress({fill: {color: '#ff5c5c'}})
  .on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)+'%'))
  })
}

circle('.round')