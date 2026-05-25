<template>
  <div class="page">
    <!-- Custom cursor (desktop only) -->
    <div id="cursor" aria-hidden="true"></div>
    <div id="cursor-ring" aria-hidden="true"></div>

    <NavBar />
    <HeroSection />
    <MarqueeTicker />
    <ServicesSection />
    <ProcessSection />
    <AboutSection />
    <WorkSection />
    <TeamSection />
    <PricingSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

useHead({ title: 'Apex Studio — Bold Digital Agency | Design & Development' })

const { initTheme } = useTheme()
const { initReveal } = useReveal()

// Custom cursor
let animFrame = null
let cx = 0, cy = 0, rx = 0, ry = 0

const setupCursor = () => {
  if (window.innerWidth < 1024) return
  const cur = document.getElementById('cursor')
  const ring = document.getElementById('cursor-ring')
  if (!cur || !ring) return

  document.addEventListener('mousemove', (e) => {
    cx = e.clientX; cy = e.clientY
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px'
  }, { passive: true })

  const animRing = () => {
    rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
    animFrame = requestAnimationFrame(animRing)
  }
  animRing()

  const interactiveEls = document.querySelectorAll('a, button, .service-card, .project-card, .team-card, .price-card')
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'))
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'))
  })
}

onMounted(() => {
  initTheme()
  initReveal()
  setTimeout(setupCursor, 500)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<style>
/* Custom cursor */
#cursor {
  position: fixed; width: 10px; height: 10px;
  background: var(--accent); border-radius: 50%;
  pointer-events: none; z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.3s var(--ease-out), height 0.3s var(--ease-out);
  mix-blend-mode: multiply;
}
#cursor-ring {
  position: fixed; width: 34px; height: 34px;
  border: 1.5px solid var(--accent); border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  transition: width 0.3s var(--ease-out), height 0.3s var(--ease-out);
}
[data-theme="dark"] #cursor { mix-blend-mode: screen; }
.cursor-grow #cursor { width: 44px; height: 44px; opacity: 0.15; }
.cursor-grow #cursor-ring { width: 0; height: 0; opacity: 0; }

@media (max-width: 1024px) {
  #cursor, #cursor-ring { display: none; }
}
</style>
