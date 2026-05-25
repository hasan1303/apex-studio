<template>
  <section class="hero" aria-label="Hero">
    <div class="hero__bg" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container hero__content">
      <div class="hero__badge">
        <span class="dot" aria-hidden="true"></span>
        Available for new projects — 2025
      </div>
      <h1 class="hero__title">
        <span class="line">We craft</span>
        <span class="line accent">bold digital</span>
        <span class="line outline">experiences.</span>
      </h1>
      <p class="hero__desc">
        Strategy-led design studio helping ambitious brands build products people love and remember.
      </p>
      <div class="hero__actions">
        <a href="#contact" class="btn-primary">
          <span>Start a project</span>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        <a href="#work" class="btn-ghost">
          See our work
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      <div class="hero__stats">
        <div class="stat"><strong>120+</strong><span>Projects delivered</span></div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat"><strong>8yr</strong><span>In the industry</span></div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat"><strong>98%</strong><span>Client satisfaction</span></div>
      </div>
    </div>

    <div class="floating-card" aria-hidden="true">
      <div class="fc-avatar">
        <img src="https://api.dicebear.com/8.x/notionists/svg?seed=apex&backgroundColor=b6e3f4" alt="" role="presentation">
      </div>
      <div>
        <p class="fc-name">Sarah Chen</p>
        <p class="fc-role">CEO, Luminary</p>
        <p class="fc-stars">★★★★★</p>
      </div>
    </div>

    <div class="rotating-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120" class="badge-svg">
        <path id="cp" fill="none" d="M60,10 a50,50 0 1,1 -0.001,0"/>
        <text class="badge-text">
          <textPath href="#cp" startOffset="0%">APEX STUDIO · DIGITAL AGENCY · SINCE 2016 ·&nbsp;</textPath>
        </text>
      </svg>
      <div class="badge-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>
    </div>

    <div class="scroll-ind" aria-hidden="true">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding: 9rem 0 5rem;
  width: 100%; max-width: 100vw;
}
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(90px); }
.blob-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(247,183,49,.55) 0%, transparent 65%); top: -150px; right: -150px; animation: float 9s ease-in-out infinite; }
.blob-2 { width: 450px; height: 450px; background: radial-gradient(circle, rgba(232,76,30,.35) 0%, transparent 65%); bottom: -50px; left: -100px; animation: float 11s ease-in-out infinite reverse; }
.blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(100,100,255,.12) 0%, transparent 65%); top: 40%; left: 40%; animation: float 13s ease-in-out infinite 2s; }
[data-theme="dark"] .blob-1 { background: radial-gradient(circle, rgba(247,183,49,.22) 0%, transparent 65%); }
[data-theme="dark"] .blob-2 { background: radial-gradient(circle, rgba(232,76,30,.18) 0%, transparent 65%); }
.grid-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%);
  opacity: 0.4;
}
.hero__content { position: relative; z-index: 2; max-width: 800px; overflow: hidden; }
.hero__badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--surface); border: 1px solid var(--border);
  padding: 0.4rem 1rem; border-radius: var(--radius-pill);
  font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
  margin-bottom: 2rem; box-shadow: var(--shadow);
  animation: fadeUp 0.9s var(--ease-out) 0.05s both;
}
.dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s ease-in-out infinite; flex-shrink: 0; }
.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7.5vw, 7.5rem);
  font-weight: 800; line-height: 0.95;
  letter-spacing: -0.03em; margin-bottom: 2rem;
  word-break: keep-all;
}
.hero__title .line { display: block; animation: fadeUp 0.9s var(--ease-out) both; overflow: hidden; }
.hero__title .line:nth-child(1) { animation-delay: 0.08s; }
.hero__title .line.accent { animation-delay: 0.2s; color: var(--accent); }
.hero__title .line.outline { animation-delay: 0.32s; -webkit-text-stroke: 2px var(--ink); color: transparent; }
[data-theme="dark"] .hero__title .line.outline { -webkit-text-stroke: 2px var(--ink); }
.hero__desc {
  font-size: clamp(1rem, 1.8vw, 1.18rem); font-weight: 300; color: var(--muted);
  max-width: 500px; line-height: 1.7; margin-bottom: 2.5rem;
  animation: fadeUp 0.9s var(--ease-out) 0.44s both;
}
.hero__actions {
  display: flex; align-items: center; gap: 1.25rem;
  margin-bottom: 3.5rem; flex-wrap: wrap;
  animation: fadeUp 0.9s var(--ease-out) 0.54s both;
}
.btn-ghost {
  font-size: 0.95rem; font-weight: 500; opacity: 0.55; transition: opacity 0.2s;
  border-bottom: 1.5px solid currentColor; padding-bottom: 2px;
  display: flex; align-items: center; gap: 0.4rem;
}
.btn-ghost:hover { opacity: 1; }
.hero__stats {
  display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;
  animation: fadeUp 0.9s var(--ease-out) 0.64s both;
}
.stat strong { display: block; font-family: var(--font-display); font-size: 1.9rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1; }
.stat span { font-size: 0.78rem; color: var(--muted); margin-top: 0.2rem; display: block; }
.stat-divider { width: 1px; height: 40px; background: var(--border); }

