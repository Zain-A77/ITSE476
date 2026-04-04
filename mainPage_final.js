const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

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
}

const currentDate = document.getElementById('currentDate');
if (currentDate) {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
  welcomeBtn.addEventListener('click', () => {
    alert('Welcome to our OpenShelf open-source project!');
  });
}

const projectModal = document.getElementById('projectModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    projectModal.classList.add('show');
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    projectModal.classList.remove('show');
  });
}

if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('show');
    }
  });
}

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

function animateCounter(id, target, speed) {
  const el = document.getElementById(id);
  if (!el) return;

  let count = 0;
  const step = Math.ceil(target / speed);

  const interval = setInterval(() => {
    count += step;

    if (count >= target) {
      el.textContent = target + '+';
      clearInterval(interval);
    } else {
      el.textContent = count + '+';
    }
  }, 25);
}

animateCounter('booksCount', 1200, 60);
animateCounter('usersCount', 350, 50);
animateCounter('reportsCount', 90, 40);

const searchBtn = document.getElementById('searchBtn');
const featureSearch = document.getElementById('featureSearch');
const searchResult = document.getElementById('searchResult');

const featureMap = {
  books: 'Manage books including adding, editing, deleting, and organizing records.',
  users: 'Support all types of users with flexible account management and access control.',
  borrow: 'Track borrowing operations, due dates, and return status.',
  returns: 'Manage book returns and update availability in the system.',
  reports: 'Generate reports related to system usage and overdue items.'
};

function runSearch() {
  const query = featureSearch.value.trim().toLowerCase();

  if (!query) {
    searchResult.textContent = 'Please enter a keyword first.';
    return;
  }

  if (featureMap[query]) {
    searchResult.textContent = featureMap[query];
  } else {
    searchResult.textContent = 'No exact result found. Try: books, users, borrow, returns, or reports.';
  }
}

if (searchBtn) {
  searchBtn.addEventListener('click', runSearch);
}

if (featureSearch) {
  featureSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      runSearch();
    }
  });
}

const announcements = [
  {
    tag: 'Completed',
    title: 'Main Page Completed',
    text: 'The main page has been fully developed with modern design and interactive components.'
  },
  {
    tag: 'Completed',
    title: 'Users Page Completed',
    text: 'The Users page has been successfully developed and includes account access, issue reporting, and borrowing features.'
  },
  {
    tag: 'Completed',
    title: 'Developers Page Completed',
    text: 'The Developers page is fully available and provides access to the GitHub repository, contribution guidelines, and project documentation.'
  }
];

let announcementIndex = 0;

const announcementTag = document.getElementById('announcementTag');
const announcementTitle = document.getElementById('announcementTitle');
const announcementText = document.getElementById('announcementText');
const prevAnnouncement = document.getElementById('prevAnnouncement');
const nextAnnouncement = document.getElementById('nextAnnouncement');
const announcementList = document.getElementById('announcementList');

function renderAnnouncement() {
  const item = announcements[announcementIndex];
  announcementTag.textContent = item.tag;
  announcementTitle.textContent = item.title;
  announcementText.textContent = item.text;

  announcementList.innerHTML = announcements.map((a, index) => {
    return `
      <div class="announcement-item" style="${index === announcementIndex ? 'border:2px solid #c8a58a;' : ''}">
        <strong>${a.title}</strong><br>
        <span>${a.text}</span>
      </div>
    `;
  }).join('');
}

if (prevAnnouncement) {
  prevAnnouncement.addEventListener('click', () => {
    announcementIndex = (announcementIndex - 1 + announcements.length) % announcements.length;
    renderAnnouncement();
  });
}

if (nextAnnouncement) {
  nextAnnouncement.addEventListener('click', () => {
    announcementIndex = (announcementIndex + 1) % announcements.length;
    renderAnnouncement();
  });
}

renderAnnouncement();
