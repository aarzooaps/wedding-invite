// Curtain Animation
window.addEventListener('load', () => {
  document.getElementById('curtain-left').style.width = '0';
  document.getElementById('curtain-right').style.width = '0';
  document.querySelector('#welcome h1').style.opacity = '1';
});

// Animate sections when in view
const sections = document.querySelectorAll('.event');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const anim = entry.target.querySelector('.animation');
      if(anim) anim.style.opacity = 1; // trigger CSS animations
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
