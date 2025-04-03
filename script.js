// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for section animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1
    }
);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


function changeAboutMeText() 
{
    const aboutMeTexts = ["Tech Enthusiast","Problem Solver", "Data Scientist", "Full Stack Web Developer"]; // Add more texts as needed
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 1500; // milliseconds to pause between each text change
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() 
    {
        const currentText = aboutMeTexts[textIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) 
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

// Call function to add stunning modification
changeAboutMeText();



