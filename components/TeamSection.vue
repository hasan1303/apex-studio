<template>
  <section id="team" class="team" aria-labelledby="team-title">
    <div class="container">
      <div class="reveal" style="text-align:center">
        <div class="section-label" style="justify-content:center"><span class="eyebrow">The people</span></div>
        <h2 class="section-title" id="team-title" style="margin:0 auto;text-align:center;max-width:500px">Meet the <em>team</em></h2>
      </div>
      <div class="team__grid">
        <div
          v-for="(member, i) in team"
          :key="member.name"
          class="team-card reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="team-img">
            <img :src="`https://api.dicebear.com/8.x/notionists/svg?seed=${member.seed}&backgroundColor=${member.bg}`" :alt="member.name" loading="lazy">
            <div class="team-overlay" aria-hidden="true">
              <a href="#" class="team-social" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" class="team-social" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
              </a>
            </div>
          </div>
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { team } = useData()
</script>

<style scoped>
.team { padding: 8rem 0; background: var(--paper); }
.team__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 3.5rem; }
.team-card { text-align: center; }
.team-img { aspect-ratio: 3/4; border-radius: var(--radius); overflow: hidden; margin-bottom: 1.25rem; position: relative; }
.team-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease-out); }
.team-card:hover .team-img img { transform: scale(1.04); }
.team-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,15,.75), transparent); opacity: 0; transition: opacity 0.35s; display: flex; align-items: flex-end; justify-content: center; padding: 1.25rem; gap: 0.6rem; }
.team-card:hover .team-overlay { opacity: 1; }
.team-social { width: 34px; height: 34px; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; transition: all 0.25s; transform: translateY(8px); transition: transform 0.35s var(--ease-out), background 0.2s; }
.team-card:hover .team-social { transform: none; }
.team-social:hover { background: var(--accent); border-color: var(--accent); }
.team-name { font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; letter-spacing: -0.02em; margin-bottom: 0.25rem; }
.team-role { font-size: 0.8rem; color: var(--muted); }

@media (max-width: 1024px) { .team__grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .team { padding: 5rem 0; } }
@media (max-width: 400px) { .team__grid { grid-template-columns: 1fr; } }
</style>
