<template>
  <section id="testimonials" class="testimonials" aria-labelledby="testimonials-title">
    <div class="container">
      <div class="reveal">
        <span class="eyebrow t-eyebrow">Client love</span>
        <h2 class="t-title" id="testimonials-title">Words that <em>matter</em></h2>
      </div>
      <div class="testimonials__grid">
        <div
          v-for="(t, i) in testimonials"
          :key="t.author"
          :class="['t-card reveal', { featured: t.featured }]"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="t-stars" aria-label="5 stars">★★★★★</div>
          <blockquote class="t-quote">"{{ t.quote }}"</blockquote>
          <div class="t-author">
            <div class="t-avatar">
              <img :src="`https://api.dicebear.com/8.x/notionists/svg?seed=${t.seed}&backgroundColor=${t.bg}`" :alt="t.author" loading="lazy">
            </div>
            <div><strong>{{ t.author }}</strong><span>{{ t.role }}</span></div>
          </div>
        </div>
      </div>
      <div class="logos-strip reveal">
        <p class="logos-label">Trusted by teams at</p>
        <div class="logos">
          <span v-for="b in brands" :key="b" class="brand-name">{{ b }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { testimonials, brands } = useData()
</script>

<style scoped>
.testimonials { padding: 8rem 0; background: var(--ink); color: var(--paper); }
[data-theme="dark"] .testimonials { background: #080809; }
.t-eyebrow { color: var(--accent); }
.t-title { font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 800; letter-spacing: -0.035em; line-height: 1.02; margin-top: 0.75rem; }
.t-title em { font-style: italic; color: var(--accent-2); }
.testimonials__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin: 3.5rem 0 5rem; }
.t-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 20px; padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem; transition: all 0.3s; }
.t-card:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.15); transform: translateY(-4px); }
.t-card.featured { background: var(--accent); border-color: transparent; transform: translateY(-1.25rem); }
.t-card.featured:hover { transform: translateY(-1.75rem); }
.t-stars { color: var(--accent-2); font-size: 0.72rem; letter-spacing: 2px; }
.t-card.featured .t-stars { color: rgba(255,255,255,.8); }
.t-quote { font-size: 0.95rem; line-height: 1.7; font-weight: 300; flex: 1; font-style: italic; opacity: 0.85; }
.t-author { display: flex; align-items: center; gap: 0.75rem; }
.t-avatar { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: rgba(255,255,255,.1); flex-shrink: 0; }
.t-avatar img { width: 100%; height: 100%; object-fit: cover; }
.t-author strong { display: block; font-size: 0.85rem; font-weight: 600; line-height: 1.2; }
.t-author span { font-size: 0.72rem; opacity: 0.5; }
.logos-strip { padding-top: 3rem; border-top: 1px solid rgba(255,255,255,.08); text-align: center; }
.logos-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.3; margin-bottom: 1.75rem; }
.logos { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 2rem 4rem; }
.brand-name { font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; letter-spacing: -0.02em; opacity: 0.18; transition: opacity 0.25s; cursor: default; }
.brand-name:hover { opacity: 0.55; }

@media (max-width: 900px) { .testimonials__grid { grid-template-columns: 1fr; } .t-card.featured { transform: none; } .t-card.featured:hover { transform: translateY(-4px); } }
@media (max-width: 600px) { .testimonials { padding: 5rem 0; } }
</style>
