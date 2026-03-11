// ===== Countdown Timer =====
const weddingDate = new Date("April 25, 2026 19:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

  document.getElementById("countdown").innerHTML =
    days + " Days " + hours + " Hours " + minutes + " Minutes";
}, 1000);

// ===== Welcome Screen =====
const openBtn = document.getElementById("openInvite");
const welcomeScreen = document.getElementById("welcomeScreen");

openBtn.addEventListener("click", function() {
  welcomeScreen.classList.add("open");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
    document.body.style.overflow = "auto";
  }, 2000);
});

// ===== Event Animations on Scroll =====
const eventSections = document.querySelectorAll('.event-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const anim = entry.target.querySelector('.animation');
      if (anim) {
        // trigger CSS animations by adding a class or forcing opacity
        anim.style.opacity = 1;
      }
    }
  });
}, { threshold: 0.3 });

eventSections.forEach(section => observer.observe(section));
