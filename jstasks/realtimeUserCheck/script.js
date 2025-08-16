const users = [
  "aman",
  "amit",
  "naman",
  "taman",
  "suman",
  "chaman",
  "daman",
  "gagan",
];
let inp = document.querySelector("input");

inp.addEventListener("input", function () {
  let newarr = users.filter(function (val) {
    return val.startsWith(inp.value);
  });

  print(newarr);
});

function print(arr) {
  document.querySelector("#users").innerHTML = "";

  arr.forEach(function (val) {
    let h1 = document.createElement("h1");
    h1.textContent = val;
    document.querySelector("#users").appendChild(h1);
  });
}
