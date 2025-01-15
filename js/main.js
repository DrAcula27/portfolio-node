let randomImgArr = document.querySelectorAll('.randomImg');

randomImageArr.forEach((img) => {
  const seed = new Date().getTime();
  img.src = `/api/image/random?seed=${seed}`;
});
