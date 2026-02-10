const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

// Function that handles acceptance (YES or fake NO)
function acceptInvitation() {
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
}

// YES button
yesBtn.addEventListener("click", acceptInvitation);

// NO button dodges cursor
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NO button becomes YES when clicked
noBtn.addEventListener("click", () => {
  noBtn.innerText = "YES 💖";
  noBtn.style.background = "#e91e63";
  noBtn.style.color = "white";

  acceptInvitation();
});

// 💖 Floating hearts animation
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
