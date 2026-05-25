<template>
  <section id="process" class="process" aria-labelledby="process-title">
    <div class="container">
      <div class="reveal" style="text-align:center">
        <div class="section-label" style="justify-content:center"><span class="eyebrow">How we work</span></div>
        <h2 class="section-title" id="process-title" style="margin:0 auto;text-align:center">Our <em>process</em></h2>
      </div>
      <div class="process__grid">
        <div
          v-for="(step, i) in process"
          :key="step.num"
          class="process-step reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="step-num">{{ step.num }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { process } = useData()
</script>

<style scoped>
.process { padding: 8rem 0; background: var(--paper-warm); }
.process__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 3.5rem; position: relative; }
.process__grid::before { content: ''; position: absolute; top: 2.75rem; left: 12%; right: 12%; height: 1px; background: var(--border); z-index: 0; }
.process-step { position: relative; z-index: 1; text-align: center; padding: 1.5rem; }
.step-num {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--surface); border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 800; font-size: 0.95rem;
  margin: 0 auto 1.5rem; transition: all 0.3s var(--ease-out);
}
.process-step:hover .step-num { background: var(--accent); border-color: var(--accent); color: #fff; transform: scale(1.12); }
.step-title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
.step-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

@media (max-width: 900px) { .process__grid { grid-template-columns: 1fr 1fr; gap: 2rem; } .process__grid::before { display: none; } }
@media (max-width: 600px) { .process { padding: 5rem 0; } }
@media (max-width: 400px) { .process__grid { grid-template-columns: 1fr; } }
</style>
