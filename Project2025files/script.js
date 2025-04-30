document.addEventListener('DOMContentLoaded', function() {
    
    const projects = document.querySelectorAll('.project-item');
  
    window.addEventListener('scroll', function() {
      projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          project.classList.add('visible');
        }
      });
    });
  
    
    projects[0].classList.add('visible');
  });
  