document.addEventListener('DOMContentLoaded', function() {
    
    const projects = document.querySelectorAll('.project');
  
   
    if (projects.length === 0) {
        console.log("No projects found on the page.");
        return;
    }

    
    projects[0].classList.add('visible');
  
    
    window.addEventListener('scroll', function() {
        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                project.classList.add('visible');
            } else {
                project.classList.remove('visible'); 
            }
        });
    });
});
