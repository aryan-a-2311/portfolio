"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalLinkedIn = document.querySelector("[data-modal-linkedin]");
const modalByline = document.querySelector("[data-modal-byline]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    modalLinkedIn.href = this.querySelector(
      "[data-testimonials-linkedin]"
    ).href;
    modalByline.innerHTML = this.querySelector(
      "[data-testimonials-byline]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Project Modal

const projectModal = document.querySelector(".project-modal-container");
const projectCloseBtn = projectModal.querySelector(".project-modal-close-btn");
const projectOverlay = projectModal.querySelector(".project-overlay");
const projectTitle = projectModal.querySelector("#project-modal-title");
const projectDescription = projectModal.querySelector(
  "#project-modal-description p"
);
const projectTechnologies = projectModal.querySelector(
  "#project-modal-technologies p"
);

const projectsData = [
  {
    id: "project1",
    title: "Web Application for ABR AI",
    description:
      "Led the transformation of a desktop application into a dynamic web application, significantly enhancing user accessibility. Redesigned the UI/UX, resulting in a 30% increase in user engagement, and spearheaded the integration of web technologies, reducing operational costs by 20%.",
    technologies: "ReactJS, Git, Taiga.io, Web Technologies",
  },
  {
    id: "project2",
    title: "Decoding Market Trends using Data Science",
    description:
      "Implemented K-Means clustering to analyze extensive datasets and identify consumer patterns in the smartphone market. The project provided valuable insights into market segmentation and trend analysis, aiding strategic decision-making.",
    technologies: "Python, Sci-Kit Learn, Data Visualization, Git",
  },
  {
    id: "project3",
    title: "Employee Management Application for Cognisun",
    description:
      "Designed and developed a mobile application using Flutter and Django to streamline internal employee management processes. The application facilitated efficient data handling and improved communication within the organization, significantly enhancing operational efficiency.",
    technologies: "Python, Django, Flutter, MySQL, Git, Full-Stack Development",
  },
  {
    id: "project4",
    title: "Development of a Programming Language - Citrus",
    description:
      "Led a team of 5 to develop 'Citrus,' a new programming language using Prolog and Python. Designed grammar rules, implemented the parser/evaluator, and created comprehensive test cases, resulting in a functional and reliable programming language.",
    technologies: "Prolog, Python, Git",
  },
  {
    id: "project5",
    title: "Semantic Web Based Apartment Hunting Platform",
    description:
      "Developed a semantic web application to streamline apartment hunting for ASU students. Utilized OWL, Python, and semantic web practices to integrate complex datasets, offering advanced search and filtering capabilities for an enhanced user experience.",
    technologies: "OWL, Python, Semantic Web Practices",
  },
];

// Event listeners for opening the Projects Modal
const projectCards = document.getElementsByClassName("project-item");
for (let i = 0; i < projectCards.length; i++) {
  projectCards[i].addEventListener("click", function () {
    const projectId = this.getAttribute("data-project-id");
    const projectData = projectsData.find(
      (project) => project.id === projectId
    );

    if (projectData) {
      showProjectModal(
        projectData.title,
        projectData.description,
        projectData.technologies
      );
    }
  });
}

// Function to show the project modal with specific content
function showProjectModal(title, description, technologies) {
  projectTitle.innerHTML = title;
  projectDescription.innerHTML = description;
  projectTechnologies.innerHTML = technologies;

  // Display the modal
  projectModal.classList.add("active");
  projectOverlay.classList.add("active");
}

// Event listeners for closing the Projects Modal
projectCloseBtn.addEventListener("click", () => {
  projectModal.classList.remove("active");
  projectOverlay.classList.remove("active");
});
projectOverlay.addEventListener("click", () => {
  projectModal.classList.remove("active");
  projectOverlay.classList.remove("active");
});

// Function to clear the form fields
function clearForm() {
  document.getElementById("contact-form").reset();
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const fullname = event.target.fullname.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent("New message from " + fullname);
    const body = encodeURIComponent(`${message}`);

    // Set the recipient's email address
    const recipient = "aagar125@asu.edu";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Show the email modal
    document.querySelector(".email-modal-container").classList.add("active");
    document.querySelector(".email-overlay").classList.add("active");
  });

// Close the modal
document
  .querySelector(".email-modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".email-modal-container").classList.remove("active");
    document.querySelector(".email-overlay").classList.remove("active");
  });

document.querySelector(".email-overlay").addEventListener("click", function () {
  document.querySelector(".email-modal-container").classList.remove("active");
  document.querySelector(".email-overlay").classList.remove("active");
});

// Image Responsiveness (Remove Container on Mobile)

// Function to move the image out of the figure container and remove the figure
function removeProjectImageContainer() {
  if (window.innerWidth < 768) {
    const projectImgs = document.querySelectorAll(".project-img");

    projectImgs.forEach((figure) => {
      // Move the img out of the figure element
      const img = figure.querySelector("img");
      if (img) {
        figure.parentNode.insertBefore(img, figure);
      }

      // Remove the figure element
      figure.parentNode.removeChild(figure);
    });
  }
}

// Run the function on initial load and on resize
removeProjectImageContainer();

// Run the function on window resize
window.addEventListener("resize", removeProjectImageContainer);

// Splash Screes JS

document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.querySelector("main");

  // Ensure main content is hidden initially
  mainContent.classList.add("hidden");

  // Function to hide splash screen and show main content
  function hideSplashScreen() {
    splashScreen.style.display = "none";
    mainContent.classList.remove("hidden");
  }

  // Development: Hide splash screen after a set time
  // setTimeout(hideSplashScreen, 3000);

  // Production: Hide splash screen after window load
  window.addEventListener("load", hideSplashScreen);
});
