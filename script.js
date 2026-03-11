// ===== Countdown Timer =====
const weddingDate = new Date("April 25, 2026 19:00:00").getTime();

setInterval(function() {
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

// ===== Scroll-triggered Event Animations =====
const sections = document.querySelectorAll('.event-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');

      // Trigger overlay animation
      const anim = entry.target.querySelector('.animation');
      if(anim) { anim.style.opacity = 1; }
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));
