let activeCategory = blogData.categories[0]?.id || '';

function initBlog() {
  renderCategories();
  renderPosts(activeCategory);
}

function renderCategories() {
  const list = document.getElementById('categoryList');
  if (!list) return;
  list.innerHTML = blogData.categories.map(cat => `
    <li>
      <button
        class="blog-cat-btn${cat.id === activeCategory ? ' active' : ''}"
        onclick="selectCategory('${cat.id}')"
      >${cat.label}</button>
    </li>
  `).join('');
}

function selectCategory(id) {
  activeCategory = id;
  renderCategories();
  renderPosts(id);
}

function renderPosts(categoryId) {
  const panel = document.getElementById('postPanel');
  const heading = document.getElementById('panelHeading');
  if (!panel) return;

  const cat = blogData.categories.find(c => c.id === categoryId);
  if (heading) heading.textContent = cat?.label || '';

  const posts = blogData.posts[categoryId] || [];

  if (posts.length === 0) {
    panel.innerHTML = '<p class="post-empty">Posts coming soon — follow along on Substack.</p>';
    return;
  }

  panel.innerHTML = `<div class="post-list">${posts.map(post => `
    <a href="${post.url}" target="_blank" rel="noopener" class="post-card">
      <div class="post-thumb">
        ${post.image
          ? `<img src="${post.image}" alt="${post.title}" loading="lazy">`
          : `<div class="post-thumb-placeholder">✦</div>`}
      </div>
      <div class="post-info">
        <div class="post-title">${post.title}</div>
        <div class="post-preview">${post.preview}</div>
        <div class="post-meta">${post.date} · Read on Substack ↗</div>
      </div>
    </a>
  `).join('')}</div>`;
}

document.addEventListener('DOMContentLoaded', initBlog);
