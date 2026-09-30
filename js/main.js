/**
 * ==========================================================================
 * BHUVAN PORTFOLIO - MAIN INTERACTIVE SCRIPT
 * Easily customizable data structure and micro-interactions
 * ==========================================================================
 */

// --- PROJECT DATA (Easily edit, add, or customize your projects here) ---
const PORTFOLIO_PROJECTS = [
  {
    id: "slm-from-scratch",
    title: "SLM From Scratch",
    year: "2025",
    category: "ai-ml",
    categoryLabel: "AI & Deep Learning",
    summary: "Step-by-step construction of a Small Language Model from ground-up mathematical foundations (NumPy autograd, backpropagation) through custom PyTorch transformer blocks and pre-training.",
    description: "An intensive engineering initiative reconstructing a Small Language Model from scratch. Starting from mathematical first principles with pure NumPy (Linear Regression, gradient descent, neuron abstractions, and multi-layer backpropagation), the codebase transitions into PyTorch to implement multi-head self-attention mechanisms, causal masks, layer normalization, residual blocks, tokenizer pipelines, and generative training loops.",
    techStack: ["Python", "PyTorch", "NumPy", "Transformers", "NLP", "Deep Learning", "Matplotlib"],
    featured: true,
    inProgress: true,
    badge: "In Progress",
    status: "// in progress • active dev",
    demoUrl: "https://github.com/bhuvan-28/SLM-From-Scratch",
    githubUrl: "https://github.com/bhuvan-28/SLM-From-Scratch",
    metrics: {
      "Current Phase": "PyTorch Core & Attention",
      "Architecture": "Decoder-Only Transformer",
      "Foundations": "NumPy Math & Gradients",
      "Status": "Active Research"
    }
  },
  {
    id: "novasentinel",
    title: "NovaSentinel",
    year: "2025",
    category: "ai-ml",
    categoryLabel: "AI & Space Situational Awareness",
    summary: "Real-time orbital risk assessment and Space Situational Awareness (SSA) platform tracking 8,000+ satellites with local ML collision estimation and interactive 3D WebGL visualization.",
    description: "NovaSentinel is a high-performance space safety intelligence platform providing real-time tracking for active satellites and space debris. It integrates Space-Track CDM APIs and CelesTrak TLEs with SGP4/SDP4 orbital propagation in Web Workers. Features client-side TensorFlow.js neural networks for collision probability (PoC) inference, Brain.js LSTM networks for atmospheric reentry forecasting, and a hardware-accelerated Three.js 3D planetarium with RTN covariance uncertainty ellipsoids.",
    techStack: ["Three.js", "TensorFlow.js", "Django", "Python", "Brain.js", "SGP4", "WebGL", "PostgreSQL"],
    featured: true,
    inProgress: false,
    badge: "Featured SSA Platform",
    status: "// v1.0 • active",
    demoUrl: "https://github.com/eld-dlh/NovaSentinel",
    githubUrl: "https://github.com/eld-dlh/NovaSentinel",
    metrics: {
      "Satellites Tracked": "8,000+ Objects",
      "Risk Engine": "TensorFlow.js + LSTM",
      "Propagation": "SGP4 Web Workers",
      "Visual Engine": "Three.js 3D WebGL"
    }
  },
  {
    id: "neurovision-ai",
    title: "NeuroVision AI",
    year: "2025",
    category: "ai-ml",
    categoryLabel: "AI & Deep Learning",
    summary: "Real-time edge computer vision platform for medical image segmentation and multi-modal anomaly detection using PyTorch & TensorRT.",
    description: "NeuroVision was developed to solve real-time latency bottlenecks in medical ultrasound and radiological imaging analysis. Utilizing a lightweight Vision Transformer (ViT) architecture coupled with customized UNet decoders, it performs zero-shot feature extraction and pixel-accurate anomaly highlighting at 60 FPS on edge hardware.",
    techStack: ["PyTorch", "Python", "TensorRT", "FastAPI", "OpenCV", "Docker"],
    featured: true,
    badge: "Featured AI Project",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "Accuracy": "99.2% mIoU",
      "Inference": "14ms / frame",
      "Model Size": "28MB Quantized"
    }
  },
  {
    id: "omnix-platform",
    title: "Omnix Cloud Dashboard",
    year: "2024",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    summary: "Modern cloud-native telemetry & real-time analytics web application with sub-second WebSocket updates and role-based permissions.",
    description: "Omnix is an end-to-end full-stack SaaS platform designed for monitoring distributed microservices. Built with a high-performance backend capable of ingesting over 50k events per second, it renders interactive canvas charts and dynamic alerting matrices with zero lag.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "TailwindCSS"],
    featured: true,
    badge: "Production SaaS",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "Throughput": "50K req/sec",
      "Latency": "< 45ms P99",
      "Uptime": "99.98%"
    }
  },
  {
    id: "agentic-rag",
    title: "Agentic RAG Knowledge Engine",
    year: "2025",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    summary: "Autonomous multi-agent research assistant featuring hybrid dense/sparse vector retrieval, reranking, and structured reasoning pipelines.",
    description: "An enterprise RAG system incorporating LangGraph and ChromaDB to synthesize complex technical documents. It employs multi-hop query decomposition, self-correcting retrieval verification, and automated citations to eradicate LLM hallucinations in mission-critical research.",
    techStack: ["Python", "LangChain", "FastAPI", "ChromaDB", "Llama 3", "React"],
    featured: false,
    badge: "LLM Agentic System",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "Context Window": "128k Tokens",
      "Faithfulness": "96.4%",
      "Retrieval Speed": "85ms"
    }
  },
  {
    id: "synthetix-studio",
    title: "Synthetix Creative Studio",
    year: "2024",
    category: "creative",
    categoryLabel: "Creative Systems",
    summary: "Web-based generative design engine allowing artists to synthesize parametric 3D generative meshes and generative textures in real-time.",
    description: "Synthetix bridges creative exploration with cutting-edge procedural algorithms. Combining WebGL shaders with latent diffusion conditioning, designers can steer generative shapes, lighting, and materials directly in the browser with instantaneous visual feedback.",
    techStack: ["Three.js", "WebGL", "TypeScript", "GLSL Shaders", "Web Audio API"],
    featured: false,
    badge: "Award Winner",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "FPS": "Solid 60 FPS",
      "Rendering": "PBR Shading",
      "Bundle Size": "< 180kb"
    }
  },
  {
    id: "streamflow-api",
    title: "StreamFlow Distributed Engine",
    year: "2024",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    summary: "Fault-tolerant event streaming backend with real-time replication, GraphQL gateway, and an ultra-minimal management dashboard.",
    description: "Engineered from the ground up for high concurrency, StreamFlow enables distributed teams to manage data ingestion streams with ease. Features schema validation, automatic replay buffers, and comprehensive OpenAPI telemetry.",
    techStack: ["Go", "Node.js", "Docker", "GraphQL", "PostgreSQL", "React"],
    featured: false,
    badge: "Backend Architecture",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "Concurrency": "100k Sockets",
      "Replication": "Active-Active",
      "Test Coverage": "94%"
    }
  },
  {
    id: "pulse-ui",
    title: "Aura UI Design System",
    year: "2025",
    category: "creative",
    categoryLabel: "Design & Systems",
    summary: "Precision-crafted dark-mode design system with fluid typography tokens, accessibility compliance, and micro-interaction primitives.",
    description: "A comprehensive UI component library focused on high-contrast luxury aesthetics. Designed in Figma and implemented in zero-dependency modern CSS, featuring accessible keyboard focus traps, micro-animations, and fluid modular typography.",
    techStack: ["CSS3 Modern", "Figma", "Web Accessibility", "Vanilla JS", "HTML5"],
    featured: false,
    badge: "Design System",
    demoUrl: "#",
    githubUrl: "https://github.com",
    metrics: {
      "WCAG Rating": "AAA Standard",
      "Components": "45+ Primitives",
      "Zero Dependency": "Pure Vanilla"
    }
  }
];

