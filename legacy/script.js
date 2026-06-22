/* ============================================================
   Midnight Terminal — interactions
   ============================================================ */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Data ---------- */
  const STACK = [
    { cat: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'] },
    { cat: 'Backend', items: ['Node.js', 'C#', '.NET', 'Express', 'Python', 'REST', 'GraphQL'] },
    { cat: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Prisma'] },
    { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux', 'Figma'] },
  ];

  const PROJECTS = [
    { icon: '🛰️', title: 'Orbit Dashboard', desc: 'Real-time analytics dashboard with live websocket streams and a custom charting engine.', tags: ['React', 'Node', 'WebSocket'], live: '#', repo: '#' },
    { icon: '🧠', title: 'Neural Notes', desc: 'AI-powered note app that summarizes and links your thoughts automatically.', tags: ['Next.js', 'OpenAI', 'Postgres'], live: '#', repo: '#' },
    { icon: '🎮', title: 'Pixel Arena', desc: 'Multiplayer browser game with authoritative server and 60fps canvas rendering.', tags: ['TypeScript', 'Canvas', 'Socket.io'], live: '#', repo: '#' },
    { icon: '💸', title: 'PayFlow', desc: 'Payment orchestration platform handling subscriptions and invoicing at scale.', tags: ['.NET', 'Stripe', 'Redis'], live: '#', repo: '#' },
    { icon: '📦', title: 'DevKit CLI', desc: 'Open-source CLI that scaffolds full-stack apps in seconds. 2k+ stars.', tags: ['Node', 'CLI', 'OSS'], live: '#', repo: '#' },
    { icon: '🌐', title: 'this site', desc: 'The portfolio you are looking at — built from scratch with vanilla web tech.', tags: ['HTML', 'CSS', 'JS'], live: '#', repo: '#' },
  ];

  const TIMELINE = [
    { date: '2024 — Present', role: 'Senior Software Developer', co: 'Gjirafa', list: ['Lead frontend architecture across multiple products', 'Mentored a team of 4 developers', 'Cut page load times by 45%'] },
    { date: '2022 — 2024', role: 'Full-Stack Developer', co: 'Tech Studio', list: ['Built and shipped 8 client products end to end', 'Introduced CI/CD pipelines and testing culture'] },
    { date: '2020 — 2022', role: 'Junior Developer', co: 'Startup Lab', list: ['Developed core features for a SaaS platform', 'Learned to ship fast and break (almost) nothing'] },
  ];

  /* ---------- Render dynamic content ---------- */
  const stackGrid = $('#stackGrid');
  STACK.forEach(c => {
    const el = document.createElement('div');
    el.className = 'stack__cat reveal';
    el.innerHTML = `<h3>${c.cat}</h3><div class="stack__items">${c.items.map(i => `<span class="stack__item">${i}</span>`).join('')}</div>`;
    stackGrid.appendChild(el);
  });

  const projectGrid = $('#projectGrid');
  PROJECTS.forEach(p => {
    const el = document.createElement('article');
    el.className = 'project reveal';
    el.innerHTML = `
      <div class="project__top">
        <span class="project__icon">${p.icon}</span>
        <div class="project__links">
          <a href="${p.live}" target="_blank" rel="noopener">live ↗</a>
          <a href="${p.repo}" target="_blank" rel="noopener">code ↗</a>
        </div>
      </div>
      <h3 class="project__title">${p.title}</h3>
      <p class="project__desc">${p.desc}</p>
      <div class="project__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>`;
    // spotlight follow
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--px', `${e.clientX - r.left}px`);
      el.style.setProperty('--py', `${e.clientY - r.top}px`);
    });
    projectGrid.appendChild(el);
  });

  const tl = $('#timeline-list');
  TIMELINE.forEach(t => {
    const el = document.createElement('div');
    el.className = 'tl-item reveal';
    el.innerHTML = `
      <p class="tl-item__date">${t.date}</p>
      <h3 class="tl-item__role">${t.role}</h3>
      <p class="tl-item__co">${t.co}</p>
      <ul class="tl-item__list">${t.list.map(i => `<li>${i}</li>`).join('')}</ul>`;
    tl.appendChild(el);
  });

  /* ---------- Boot sequence ---------- */
  const boot = $('#boot');
  const bootLog = $('#bootLog');
  const bootProgress = $('#bootProgress');
  const lines = [
    'booting developer.exe ...',
    'loading modules ........ ok',
    'mounting /skills ....... ok',
    'establishing connection  ok',
    'rendering interface ....',
  ];
  function runBoot() {
    if (reduced || sessionStorage.getItem('booted')) { finishBoot(true); return; }
    let i = 0, done = 0;
    const tick = () => {
      if (i < lines.length) {
        bootLog.textContent += lines[i] + '\n';
        done = Math.round(((i + 1) / lines.length) * 100);
        bootProgress.style.width = done + '%';
        i++;
        setTimeout(tick, 260);
      } else {
        setTimeout(() => finishBoot(false), 450);
      }
    };
    tick();
  }
  function finishBoot(instant) {
    sessionStorage.setItem('booted', '1');
    boot.classList.add('is-done');
    startTyping();
    if (instant) boot.style.transition = 'none';
    setTimeout(() => boot.remove(), 700);
  }

  /* ---------- Hero typing ---------- */
  function startTyping() {
    const target = $('#typed');
    if (!target) return;
    const phrases = ['initializing developer.exe', 'whoami → albin', 'status: building cool things'];
    if (reduced) { target.textContent = phrases[0]; return; }
    let p = 0, c = 0, deleting = false;
    const loop = () => {
      const word = phrases[p];
      target.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);
      let delay = deleting ? 35 : 70;
      if (!deleting && c === word.length + 1) { deleting = true; delay = 1600; }
      else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 350; }
      setTimeout(loop, delay);
    };
    loop();
  }

  /* ---------- Text scramble ---------- */
  function scramble(el) {
    if (reduced) return;
    const final = el.dataset.text || el.textContent;
    el.dataset.text = final;
    const chars = '!<>-_\\/[]{}=+*^?#01';
    let frame = 0;
    const queue = [...final].map((ch, i) => ({ ch, start: Math.floor(Math.random() * 12), end: Math.floor(Math.random() * 12) + 12 + i }));
    const update = () => {
      let out = '', complete = 0;
      queue.forEach(q => {
        if (frame >= q.end) { out += q.ch; complete++; }
        else if (frame >= q.start) { out += `<span style="color:var(--accent)">${chars[Math.floor(Math.random() * chars.length)]}</span>`; }
        else out += '';
      });
      el.innerHTML = out;
      if (complete < queue.length) { frame++; requestAnimationFrame(update); }
      else el.textContent = final;
    };
    update();
  }

  /* ---------- Scroll reveals ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        if (e.target.dataset.scramble !== undefined) scramble(e.target);
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  $$('.reveal, [data-scramble], [data-count]').forEach(el => io.observe(el));

  /* ---------- Count up ---------- */
  function countUp(el) {
    const target = +el.dataset.count;
    if (reduced) { el.textContent = target.toLocaleString(); return; }
    const dur = 1400; let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  }

  /* ---------- Custom cursor ---------- */
  if (!reduced && window.matchMedia('(min-width: 821px)').matches) {
    const cursor = $('#cursor'), dot = $('#cursorDot');
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    const render = () => {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(render);
    };
    render();
    $$('a, button, [data-magnetic], input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* ---------- Magnetic buttons ---------- */
  if (!reduced && window.matchMedia('(min-width: 821px)').matches) {
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Spotlight follow ---------- */
  document.addEventListener('mousemove', e => {
    const sp = $('#spotlight');
    sp.style.setProperty('--mx', `${e.clientX}px`);
    sp.style.setProperty('--my', `${e.clientY}px`);
  });

  /* ---------- Nav scroll state ---------- */
  const nav = $('#nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  });

  /* ---------- Mobile drawer ---------- */
  const burger = $('#burger'), drawer = $('#drawer');
  const toggleDrawer = (open) => {
    burger.classList.toggle('is-open', open);
    drawer.classList.toggle('is-open', open);
  };
  burger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('is-open')));
  $$('#drawer a').forEach(a => a.addEventListener('click', () => toggleDrawer(false)));

  /* ---------- Contact form ---------- */
  const form = $('#contactForm'), status = $('#formStatus');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      status.style.color = 'var(--coral)';
      status.textContent = '✗ all fields are required';
      return;
    }
    status.style.color = 'var(--accent)';
    status.textContent = '⟳ sending...';
    setTimeout(() => {
      status.textContent = '✓ message sent — I\'ll get back to you soon.';
      form.reset();
    }, 900);
  });

  /* ---------- Year ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Konami easter egg ---------- */
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  document.addEventListener('keydown', e => {
    pos = (e.key === code[pos] || e.key.toLowerCase() === code[pos]) ? pos + 1 : 0;
    if (pos === code.length) {
      pos = 0;
      const toast = $('#toast');
      document.documentElement.style.setProperty('--accent', '#FF2E97');
      document.documentElement.style.setProperty('--accent-soft', 'rgba(255,46,151,0.14)');
      document.documentElement.style.setProperty('--glow', '0 0 24px rgba(255,46,151,0.4)');
      toast.classList.add('is-show');
      setTimeout(() => toast.classList.remove('is-show'), 2600);
    }
  });

  /* ---------- Init ---------- */
  runBoot();
})();
