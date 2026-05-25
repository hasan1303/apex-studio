<template>
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="container about__inner">
      <div class="reveal-left">
        <div class="visual-stack">
          <div class="vs-main">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" alt="Our studio space" loading="lazy">
          </div>
          <div class="vs-overlap" aria-hidden="true">
            <span class="vs-tag">Est. 2016</span>
            8 years pushing digital boundaries.
          </div>
          <div class="vs-badge" aria-hidden="true">
            <strong>120+</strong><span>Happy clients</span>
          </div>
        </div>
      </div>

      <div class="about__content">
        <div class="reveal">
          <div class="section-label"><span class="eyebrow">Who we are</span><span class="eyebrow-line"></span></div>
        </div>
        <h2 class="about-title reveal" id="about-title">A studio obsessed with craft & outcomes</h2>
        <p class="about__lead reveal">
          Apex Studio is an independent digital agency based in Tirana, Albania. We partner with ambitious brands to create work that makes a real difference — commercially and culturally.
        </p>
        <div class="values reveal">
          <div v-for="v in values" :key="v.title" class="value-item">
            <div class="value-icon" aria-hidden="true" v-html="v.icon"></div>
            <div><h4>{{ v.title }}</h4><p>{{ v.desc }}</p></div>
          </div>
        </div>
        <a href="#contact" class="btn-primary reveal" style="align-self:flex-start">
          <span>Work with us</span>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { title: 'Radically transparent', desc: 'No hidden fees. No jargon. Just clear, honest communication throughout.', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' },
  { title: 'Outcome-obsessed', desc: "Beautiful work means nothing if it doesn't drive real results for your business.", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { title: 'Always iterating', desc: 'We refine, test, and improve relentlessly until the work is truly excellent.', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>' }
]
</script>

<style scoped>
.about { padding: 8rem 0; background: var(--paper); }
.about__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
.visual-stack { position: relative; aspect-ratio: 4/5; max-width: 480px; }
.vs-main { position: absolute; inset: 0; border-radius: 20px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,.14); }
.vs-main img { width: 100%; height: 100%; object-fit: cover; }
.vs-overlap { position: absolute; bottom: -2rem; right: -2rem; background: var(--ink); color: var(--paper); padding: 1.5rem 1.75rem; width: 210px; border-radius: var(--radius); font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; line-height: 1.35; box-shadow: 0 24px 48px rgba(0,0,0,.2); }
[data-theme="dark"] .vs-overlap { background: var(--accent); }
.vs-tag { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent-2); margin-bottom: 0.75rem; display: block; }
[data-theme="dark"] .vs-tag { color: rgba(255,255,255,.7); }
.vs-badge { position: absolute; top: 2rem; right: -1.5rem; background: var(--accent); color: #fff; padding: 1.1rem; border-radius: 14px; text-align: center; box-shadow: 0 12px 32px var(--accent-glow); animation: float 5s ease-in-out infinite; }
.vs-badge strong { display: block; font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; line-height: 1; }
.vs-badge span { font-size: 0.68rem; opacity: 0.85; display: block; margin-top: 0.2rem; }
.about__content { display: flex; flex-direction: column; gap: 1.5rem; }
.about-title { font-family: var(--font-display); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.08; }
.about__lead { font-size: 1.02rem; line-height: 1.75; color: var(--muted); font-weight: 300; }
.values { display: flex; flex-direction: column; gap: 1.1rem; }
.value-item { display: flex; gap: 1rem; align-items: flex-start; padding: 1rem; border-radius: var(--radius-sm); transition: background 0.25s; }
.value-item:hover { background: var(--surface-alt); }
.value-icon { width: 40px; height: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--accent); transition: all 0.25s; }
.value-item:hover .value-icon { background: var(--accent); color: #fff; border-color: transparent; }
.value-item h4 { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.2rem; }
.value-item p { font-size: 0.82rem; color: var(--muted); line-height: 1.55; }

@media (max-width: 900px) { .about__inner { grid-template-columns: 1fr; gap: 3rem; } .visual-stack { max-width: 100%; aspect-ratio: 16/9; } .vs-overlap { display: none; } .vs-badge { top: 1rem; right: 1rem; } }
@media (max-width: 600px) { .about { padding: 5rem 0; } }
</style>
