const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confirmYes = document.getElementById("confirmYes");

const mainButtons = document.getElementById("mainButtons");
const confirmBox = document.getElementById("confirmBox");

const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

// Shared success logic
function showInvitation() {
  message.innerHTML = `
    💖 Yay! 💖<br><br>
    <strong>Time:</strong> 2:30 PM – 5:30 PM<br>
    <strong>Venue:</strong> Casa Serian<br><br>
    Thank you for honoring my invitation.<br>
    Be sure to put on sth pretty, will ya?<br>
    See you 😘
  `;
  message.classList.remove("hidden");
  startHearts();
}

// STRAIGHT YES
yesBtn.addEventListener("click", () => {
  mainButtons.classList.add("hidden");
  showInvitation();
});

// NO → Are you sure?
noBtn.addEventListener("click", () => {
  mainButtons.classList.add("hidden");
  confirmBox.classList.remove("hidden");
});

// Confirmation YES
confirmYes.addEventListener("click", () => {
  alert("I knew you would say yes 😂😂🌚");
  confirmBox.classList.add("hidden");
  showInvitation();
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
