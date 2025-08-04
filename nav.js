// Shared navigation component
function createNavigation(activePage = '') {
  const nav = `
    <header>
      <div class="head-inner">
        <a class="brand" href="index.html">Dr. Hassan&nbsp;Kanso</a>
        <nav>
          <ul>
            <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
            <li><a href="LabVault.html" ${activePage === 'labvault' ? 'class="active"' : ''}>LabVault</a></li>
          </ul>
        </nav>
        <div class="social">
          <a href="mailto:drhassankanso@gmail.com" aria-label="Email"><svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M2 4h20v16H2zm10 8 8-6H4z"/></svg></a>
          <a href="https://github.com/Dr-Kanso" aria-label="GitHub"><svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.36 22.94c.58.11.79-.25.79-.55v-2.14c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.09 1.8 1.21 1.8 1.21 1.05 1.8 2.76 1.28 3.44.98.11-.76.41-1.28.75-1.58-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.8a11.1 11.1 0 0 1 2.89.39c2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg></a>
          <a href="https://www.linkedin.com/in/hassankanso/" aria-label="LinkedIn"><svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3zM9 8.98h3.8v1.62h.05c.53-.9 1.83-1.85 3.77-1.85 4.03 0 4.78 2.65 4.78 6.09v7.14h-4V15.2c0-2.37-.05-5.42-3.3-5.42-3.3 0-3.8 2.58-3.8 5.26v6.02H9z"/></svg></a>
        </div>
      </div>
    </header>
  `;
  
  // Insert navigation at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', nav);
}

// Auto-detect current page and set active state
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop();
  let activePage = '';
  
  if (currentPage === 'index.html' || currentPage === '') {
    activePage = 'home';
  } else if (currentPage === 'LabVault.html') {
    activePage = 'labvault';
  }
  
  createNavigation(activePage);
});