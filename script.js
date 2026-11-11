(() => {
  const c = window.SITE_CONTENT;
  const labels = {
    en: { nav: ["About", "News", "Experience", "Research", "Publications", "Notes"], about: "About Me", news: "News", experience: "Experience", research: "Research Interests", publications: "Publications", notes: "Research Notes", location: "Graduate Research · Shenyang, China", hint: "Links will be enabled when provided.", emptyTitle: "Publication list in preparation", emptyText: "Publication records, paper links, code, and project pages will be added here after the relevant information is provided.", soon: "COMING SOON", back: "Back to top", updated: "Last updated: November 2026" },
    zh: { nav: ["关于我", "动态", "经历", "研究", "论文", "随笔"], about: "关于我", news: "最新动态", experience: "教育经历", research: "研究方向", publications: "论文发表", notes: "研究随笔", location: "研究生阶段 · 中国沈阳", hint: "相关链接将在补充后启用。", emptyTitle: "论文列表整理中", emptyText: "论文条目、全文链接、代码和项目页面将在补充相关信息后展示于此。", soon: "即将更新", back: "返回顶部", updated: "最后更新：2026 年 11 月" }
  };
  const ids = ["about", "news", "experience", "research", "publications", "notes"];
  const pick = (value, lang) => typeof value === "string" ? value : value[lang];

  function render(lang) {
    const t = labels[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = lang;
    document.querySelector(".brand span:last-child").textContent = c.profile.name;
    document.querySelector(".brand-mark").textContent = c.profile.initials;
    document.querySelector(".portrait span").textContent = c.profile.initials;
    document.querySelector(".profile-card h1").textContent = c.profile.name;
    document.getElementById("lang-switch").textContent = lang === "en" ? "中文" : "EN";
    document.getElementById("nav").innerHTML = t.nav.map((x, i) => `<a href="#${ids[i]}">${x}</a>`).join("");
    document.getElementById("profile-role").textContent = pick(c.profile.role, lang);
    document.getElementById("profile-facts").innerHTML = `
      <li><span class="fact-icon">U</span><span>${pick(c.profile.affiliation, lang)}</span></li>
      <li><span class="fact-icon">P</span><span>${pick(c.profile.location, lang)}</span></li>
      <li><span class="fact-icon">@</span><span>${c.profile.email}</span></li>`;
    document.getElementById("profile-links").innerHTML = c.profile.links.map(x => x.url ? `<a href="${x.url}" target="_blank" rel="noopener">${x.label}</a>` : `<span>${x.label}</span>`).join("");
    document.getElementById("profile-hint").textContent = t.hint;

    document.getElementById("about").innerHTML = `<p class="kicker">ROBIN CAI · WEARABLE ROBOTICS</p><h2>${t.about}</h2><p class="about-lead">${c.about[lang][0]}</p><p>${c.about[lang][1]}</p><div class="affiliation-row"><span class="institution-badge">NEU</span><div><strong>Northeastern University</strong><small>${t.location}</small></div><span class="research-chip">EXOSKELETON</span></div><p class="collaborate">${pick(c.about.collaboration, lang)}</p>`;
    document.getElementById("news").innerHTML = `<h2><span class="section-emoji">🔥</span>${t.news}</h2><div class="news-list">${c.news.map(x => `<div class="news-item"><time>${pick(x.date, lang)}</time><p>${pick(x.text, lang)}</p></div>`).join("")}</div>`;
    document.getElementById("experience").innerHTML = `<h2><span class="section-emoji">📖</span>${t.experience}</h2><div class="timeline">${c.education.map(x => `<div class="timeline-item"><div class="timeline-mark">${x.mark}</div><div class="timeline-date">${pick(x.range, lang)}</div><div><h3>${pick(x.school, lang)}</h3><p>${pick(x.detail, lang)}</p></div></div>`).join("")}</div>`;
    document.getElementById("research").innerHTML = `<h2><span class="section-emoji">💬</span>${t.research}</h2><div class="interest-grid">${c.interests.map(x => `<article class="interest-card"><div class="interest-icon">${x.icon}</div><div><h3>${pick(x.title, lang)}</h3><p>${pick(x.description, lang)}</p><div class="tag-row">${x.tags.map(tag => `<span>${tag}</span>`).join("")}</div></div></article>`).join("")}</div>`;
    const pubs = c.publications.length ? `<div class="publication-list">${c.publications.map((x, i) => `<article class="publication"><span>${x.year || ""}</span><div><h3>${x.url ? `<a href="${x.url}" target="_blank" rel="noopener">${x.title}</a>` : x.title}</h3><p>${x.authors}</p><small>${x.venue || ""}${x.code ? ` · <a href="${x.code}" target="_blank" rel="noopener">Code</a>` : ""}</small></div></article>`).join("")}</div>` : `<div class="empty-publications"><div class="paper-thumb"><span>01</span><i></i><i></i><i></i></div><div><h3>${t.emptyTitle}</h3><p>${t.emptyText}</p><span class="status-pill">${t.soon}</span></div></div>`;
    document.getElementById("publications").innerHTML = `<h2><span class="section-emoji">📝</span>${t.publications}</h2>${pubs}`;
    document.getElementById("notes").innerHTML = `<h2><span class="section-emoji">✍</span>${t.notes}</h2><div class="notes-list">${c.notes.map((x, i) => `<div class="note-row"><span>${String(i + 1).padStart(2, "0")}</span><h3>${x.url ? `<a href="${x.url}">${pick(x.title, lang)}</a>` : pick(x.title, lang)}</h3><small>${pick(x.status, lang)}</small></div>`).join("")}</div>`;
    document.getElementById("footer").innerHTML = `<p>© 2026 ${c.profile.name} · ${t.updated}</p><a href="#about">↑ ${t.back}</a>`;
    localStorage.setItem("robin-cai-language", lang);
  }

  let lang = localStorage.getItem("robin-cai-language") === "zh" ? "zh" : "en";
  document.getElementById("lang-switch").addEventListener("click", () => { lang = lang === "en" ? "zh" : "en"; render(lang); });
  render(lang);
})();

