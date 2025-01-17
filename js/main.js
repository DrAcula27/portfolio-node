// create nodelist of all images from the DOM with a class of `randomImg`
let randomImgs = document.querySelectorAll('.randomImg');
// for each image,
//   generate a seed
//   make an api request to server.js using the seed
randomImgs.forEach((img) => {
  const seed = Math.random();
  img.src = `/api/image/random?seed=${seed}`;
});





// self-invoking function
(async function buildAnimation() {
  const response = await fetch("/api-get-number");
  const rnd = await response.json();
  const outputNumber = rnd.number;
  console.log(outputNumber);
  const numberPlaceholder = document.getElementById("placeholder");
  numberPlaceholder.textContent = outputNumber.toString();
})();
