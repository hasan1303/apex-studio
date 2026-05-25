<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="container faq__inner">
      <div class="faq__left reveal-left">
        <div class="section-label"><span class="eyebrow">FAQ</span><span class="eyebrow-line"></span></div>
        <h2 class="faq-title" id="faq-title">Common <em>questions</em></h2>
        <p class="faq-sub">
          Can't find your answer?
          <a href="#contact">Drop us a message</a> and we'll get back within 24h.
        </p>
      </div>
      <div class="faq-list reveal">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          :class="['faq-item', { open: openIndex === i }]"
        >
          <button class="faq-q" @click="toggle(i)" :aria-expanded="openIndex === i">
            {{ item.q }}
            <span class="faq-icon" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
          <div class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const { faqs } = useData()
const openIndex = ref(null)
const toggle = (i) => { openIndex.value = openIndex.value === i ? null : i }
</script>

<style scoped>
.faq { padding: 8rem 0; background: var(--paper); }
.faq__inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6rem; align-items: start; }
.faq__left { position: sticky; top: 7rem; }
.faq-title { font-family: var(--font-display); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.08; margin-top: 0.75rem; margin-bottom: 1.25rem; }
.faq-title em { font-style: italic; color: var(--accent); }
.faq-sub { font-size: 0.95rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
.faq-sub a { color: var(--accent); border-bottom: 1px solid currentColor; }
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.5rem 0; font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; text-align: left; cursor: pointer; transition: color 0.2s; }
.faq-q:hover { color: var(--accent); }
.faq-icon { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.3s var(--ease-out); }
.faq-item.open .faq-icon { background: var(--accent); border-color: var(--accent); color: #fff; transform: rotate(45deg); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height 0.4s var(--ease-out); }
.faq-item.open .faq-a { max-height: 200px; }
.faq-a p { font-size: 0.875rem; color: var(--muted); line-height: 1.7; padding-bottom: 1.5rem; }

@media (max-width: 1024px) { .faq__inner { grid-template-columns: 1fr; gap: 3rem; } .faq__left { position: static; } }
@media (max-width: 600px) { .faq { padding: 5rem 0; } }
</style>