/* Floating card */
.floating-card {
  position: absolute; right: 7%; bottom: 18%;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1rem 1.25rem;
  display: flex; align-items: center; gap: 0.75rem;
  box-shadow: 0 24px 64px rgba(0,0,0,.12);
  animation: float 6s ease-in-out infinite, fadeIn 1s 0.8s both; z-index: 3;
}
.fc-avatar { width: 42px; height: 42px; border-radius: 50%; overflow: hidden; background: #b6e3f4; flex-shrink: 0; }
.fc-avatar img { width: 100%; height: 100%; object-fit: cover; }
.fc-name { font-weight: 600; font-size: 0.85rem; line-height: 1.2; }
.fc-role { font-size: 0.72rem; color: var(--muted); }
.fc-stars { font-size: 0.6rem; color: var(--accent-2); letter-spacing: 1.5px; margin-top: 0.15rem; }

/* Rotating badge */
.rotating-badge { position: absolute; right: 6%; top: 28%; width: 120px; height: 120px; z-index: 3; animation: fadeIn 1s 1s both; }
.badge-svg { width: 100%; height: 100%; animation: spinSlow 16s linear infinite; }
.badge-text { font-size: 10.5px; font-family: var(--font-display); font-weight: 700; fill: var(--ink); letter-spacing: 2.5px; }
.badge-center { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }

/* Scroll indicator */
.scroll-ind { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; z-index: 2; animation: fadeIn 1s 1.4s both; }
.scroll-line { width: 1px; height: 48px; background: linear-gradient(to bottom, transparent, var(--ink)); animation: fadeIn 2s ease-in-out infinite alternate; }
.scroll-ind span { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }

@media (max-width: 900px) {
  .floating-card, .rotating-badge { display: none; }
  .hero { min-height: 100dvh; padding: 7rem 0 4rem; }
}
@media (max-width: 600px) {
  .hero { padding: 6rem 0 3.5rem; }
  .hero__title { font-size: clamp(2.2rem, 11vw, 3.5rem); letter-spacing: -0.025em; word-break: break-word; overflow-wrap: break-word; }
  .hero__title .line.outline { -webkit-text-stroke: 1.5px var(--ink); }
  .hero__desc { font-size: 0.95rem; max-width: 100%; }
  .hero__actions { gap: 1rem; }
  .hero__stats { gap: 1.25rem; }
  .stat strong { font-size: 1.5rem; }
  .stat-divider { height: 28px; }
}
@media (max-width: 400px) {
  .hero__title { font-size: clamp(1.9rem, 10vw, 2.8rem); }
  .hero__actions { flex-direction: column; align-items: flex-start; }
}
</style>
