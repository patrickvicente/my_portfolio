const contactContainer = document.getElementById('about-me-contact'); // Get the element with id "about-me-contact"
const contactLink = document.getElementById("contact-link"); // Get the element with id "contact-link"
const aboutMeButton = document.getElementById('btn-about-me'); // Get the element with id "btn-about-me"

// Function to toggle the visibility of contactContainer
function toggleContactContainer() {


  if (contactContainer.style.display === 'none') {
    contactContainer.style.display = "flex";
  } else {
    contactContainer.style.display = "none"
  }
}

contactLink.addEventListener("click", function(event) { // Add click event listener to contactLink
  event.preventDefault(); // Prevent the default behavior of the link
  toggleContactContainer(); // Call the toggleContactContainer function
});

aboutMeButton.addEventListener("click", function(event) { // Add click event listener to aboutMeButton
  event.preventDefault();
  toggleContactContainer(); // Call the toggleContactContainer function
});

