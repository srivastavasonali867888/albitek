document.getElementById('catalogueForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const message = document.getElementById('form-message');

  if (!emailInput.value.includes('@')) {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = 'red';
    return;
  }

  emailjs.send("service_mwg5u5x", "template_lgnuoab", {
    user_email: emailInput.value,
  })
  .then(() => {
    message.textContent = 'Catalogue request sent successfully!';
    message.style.color = 'green';
    emailInput.value = '';
  })
  .catch((error) => {
    message.textContent = 'Failed to send. Try again later.';
    message.style.color = 'red';
    console.error('EmailJS error:', error);
    alert('Error sending email: ' + JSON.stringify(error));
  });
});

 let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-image");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000); 