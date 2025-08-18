window.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    document.querySelector(".palette").classList.remove("hidden");
    document.querySelector(".palette input").focus();
  }
});

document.querySelector("form").addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (
    document.querySelector(".palette input").value.split(" ")[0] === "google"
  ) {
    const url =
      "https://www.google.com/search?q=" +
      encodeURIComponent(
        document.querySelector(".palette input").value.split(" ")[1]
      );
    window.open(url, "_blank"); // opens new tab
  }
});