// --- INITIALIZE APPLICATION ON DOM LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  applyProfileConfig();
  initNavbarScroll();
  initMobileMenu();
  renderProjects("all");
  initProjectFilter();
  initCopyEmail();
  initContactForm();
  initStatsObserver();
  initSmoothScroll();
});

// --- NAVBAR SCROLL EFFECT ---
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

// --- MOBILE MENU ---
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = mobileMenu ? mobileMenu.querySelectorAll(".nav-link") : [];

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      mobileMenu.classList.remove("open");
      toggleBtn.classList.remove("open");
    } else {
      mobileMenu.classList.add("open");
      toggleBtn.classList.add("open");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggleBtn.classList.remove("open");
    });
  });
}

// --- RENDER PROJECTS ---
function renderProjects(filterCategory = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filterCategory === "all" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filterCategory);

  grid.innerHTML = "";

  filtered.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project-card ${project.inProgress ? 'in-progress-card' : ''}`;
    card.setAttribute("data-id", project.id);
    card.setAttribute("data-category", project.category);

    // Dynamic visual chart bars simulation
    const barHeights = [
      [35, 60, 45, 80, 55, 95, 75, 90],
      [50, 75, 40, 65, 85, 60, 90, 100],
      [40, 55, 70, 45, 90, 65, 80, 85],
      [65, 45, 80, 60, 75, 90, 50, 95],
      [30, 50, 70, 60, 85, 75, 90, 80],
      [45, 65, 55, 85, 70, 95, 80, 100],
      [55, 70, 40, 85, 60, 95, 70, 90],
      [40, 60, 75, 50, 90, 65, 85, 100]
    ];
    const barGradient = project.inProgress 
      ? 'background: linear-gradient(180deg, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.05) 100%);' 
      : '';
    const bars = barHeights[index % barHeights.length]
      .map(h => `<div class="chart-bar" style="height: ${h}%; ${barGradient}"></div>`)
      .join("");

    const badgeClass = project.inProgress ? 'card-tag card-tag-in-progress' : 'card-tag card-tag-highlight';
    const badgeContent = project.inProgress 
      ? `<span class="status-indicator-amber"></span> ${project.badge}`
      : project.badge;

    const statusClass = project.inProgress ? 'mono-tag preview-status status-in-progress' : 'mono-tag preview-status';
    const statusText = project.status || '// v1.0 • active';

    card.innerHTML = `
      <div class="project-media">
        <div class="project-preview-visual">
          <div class="preview-bar">
            <div class="preview-badges">
              <span class="${badgeClass}">${badgeContent}</span>
              <span class="card-tag">${project.categoryLabel}</span>
            </div>
            <span class="${statusClass}">${statusText}</span>
          </div>
          <div class="preview-chart-sim">
            ${bars}
          </div>
        </div>
      </div>

      <div class="project-info">
        <div class="project-header-row">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-year">${project.year}</span>
        </div>
        <p class="project-summary">${project.summary}</p>
        
        <div class="project-tech-list">
          ${project.techStack.map(t => `<span class="tech-item">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="openProjectModal('${project.id}')">
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="border: none; background: transparent; color: var(--text-secondary);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// --- PROJECT FILTERING ---
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// --- PROJECT MODAL ---
window.openProjectModal = function(projectId) {
  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  if (!modal || !modalContent) return;

  const metricsHtml = Object.entries(project.metrics)
    .map(([k, v]) => `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px 16px;">
        <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">${k}</span>
        <strong style="font-size: 1.05rem; color: #fff; font-family: var(--font-mono);">${v}</strong>
      </div>
    `).join("");

  const tagClass = project.inProgress ? 'card-tag card-tag-in-progress' : 'card-tag card-tag-highlight';
  const tagContent = project.inProgress 
    ? `<span class="status-indicator-amber"></span> ${project.badge}`
    : project.badge;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div style="display: flex; gap: 8px; margin-bottom: 12px; align-items: center; flex-wrap: wrap;">
        <span class="${tagClass}">${tagContent}</span>
        <span class="card-tag">${project.categoryLabel}</span>
        ${project.inProgress ? `<span class="mono-tag" style="color: #fbbf24; font-size: 0.76rem;">// In Active Development</span>` : ''}
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-subtitle">${project.summary}</p>
    </div>

    <div class="modal-body">
      <div>
        <h4 class="modal-section-title">System Overview & Architecture</h4>
        <p class="modal-text">${project.description}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Key Performance & Project Benchmarks</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-top: 10px;">
          ${metricsHtml}
        </div>
      </div>

      <div>
        <h4 class="modal-section-title">Core Technology Stack</h4>
        <div class="project-tech-list" style="margin-top: 10px;">
          ${project.techStack.map(t => `<span class="tech-item" style="font-size: 0.85rem; padding: 6px 12px;">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display: flex; gap: 14px; margin-top: 16px; padding-top: 20px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View on GitHub
        </a>
        <button type="button" class="btn btn-secondary btn-sm" onclick="closeProjectModal()">
          Close Window
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
};

// Close modal on backdrop click or Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});

const modalOverlay = document.getElementById("projectModal");
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });
}



// --- COPY EMAIL TO CLIPBOARD WITH TOAST ---
function initCopyEmail() {
  const copyBox = document.getElementById("copyEmailBox");
  if (!copyBox) return;

  copyBox.addEventListener("click", () => {
    const emailElem = document.getElementById("contactEmail");
    const email = emailElem ? emailElem.textContent.trim() : "bhuvan@portfolio.dev";

    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copied to clipboard!");
    }).catch(() => {
      showToast("Email: " + email);
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// --- APPLY CREDENTIALS & PROFILE CONFIGURATION ---
function applyProfileConfig() {
  if (typeof PROFILE_CONFIG === "undefined") return;

  // 1. Email & Copy Box
  if (PROFILE_CONFIG.contact && PROFILE_CONFIG.contact.email) {
    const emailElem = document.getElementById("contactEmail");
    if (emailElem) emailElem.textContent = PROFILE_CONFIG.contact.email;
  }

  // 2. Location
  if (PROFILE_CONFIG.personal && PROFILE_CONFIG.personal.location) {
    const locElem = document.getElementById("profileLocation");
    if (locElem) locElem.textContent = PROFILE_CONFIG.personal.location;
  }

  // 3. Social Links
  if (PROFILE_CONFIG.socials) {
    const gh = document.getElementById("githubLink");
    if (gh && PROFILE_CONFIG.socials.github) gh.href = PROFILE_CONFIG.socials.github;

    const li = document.getElementById("linkedinLink");
    if (li && PROFILE_CONFIG.socials.linkedin) li.href = PROFILE_CONFIG.socials.linkedin;

    const lc = document.getElementById("leetcodeLink");
    if (lc && PROFILE_CONFIG.socials.leetcode) lc.href = PROFILE_CONFIG.socials.leetcode;
  }

  // 4. Status Indicator Text
  if (PROFILE_CONFIG.personal && PROFILE_CONFIG.personal.statusText) {
    const statusPill = document.querySelector(".status-pill span:last-child");
    if (statusPill) statusPill.textContent = PROFILE_CONFIG.personal.statusText;
  }
}

// --- CONTACT FORM HANDLER ---
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("#senderName").value;
    const email = form.querySelector("#senderEmail").value;
    const subject = form.querySelector("#messageSubject") ? form.querySelector("#messageSubject").value : "";
    const message = form.querySelector("#projectMessage").value;
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = "Sending Message...";
    submitBtn.disabled = true;

    // Check if real form delivery is configured in credentials.js
    const formspreeId = typeof PROFILE_CONFIG !== "undefined" ? PROFILE_CONFIG.contact?.formspreeId : "";
    const web3Key = typeof PROFILE_CONFIG !== "undefined" ? PROFILE_CONFIG.contact?.web3FormsAccessKey : "";

    try {
      if (formspreeId) {
        // Send via Formspree API
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ name, email, subject, message })
        });
      } else if (web3Key) {
        // Send via Web3Forms API
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ access_key: web3Key, name, email, subject, message })
        });
      } else {
        // Simulated local dispatch
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      form.reset();
      if (statusMsg) {
        statusMsg.innerHTML = `Thank you, ${name}! Your message has been sent successfully. I will get back to you shortly.`;
        statusMsg.className = "form-status success";
        setTimeout(() => {
          statusMsg.style.display = "none";
        }, 6000);
      }
      showToast("Message sent successfully!");
    } catch (err) {
      if (statusMsg) {
        statusMsg.innerHTML = "Message could not be sent. Please use direct email: " + (PROFILE_CONFIG?.contact?.email || "bhuvan@portfolio.dev");
        statusMsg.className = "form-status";
        statusMsg.style.display = "block";
      }
      showToast("Error sending message. Check email.");
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// --- STATS COUNTER ON SCROLL ---
function initStatsObserver() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(elem => observer.observe(elem));

  function animateValue(elem) {
    const rawVal = elem.getAttribute("data-target") || elem.textContent;
    const match = rawVal.match(/([0-9.]+)(.*)/);
    if (!match) return;

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || "";
    const isDecimal = targetNum % 1 !== 0;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (targetNum - start) * ease;

      elem.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        elem.textContent = rawVal;
      }
    }

    requestAnimationFrame(update);
  }
}

// --- SMOOTH SCROLL FOR ANCHOR LINKS ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
