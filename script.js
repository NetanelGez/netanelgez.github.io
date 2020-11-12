// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

Document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
});
