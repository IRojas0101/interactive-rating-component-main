const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const strong = document.getElementById("strong");

const container1 = document.getElementById("container1");
const botonsubmit = document.getElementById("botonsubmit");

btn1.addEventListener("click", () => {
  strong.textContent = btn1.textContent;
  botonsubmit.addEventListener("click", () => {
    container1.classList.add("inactive");
  });
});

btn2.addEventListener("click", () => {
  strong.textContent = btn2.textContent;
  botonsubmit.addEventListener("click", () => {
    container1.classList.add("inactive");
  });
});

btn3.addEventListener("click", () => {
  strong.textContent = btn3.textContent;
  botonsubmit.addEventListener("click", () => {
    container1.classList.add("inactive");
  });
});

btn4.addEventListener("click", () => {
  strong.textContent = btn4.textContent;
  botonsubmit.addEventListener("click", () => {
    container1.classList.add("inactive");
  });
});

btn5.addEventListener("click", () => {
  strong.textContent = btn5.textContent;
  botonsubmit.addEventListener("click", () => {
    container1.classList.add("inactive");
  });
});
