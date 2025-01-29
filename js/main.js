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
  const response = await fetch('/api-get-number');
  const rnd = await response.json();
  const outputNumber = rnd.number;
  console.log(outputNumber);
  const numberPlaceholder = document.getElementById('placeholder');
  numberPlaceholder.textContent = outputNumber.toString();
})();

// get quote of the day
const quoteP = document.getElementById('todays-quote');
const quoteButton = document.getElementById('get-quote-button');
quoteButton.addEventListener('click', async () => {
  const response = await fetch('/daily-quote');
  const text = await response.text();
  quoteP.innerText = text;
  quoteP.classList.remove('display-none');
  quoteButton.classList.add('display-none');
});
