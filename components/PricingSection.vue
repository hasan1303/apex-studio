<template>
  <section id="pricing" class="pricing" aria-labelledby="pricing-title">
    <div class="container">
      <div class="reveal" style="text-align:center">
        <div class="section-label" style="justify-content:center"><span class="eyebrow">Investment</span></div>
        <h2 class="section-title" id="pricing-title" style="margin:0 auto;text-align:center">Transparent <em>pricing</em></h2>
        <div class="toggle-row">
          <span :class="['toggle-label', { active: !isYearly }]">Monthly</span>
          <button
            :class="['toggle-switch', { yearly: isYearly }]"
            @click="isYearly = !isYearly"
            :aria-pressed="isYearly"
            role="switch"
            aria-label="Toggle yearly billing"
          ></button>
          <span :class="['toggle-label', { active: isYearly }]">
            Yearly <span class="save-badge">Save 20%</span>
          </span>
        </div>
      </div>

      <div class="pricing__grid reveal">
        <div
          v-for="plan in pricing"
          :key="plan.name"
          :class="['price-card', { featured: plan.featured }]"
        >
          <div v-if="plan.badge" class="price-badge">{{ plan.badge }}</div>
          <p class="price-name">{{ plan.name }}</p>
          <div class="price-amount">
            <sup>$</sup>{{ (isYearly ? plan.yearly : plan.monthly).toLocaleString() }}
          </div>
          <p class="price-period">per month{{ isYearly ? ' · billed annually' : '' }}</p>
          <div class="price-features">
            <div v-for="f in plan.features" :key="f" class="pf">
              <span class="pf-check">✓</span><span>{{ f }}</span>
            </div>
          </div>
          <a href="#contact" class="price-cta">{{ plan.cta }} →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const { pricing } = useData()
const isYearly = ref(false)
</script>

<style scoped>
.pricing { padding: 8rem 0; background: var(--paper-warm); }
.toggle-row { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.5rem; margin-bottom: 3.5rem; flex-wrap: wrap; }
.toggle-label { font-size: 0.875rem; font-weight: 500; opacity: 0.5; transition: opacity 0.25s; }
.toggle-label.active { opacity: 1; }
.toggle-switch { width: 48px; height: 26px; background: var(--ink); border-radius: var(--radius-pill); position: relative; cursor: pointer; transition: background 0.25s; flex-shrink: 0; }
.toggle-switch::after { content: ''; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform 0.3s var(--ease-spring); }
.toggle-switch.yearly::after { transform: translateX(22px); }
[data-theme="dark"] .toggle-switch { background: var(--accent); }
.save-badge { background: var(--accent); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: var(--radius-pill); letter-spacing: 0.04em; }
.pricing__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
.price-card { background: var(--surface); border: 1.5px solid var(--border); border-radius: 20px; padding: 2.25rem; position: relative; transition: transform 0.3s var(--ease-out), box-shadow 0.3s; }
.price-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
.price-card.featured { background: var(--ink); color: var(--paper); border-color: var(--ink); }
[data-theme="dark"] .price-card.featured { background: var(--accent); border-color: var(--accent); }
.price-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #fff; font-size: 0.68rem; font-weight: 700; padding: 0.3rem 0.85rem; border-radius: var(--radius-pill); letter-spacing: 0.06em; white-space: nowrap; }
.price-name { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.5; margin-bottom: 1rem; }
.price-amount { font-family: var(--font-display); font-size: 3rem; font-weight: 800; letter-spacing: -0.05em; line-height: 1; margin-bottom: 0.35rem; }
.price-amount sup { font-size: 1.25rem; vertical-align: top; margin-top: 0.5rem; display: inline-block; }
.price-period { font-size: 0.78rem; opacity: 0.5; margin-bottom: 1.75rem; }
.price-features { display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
.price-card.featured .price-features { border-color: rgba(255,255,255,.15); }
.pf { display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; }
.pf-check { width: 18px; height: 18px; border-radius: 50%; background: rgba(34,197,94,.15); color: #22c55e; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.65rem; }
.price-card.featured .pf-check { background: rgba(255,255,255,.15); color: #fff; }
.price-cta { display: block; text-align: center; padding: 0.85rem; border-radius: var(--radius-pill); font-weight: 600; font-size: 0.9rem; transition: all 0.25s; border: 2px solid var(--border); }
.price-cta:hover { border-color: var(--accent); color: var(--accent); }
.price-card.featured .price-cta { background: #fff; color: var(--ink); border-color: #fff; }
.price-card.featured .price-cta:hover { background: var(--accent-2); border-color: var(--accent-2); color: var(--ink); }

@media (max-width: 1024px) { .pricing__grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }
@media (max-width: 600px) { .pricing { padding: 5rem 0; } }
</style>
