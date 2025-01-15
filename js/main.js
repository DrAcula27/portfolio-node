let randomImgArr = document.querySelectorAll('.randomImg');

randomImgArr.forEach((img) => {
  const seed = Math.random()
  img.src = `/api/image/random?seed=${seed}`;
});
