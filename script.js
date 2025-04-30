document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project-item');
  
    window.addEventListener('scroll', function () {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.remove('hidden');
        projects.forEach((project, index) => {
          setTimeout(() => {
            project.classList.add('visible');
          }, index * 200);
        });
      }
    });
  });
  
