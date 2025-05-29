function startParty() {
  const text = "🎈Que este día esté lleno de amor, regalos, risas y mucha diversión. ¡Te quiero mucho, campeón! 🥳";
  typeText(text);
  document.getElementById("birthdaySong").play();
  generateBalloons();
}

// Máquina de escribir
function typeText(text) {
  const target = document.getElementById("typed-text");
  target.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Globos animados
function generateBalloons() {
  const container = document.getElementById("balloons-container");
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(balloon);
  }
}
