// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Add hover effect to links
document.querySelectorAll('a, button, .project-card, .skill-category').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate skill bars on scroll
const animateSkills = () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.width = level + '%';
    skill.textContent = level + '%';
  });
};

// Intersection Observer for skill animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.skills'));
