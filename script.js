// Message
function showMessage() {
    document.getElementById("message").style.display = "block";
}

// Music
function playMusic() {
    document.getElementById("bgMusic").play();
}

// Countdown (CHANGE DATE IF NEEDED)
const birthday = new Date("2026-01-12 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        document.getElementById("countdown").innerHTML =
            `⏳ ${days} days ${hours} hrs ${minutes} mins to go 💙`;
    } else {
        document.getElementById("countdown").innerHTML =
            "🎂 It's your special day 🎉";
    }
}, 1000);

// Slideshow
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3000);

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);

// Reasons on click
const reasons = [
    "1. The way you smile 🫶",
    "2. You make me feel safe",
    "3. Your voice calms me",
    "4. You understand me without words",
    "5. Your kindness",
    "6. The way you care",
    "7. You believe in me",
    "8. You make ordinary moments special",
    "9. Your honesty",
    "10. The way you look at me",
    "11. You respect my feelings",
    "12. You make me laugh",
    "13. Your patience with me",
    "14. You motivate me to be better",
    "15. Your warmth",
    "16. You stand by me",
    "17. You make me feel chosen",
    "18. Your thoughtfulness",
    "19. The way you listen",
    "20. You accept me as I am",
    "21. You bring peace to my heart",
    "22. You make me feel loved",
    "23. You are my comfort place",
    "24. Simply because you are YOU 💙"
];

let reasonIndex = 0;

function showNextReason() {
    if (reasonIndex < reasons.length) {
        const div = document.createElement("div");
        div.className = "reason";
        div.innerText = reasons[reasonIndex];
        document.getElementById("reasonsBox").appendChild(div);
        reasonIndex++;
    } else {
        showFinalPopup();
    }
}

// Final popup
function showFinalPopup() {
    const popup = document.createElement("div");
    popup.className = "final-popup";

    popup.innerHTML = `
        <div class="popup-content">
            <h2>🎂 Happy Birthday</h2>
            <p>To the most special person 💙</p>
            <h3>I Love You More ♾️</h3>
        </div>
    `;

    document.body.appendChild(popup);
            }
