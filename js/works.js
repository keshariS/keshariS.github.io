function renderWorks() {
  renderProjects();
  renderPapers();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = worksData.projects.map(p => `
    <a href="${p.github}" target="_blank" rel="noopener" class="project-sq" title="${p.title}">
      <div class="project-sq-img">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
          : `<div class="project-sq-placeholder">◈</div>`}
      </div>
      <div class="project-sq-overlay">
        <div class="project-sq-title">${p.title}</div>
        <div class="project-sq-desc">${p.description}</div>
        <span class="project-sq-link">View on GitHub →</span>
      </div>
    </a>
  `).join('');
}

function renderPapers() {
  const list = document.getElementById('papersList');
  if (!list) return;
  list.innerHTML = worksData.papers.map((p, i) => `
    <div class="paper-card" id="paper-${i}">
      <div class="paper-header" onclick="togglePaper(${i})">
        <div class="paper-header-text">
          <div class="paper-title">${p.title}</div>
          ${p.venue ? `<div class="paper-venue">${p.venue}</div>` : ''}
          <div class="paper-preview">${p.abstract}</div>
        </div>
        <div class="paper-meta-row">
          <span class="paper-year">${p.year}</span>
          <svg class="paper-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
      <div class="paper-body">
        <div class="paper-abstract">${p.abstract}</div>
        <div class="paper-actions">
          ${p.pdf ? `<a href="${p.pdf}" class="paper-action primary-action" target="_blank">↓ Download PDF</a>` : ''}
          ${p.poster ? `<a href="${p.poster}" class="paper-action" target="_blank">${p.posterLabel || 'Poster'} ↗</a>` : ''}
          ${p.scholar ? `<a href="${p.scholar}" class="paper-action" target="_blank">Google Scholar ↗</a>` : ''}
          ${p.doi ? `<a href="${p.doi}" class="paper-action" target="_blank">DOI ↗</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function togglePaper(index) {
  const card = document.getElementById(`paper-${index}`);
  card?.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', renderWorks);
