// create nodelist of all images from the DOM with a class of `randomImg`
let randomImgs = document.querySelectorAll('.randomImg');
// for each image,
//   generate a seed
//   make an api request to server.js using the seed
randomImgs.forEach((img) => {
  const seed = Math.random();
  img.src = `/api/image/random?seed=${seed}`;
});
