<template>
  <div class="ticker" aria-hidden="true">
    <div class="ticker__track">
      <span v-for="(item, i) in doubled" :key="i" class="ticker__item">
        <span class="ticker__dot">✦</span>{{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
const { tickerItems } = useData()
const doubled = [...tickerItems, ...tickerItems]
</script>

<style scoped>
.ticker { overflow: hidden; background: var(--ink); color: var(--paper); padding: 1.1rem 0; }
[data-theme="dark"] .ticker { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.ticker__track { display: flex; animation: marquee 30s linear infinite; width: max-content; }
.ticker:hover .ticker__track { animation-play-state: paused; }
.ticker__item { display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-display); font-size: 0.82rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; padding: 0 2.25rem; }
.ticker__dot { color: var(--accent); font-size: 0.55rem; }
</style>
