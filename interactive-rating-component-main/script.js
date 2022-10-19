const submitBtn = document.getElementById("submit-btn");
const container = document.querySelector(".container");

function displayThankyouPage() {
  return `
       <img class="thankyou-img" src="images/illustration-thank-you.svg" alt="thankyou">
       <div class="thankyou-content">
        <button>You 4 of 5 selected menu</button>
        <h2>Thank You!</h2>
        <p>out of 5 Thank you! We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!</p>
       </div>
    `;
}

submitBtn.addEventListener("click", function () {
  container.innerHTML = displayThankyouPage();
});
