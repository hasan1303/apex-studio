<template>
  <section id="work" class="work" aria-labelledby="work-title">
    <div class="container">
      <div class="work__header reveal">
        <div>
          <div class="section-label"><span class="eyebrow">Selected work</span><span class="eyebrow-line"></span></div>
          <h2 class="work-title" id="work-title">Projects we're <em>proud of</em></h2>
        </div>
        <a href="#contact" class="view-all">View all <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>
      </div>

      <div class="filter-bar reveal" role="group" aria-label="Filter projects">
        <button
          v-for="f in filters"
          :key="f.value"
          :class="['filter-btn', { active: activeFilter === f.value }]"
          @click="activeFilter = f.value"
        >{{ f.label }}</button>
      </div>

      <div class="work__grid">
        <article
          v-for="(p, i) in projects"
          v-show="activeFilter === 'all' || activeFilter === p.filter"
          :key="p.title"
          :class="['project-card', p.size, 'reveal']"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="pc-img">
            <img :src="p.img" :alt="p.title" loading="lazy">
            <div class="pc-overlay" aria-hidden="true">
              <a href="#contact" class="overlay-btn">View case study →</a>
            </div>
          </div>
          <div class="pc-info">
            <span class="pc-cat">{{ p.cat }}</span>
            <h3 class="pc-title">{{ p.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const { projects } = useData()
const activeFilter = ref('all')
const filters = [
  { value: 'all', label: 'All' },
  { value: 'brand', label: 'Brand' },
  { value: 'web', label: 'Web' },
  { value: 'product', label: 'Product' },
  { value: 'motion', label: 'Motion' }
]
</script>

<style scoped>
.work { padding: 8rem 0; background: var(--paper-warm); }
.work__header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem; }
.work-title { font-family: var(--font-display); font-size: clamp(2.2rem, 4vw, 3.75rem); font-weight: 800; letter-spacing: -0.035em; line-height: 1.02; }
.work-title em { font-style: italic; color: var(--accent); }
.view-all { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; font-weight: 600; border-bottom: 1.5px solid currentColor; padding-bottom: 2px; transition: color 0.2s; align-self: flex-end; white-space: nowrap; }
.view-all:hover { color: var(--accent); }
.filter-bar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.filter-btn { padding: 0.45rem 1.1rem; border-radius: var(--radius-pill); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; border: 1.5px solid var(--border); transition: all 0.25s var(--ease-out); background: transparent; }
.filter-btn:hover, .filter-btn.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }
[data-theme="dark"] .filter-btn.active { background: var(--accent); border-color: var(--accent); }
.work__grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 1.25rem; }
.project-card { position: relative; border-radius: var(--radius); overflow: hidden; background: var(--surface-alt); transition: transform 0.4s var(--ease-out), box-shadow 0.4s; }
.project-card:hover { transform: translateY(-4px); box-shadow: 0 28px 60px rgba(0,0,0,.12); }
.project-card.large { grid-column: span 7; grid-row: span 2; }
.project-card.small { grid-column: span 5; }
.project-card.medium { grid-column: span 6; }
.pc-img { position: relative; overflow: hidden; }
.large .pc-img, .small .pc-img { aspect-ratio: 4/3; }
.medium .pc-img { aspect-ratio: 16/9; }
.pc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.65s var(--ease-out); }
.project-card:hover .pc-img img { transform: scale(1.05); }
.pc-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,15,.7), rgba(232,76,30,.4)); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.35s; }
.project-card:hover .pc-overlay { opacity: 1; }
.overlay-btn { background: #fff; color: var(--ink); padding: 0.75rem 1.5rem; border-radius: var(--radius-pill); font-size: 0.85rem; font-weight: 700; transform: translateY(8px); transition: transform 0.35s var(--ease-out), background 0.2s; }
.project-card:hover .overlay-btn { transform: none; }
.overlay-btn:hover { background: var(--accent); color: #fff; }
.pc-info { padding: 1.25rem 1.5rem; }
.pc-cat { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.3rem; display: block; }
.pc-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; letter-spacing: -0.02em; }

@media (max-width: 900px) { .work__grid { grid-template-columns: 1fr 1fr; } .project-card.large, .project-card.small, .project-card.medium { grid-column: span 1; } }
@media (max-width: 600px) { .work { padding: 5rem 0; } .work__grid { grid-template-columns: 1fr; } }
</style>
