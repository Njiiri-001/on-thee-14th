const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

// YES click
yesBtn.addEventListener("click", () => {
  message.innerHTML = `
    💖 Yay! 💖<br><br>
    <strong>Time:</strong> 2:30 PM – 5:30 PM<br>
    <strong>Venue:</strong> Casa Serian<br><br>
    Thank you for honoring my invitation.<br>
    Put on sth pretty, will ya?<br>
    See you 😘
  `;
  message.classList.remove("hidden");
  startHearts();
});

// NO dodges cursor
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NO click still means YES 😄
noBtn.addEventListener("click", () => {
  message.innerHTML = `
    Thank you for honoring my invitation 💕<br><br>
    Put on sth pretty, will ya?<br>
    See you 😘
  `;
  message.classList.remove("hidden");
  startHearts();
});

// 💖 Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}