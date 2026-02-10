const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confirmYes = document.getElementById("confirmYes");

const mainButtons = document.getElementById("mainButtons");
const confirmBox = document.getElementById("confirmBox");

const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

// Final acceptance logic
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

// YES button (main)
yesBtn.addEventListener("click", acceptInvitation);

// NO button dodges cursor
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NO button click → show confirmation
noBtn.addEventListener("click", () => {
  mainButtons.classList.add("hidden");
  confirmBox.classList.remove("hidden");
});

// Confirmation YES
confirmYes.addEventListener("click", () => {
  alert("I knew you would say yes 😂😂🌚");
  acceptInvitation();
});

// 💖 Hearts animation
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
