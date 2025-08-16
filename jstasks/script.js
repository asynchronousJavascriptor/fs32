window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percent = (scrolled / totalHeight) * 100;

  document.querySelector("#progress").style.width = `${percent}%`;
});
