// Advanced Portfolio Logic
// Developer: Nailah Khan

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Smooth active link highlight on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Form submission prevent default (demo purposes)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a demo submission.');
            contactForm.reset();
        });
    }

    // Skill animation trigger (re-trigger when scrolled into view)
    const skillBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'none';
                entry.target.offsetHeight; // trigger reflow
                entry.target.style.animation = null; 
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));

    // --- Integrated Portfolio Interactions ---
    const welcomeBtn = document.getElementById('welcome-btn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function demonstrateHoisting() {
            let declResult = myHoistedFunction();
            alert("Function Declaration Success:\n" + declResult);

            function myHoistedFunction() {
                return "It works! I was called before my definition using function declaration.";
            }
            try {
                myFunctionExpression();
            } catch (error) {
                alert("Function Expression Error Caught:\n" + error.name + ": " + error.message + "\n\nThis happens because function expressions are not hoisted.");
            }

            const myFunctionExpression = function () {
                return "This string will never be returned if called before initialization.";
            };
        });
    }

    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) {
        quizBtn.addEventListener('click', function () {
            let sub1 = parseFloat(prompt("Enter marks for Subject 1:"));
            let sub2 = parseFloat(prompt("Enter marks for Subject 2:"));
            let sub3 = parseFloat(prompt("Enter marks for Subject 3:"));
            if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
                alert("Please enter valid numbers for all subjects.");
                return;
            }
            let total = sub1 + sub2 + sub3;
            let average = total / 3;
            alert("Total Marks: " + total + "\nAverage: " + average.toFixed(2));
        });
    }

    const skillsBtn = document.getElementById('skills-btn');
    if (skillsBtn) {
        skillsBtn.addEventListener('click', function () {
            let count = parseInt(prompt("How many skills do you want to enter?"));
            if (isNaN(count) || count <= 0) {
                alert("Please enter a valid positive number.");
                return;
            }
            let skills = [];
            for (let i = 0; i < count; i++) {
                let skill = prompt("Enter skill " + (i + 1) + ":");
                if (skill) {
                    skills.push(skill.trim());
                }
            }
            if (skills.length > 0) {
                alert("You entered the following skills:\n• " + skills.join("\n• "));
            } else {
                alert("No skills were entered.");
            }
        });
    }

    const gradeBtn = document.getElementById('grade-btn');
    if (gradeBtn) {
        gradeBtn.addEventListener('click', function () {
            let scoreStr = prompt("Enter your score (0-100):");
            if (scoreStr === null || scoreStr.trim() === "") return;
            let score = parseFloat(scoreStr);
            if (isNaN(score) || score < 0) {
                alert("Please enter a valid numerical score.");
                return;
            }
            let grade = "";
            if (score >= 90) grade = "Excellent";
            else if (score >= 75) grade = "Good";
            else if (score >= 50) grade = "Average";
            else grade = "Poor";
            alert("Your Score: " + score + "\nGrade Category: " + grade);
        });
    }
});
