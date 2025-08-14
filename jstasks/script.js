const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
];

const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let lastIndex = -1;

button.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex && quotes.length > 1);
  h1.textContent = quotes[index];
  lastIndex = index;
});
