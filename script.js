var options = {
    strings: [
        '<span class="colored-text">A Web Developer</span>',
        '<span class="colored-text">A Creative Designer</span>'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    contentType: 'html' // This allows Typed.js to render HTML content
};

var typed = new Typed(".multiple-text", options);
function filterSelection(category) {
    const cards = document.getElementsByClassName('card');
    if (category === 'all') {
      // Show all cards
      for (let card of cards) {
        card.style.display = 'block';
      }
    } else {
      // Hide cards not matching the category and show matching ones
      for (let card of cards) {
        const dataName = card.getAttribute('data-name');
        if (dataName === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    }

    // Toggle active class for buttons
    const buttons = document.getElementsByClassName('filter')[0].getElementsByTagName('button');
    for (let button of buttons) {
      if (button.getAttribute('data-name') === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    }
  }



  const darkModeIcon = document.getElementById('darkMode-icon');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    console.log('Dark mode toggled:', document.body.classList.contains('dark-mode')); // Debug log

    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

darkModeIcon.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    }
});

