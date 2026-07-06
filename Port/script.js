/* =========================================================
   SCRIPT.JS
   This file controls INTERACTIVITY — what happens when
   someone clicks or the page loads. It does NOT control
   colors/layout (that's styles.css) or content (that's
   index.html).

   There are two features here:
   1. Mobile menu open/close (the hamburger icon)
   2. Fallback placeholder when a portfolio/profile image
      fails to load (so broken images don't look ugly)
   ========================================================= */

/* ---------------------------------------------------------
   FEATURE 1: Mobile menu toggle
   --------------------------------------------------------- */

// Run this once the page has fully loaded, so we know all
// the HTML elements below actually exist before we look for them.
document.addEventListener('DOMContentLoaded', function () {

  // Grab the hamburger button and the menu it opens/closes.
  // These IDs must match the id="" attributes in index.html.
  var menuButton = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileNav');

  // Safety check: if either element is missing, stop here
  // instead of crashing the whole script.
  if (!menuButton || !mobileMenu) {
    return;
  }

  // When the hamburger button is clicked, toggle the menu open/closed.
  menuButton.addEventListener('click', function () {
    var isNowOpen = mobileMenu.classList.toggle('open');

    // Keeps screen readers informed about whether the menu is open.
    menuButton.setAttribute('aria-expanded', isNowOpen);
  });

  // When someone taps a link INSIDE the mobile menu, close the
  // menu automatically so it doesn't stay open after navigating.
  var mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
});

/* ---------------------------------------------------------
   FEATURE 2: Image fallback placeholder
   ---------------------------------------------------------
   If an <img> tag's file (e.g. images/project-1.jpg) is
   missing or hasn't been uploaded yet, this hides the broken
   image icon and shows a clean "+ images/project-1.jpg"
   placeholder box instead, so the layout still looks correct
   while you're waiting on real photos.

   HOW TO USE THIS IN index.html:
   <img src="images/project-1.jpg" alt="..." onerror="handleImageError(this)">
   <div class="thumb-placeholder" style="display:none;">
     <div class="plus">+</div>
     <span>images/project-1.jpg</span>
   </div>
   --------------------------------------------------------- */
function handleImageError(imgElement) {
  // Hide the broken image itself.
  imgElement.style.display = 'none';

  // Show the placeholder box that sits right after it in the HTML.
  var placeholder = imgElement.nextElementSibling;
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
}

/* ---------------------------------------------------------
   FEATURE 3: Contact form submit
   ---------------------------------------------------------
   Right now this ONLY shows a popup message — it does not
   send a real email anywhere. To actually receive messages,
   connect this to a form backend (e.g. Formspree, Getform,
   or your own server) and replace the alert() below with
   real code that sends the form data there.
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', function (event) {
    // Stops the browser from doing a full page reload on submit.
    event.preventDefault();

    alert('Form submitted — connect this to your email service to receive messages.');
  });
});
