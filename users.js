document.addEventListener("DOMContentLoaded", function () {

  // ================= MENU TOGGLE =================
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ================= MODAL ELEMENTS =================
  const modal = document.getElementById('resourceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  function closeModalFunc() {
    modal.classList.remove('show');
  }

  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
  }

  // ================= RESOURCES =================
  const resourceButtons = document.querySelectorAll('.resource-btn');

  resourceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const resourceName = btn.getAttribute('data-resource');

      modalTitle.textContent = resourceName;

      if (resourceName === "User Guide") {
        modalBody.innerHTML = `
          <p>1. Click Resources to view files</p>
          <p>2. Click Announcements to see updates</p>
          <p>3. Use the form to report issues</p>
          <button id="understandBtn" class="btn btn-primary">I Understand</button>
        `;

        setTimeout(() => {
          const btn = document.getElementById('understandBtn');
          if (btn) btn.addEventListener('click', closeModalFunc);
        }, 0);
      }

      if (resourceName === "Screenshots") {
        modalBody.innerHTML = `
          <div style="max-height:400px; overflow-y:auto; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <img src="images/img1.png" class="zoom-img">
            <img src="images/img2.png" class="zoom-img">
            <img src="images/img3.png" class="zoom-img">
            <img src="images/img4.png" class="zoom-img">
            <img src="images/img5.png" class="zoom-img">
            <img src="images/img6.png" class="zoom-img">
            <img src="images/img7.png" class="zoom-img">
            <img src="images/img8.png" class="zoom-img">
            <img src="images/img9.png" class="zoom-img">
            <img src="images/img10.png" class="zoom-img">
            <img src="images/img11.png" class="zoom-img">
            <img src="images/img12.png" class="zoom-img">
            <img src="images/img13.png" class="zoom-img">
            <img src="images/img14.png" class="zoom-img">
            <img src="images/img16.png" class="zoom-img">
            <img src="images/img17.png" class="zoom-img">
            <img src="images/img18.png" class="zoom-img">
          </div>

          <button id="okBtn" class="btn btn-primary" style="margin-top:15px;">OK</button>
        `;

        setTimeout(() => {
          const okBtn = document.getElementById('okBtn');
          if (okBtn) okBtn.addEventListener('click', closeModalFunc);
        }, 0);
      }

      if (resourceName === "Example Output") {
        modalBody.innerHTML = `
          <pre>Example Result:
User logged in successfully
Data retrieved ✔</pre>
          <button id="okBtn" class="btn btn-primary" style="margin-top:15px;">OK</button>
        `;

        setTimeout(() => {
          const okBtn = document.getElementById('okBtn');
          if (okBtn) okBtn.addEventListener('click', closeModalFunc);
        }, 0);
      }

      modal.classList.add('show');
    });
  });

  // ================= IMAGE CLICK (OVERLAY) =================
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('zoom-img')) {

      const overlay = document.createElement('div');

      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '2000';

      overlay.innerHTML = `
        <img src="${e.target.src}" style="max-width:90%; max-height:90%; border-radius:10px;">
      `;

      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    }
  });

  // ================= USER ANNOUNCEMENTS =================
  const userAnnouncements = [
    {
      tag: 'Update',
      title: 'User Dashboard Released',
      text: 'Users can now access their personal dashboard.'
    },
    {
      tag: 'Fix',
      title: 'Issue Reporting Improved',
      text: 'Bug reporting system is now more stable and faster.'
    },
    {
      tag: 'New',
      title: 'Resources Section Added',
      text: 'Users can now access project files and guides.'
    }
  ];

  let userAnnouncementIndex = 0;

  const uTag = document.getElementById('uTag');
  const uTitle = document.getElementById('uTitle');
  const uText = document.getElementById('uText');
  const uPrev = document.getElementById('uPrev');
  const uNext = document.getElementById('uNext');

  function renderUserAnnouncement() {
    const item = userAnnouncements[userAnnouncementIndex];

    if (uTag) uTag.textContent = item.tag;
    if (uTitle) uTitle.textContent = item.title;
    if (uText) uText.textContent = item.text;
  }

  if (uPrev) {
    uPrev.addEventListener('click', () => {
      userAnnouncementIndex =
        (userAnnouncementIndex - 1 + userAnnouncements.length) %
        userAnnouncements.length;
      renderUserAnnouncement();
    });
  }

  if (uNext) {
    uNext.addEventListener('click', () => {
      userAnnouncementIndex =
        (userAnnouncementIndex + 1) % userAnnouncements.length;
      renderUserAnnouncement();
    });
  }

  renderUserAnnouncement();

  // ================= ISSUE REPORTING =================
  const issueForm = document.getElementById('issueForm');
  const issueResult = document.getElementById('issueResult');

  if (issueForm) {
    issueForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('issueTitle').value;
      const description = document.getElementById('issueDescription').value;

      if (!title.trim() || !description.trim()) {
        issueResult.textContent = "Please fill all fields.";
        issueResult.style.color = "red";
        return;
      }

      issueResult.textContent =
        "Issue submitted successfully! (Simulated GitHub submission)";
      issueForm.reset();
    });
  }

  // ================= SCROLL TOP BUTTON =================
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ================= DARK MODE =================
    const darkToggle = document.getElementById('darkToggle');

    function updateDarkButton() {
      if (!darkToggle) return;

      if (document.body.classList.contains('dark-mode')) {
        darkToggle.innerHTML = '☀️ Light Mode';
      } else {
        darkToggle.innerHTML = '🌙 Dark Mode';
      }
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    updateDarkButton();

    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
        } else {
          localStorage.setItem('darkMode', 'disabled');
        }

        updateDarkButton();
      });
    }
  }

});