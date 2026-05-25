<template>
  <section id="services" class="services" aria-labelledby="services-title">
    <div class="container">
      <div class="reveal">
        <div class="section-label"><span class="eyebrow">What we do</span><span class="eyebrow-line"></span></div>
        <h2 class="section-title" id="services-title">Services built for <em>results</em></h2>
      </div>
      <div class="services__grid">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card reveal"
          :style="{ transitionDelay: `${i * 0.07}s` }"
        >
          <div class="sc-top">
            <div class="sc-icon" aria-hidden="true" v-html="icons[i]"></div>
            <span class="sc-num" aria-hidden="true">0{{ i + 1 }}</span>
          </div>
          <h3 class="sc-title">{{ service.title }}</h3>
          <p class="sc-desc">{{ service.desc }}</p>
          <div class="sc-tags">
            <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="sc-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16L16 4M16 4H7M16 4V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { services } = useData()
const icons = [
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10M12 12l6-6"/></svg>',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
]
</script>

<style scoped>
.services { padding: 8rem 0; background: var(--paper); }
.services__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 3.5rem; border-radius: var(--radius); overflow: hidden; }
.service-card { background: var(--paper); padding: 2.5rem; position: relative; cursor: default; overflow: hidden; transition: color 0.4s; }
[data-theme="dark"] .service-card { background: var(--surface); }
.service-card::before { content: ''; position: absolute; inset: 0; background: var(--ink); transform: scaleY(0); transform-origin: bottom; transition: transform 0.45s var(--ease-out); z-index: 0; }
[data-theme="dark"] .service-card::before { background: var(--accent); }
.service-card:hover::before { transform: scaleY(1); }
.service-card:hover { color: var(--paper); }
.service-card > * { position: relative; z-index: 1; }
.sc-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.75rem; }
.sc-num { font-family: var(--font-display); font-size: 0.72rem; font-weight: 700; opacity: 0.25; letter-spacing: 0.06em; }
.sc-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; margin-bottom: 0.75rem; letter-spacing: -0.02em; }
.sc-desc { font-size: 0.875rem; line-height: 1.7; opacity: 0.6; margin-bottom: 1.5rem; }
.sc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.75rem; }
.tag { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em; padding: 0.22rem 0.65rem; border: 1px solid currentColor; border-radius: var(--radius-pill); opacity: 0.45; }
.sc-arrow { opacity: 0; transform: translate(-6px, 6px); transition: all 0.35s var(--ease-out); }
.service-card:hover .sc-arrow { opacity: 1; transform: none; }

@media (max-width: 900px) { .services__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) {
  .services { padding: 5rem 0; }
  .services__grid { grid-template-columns: 1fr; }
  .service-card { padding: 1.75rem; }
}
</style>
