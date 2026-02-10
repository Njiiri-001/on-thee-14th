// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confirmYes = document.getElementById("confirmYes");
const closeModal = document.getElementById("closeModal");

const initialScreen = document.getElementById("initialScreen");
const confirmScreen = document.getElementById("confirmScreen");
const messageScreen = document.getElementById("messageScreen");
const popupModal = document.getElementById("popupModal");

const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

// Function to show full invitation
function showInvitation() {
  initialScreen.classList.add("hidden");
  confirmScreen.classList.add("hidden");
  popupModal.classList.add("hidden");
  messageScreen.classList.remove("hidden");

  message.innerHTML = `
    💖 Yay! 💖<br><br>
    <strong>Time:</strong> 2:30 PM – 5:30 PM<br>
    <strong>Venue:</strong> Casa Serian<br><br>
    Thank you for honoring my invitation.<br>
    Put on something pretty, will ya?<br>
    See you 😘
  `;

  startHearts();
}

// STRAIGHT YES → immediate full invite
yesBtn.addEventListener("click", () => {
  showInvitation();
});

// NO → show confirmation screen
noBtn.addEventListener("click", () => {
  initialScreen.classList.add("hidden");
  confirmScreen.classList.remove("hidden");
});

// Confirmation YES → show modal
confirmYes.addEventListener("click", () => {
  confirmScreen.classList.add("hidden");
  popupModal.classList.remove("hidden");

  // Optional: floating hearts inside modal
  startHearts();
});

// Close modal → show final invite
closeModal.addEventListener("click", () => {
  showInvitation();
});

// Floating hearts animation
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
