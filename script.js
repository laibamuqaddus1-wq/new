function openCard() {
  document.querySelector(".card").classList.toggle("open");

  let interval = setInterval(() => {

    for (let i = 0; i < 15; i++) {
      let el = document.createElement("div");
      el.className = "effect";

      let items = ["💖", "🌸", "🌹", "💜", "🌷"];
      el.innerHTML = items[Math.floor(Math.random() * items.length)];

      el.style.left = Math.random() * window.innerWidth + "px";
      el.style.top = window.innerHeight + "px";

      el.style.fontSize = (Math.random() * 25 + 15) + "px";

      document.body.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, 8000);
    }

  }, 800);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}