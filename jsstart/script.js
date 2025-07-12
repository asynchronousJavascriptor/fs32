let arr = [0, 0, 0];

arr.forEach(function (val) {
  const card = document.createElement("div");
  card.className = "w-[400px] p-10 bg-zinc-200 rounded-2xl";

  const name = document.createElement("h1");
  name.className = "text-3xl font-medium";
  name.textContent = "Angle Priya";

  const subtitle = document.createElement("h4");
  subtitle.className = "text-xl text-red-500 my-1";
  subtitle.textContent = "Strangers";

  const desc = document.createElement("p");
  desc.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum vel deserunt animi molestiae velit.";

  const btn = document.createElement("button");
  btn.className = "text-sm px-4 py-3 bg-blue-500 text-white mt-5 rounded-xl";
  btn.textContent = "Add Friends";

  card.appendChild(name);
  card.appendChild(subtitle);
  card.appendChild(desc);
  card.appendChild(btn);

  document.querySelector(".cards").appendChild(card);
});
