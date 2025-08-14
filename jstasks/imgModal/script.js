document.querySelectorAll("img").forEach(function (imgTag) {
  imgTag.addEventListener("click", function () {
    document.querySelector("#modal").style.display = "flex";
    document.querySelector("#modal img").src = imgTag.src;
  });
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#modal").style.display = "none";
});
