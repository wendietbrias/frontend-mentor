const datas = [
  {
    title: "10k+",
    sub: "companies",
  },
  {
    title: "314",
    sub: "templates",
  },
  {
    title: "12M+",
    sub: "queries",
  },
];

const textDataContainer = document.querySelector(".text__data");

function displayData() {
  let temp = "";
  datas
    .map((item) => {
      temp += `
           <div class="text__data-content">
           <h5>${item?.title}</h5>
           <p>${item?.sub}</p>
           </div>
        `;
    })
    .join(" ");

  textDataContainer.innerHTML = temp;
}

window.addEventListener("DOMContentLoaded", displayData);
