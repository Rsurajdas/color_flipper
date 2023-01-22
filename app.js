const sectionBg = document.getElementById("bg");
const colorEl = document.querySelector(".color");
const btn = document.querySelector(".btn");
const colors = [
  "#EE6983",
  "#A62349",
  "#FF7F3F",
  "#781C68",
  "#277BC0",
  "#D61C4E",
  "#2A0944",
  "#FF1E00",
  "#A66CFF",
  "#FFC23C",
  "#AF7AB3",
  "#F5C7A9",
  "#7DCE13",
  "#5800FF",
  "#EF5B0C",
  "#61481C",
  "#C8B6E2",
  "#C4DFAA",
  "#A10035",
  "#1A4D2E",
  "#774360",
  "#34B3F1",
  "#9EB23B",
  "#FF06B7",
  "#00FFAB",
];

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * colors.length);
  sectionBg.style.backgroundColor = colors[random];
  colorEl.textContent = colors[random];
  colorEl.style.color = colors[random];
});
