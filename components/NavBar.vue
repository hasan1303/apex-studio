<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div id="progress" :style="{ width: scrollProgress + '%' }"></div>
    <div class="container navbar__inner">
      <a href="#" class="navbar__logo">
        <span class="logo-mark">AX</span>
        <span>Apex Studio</span>
      </a>

      <nav class="navbar__nav" aria-label="Main navigation">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      </nav>

      <div class="navbar__actions">
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <svg v-if="!isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <a href="#contact" class="navbar__cta">
          <span>Start a project</span>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </a>
      </div>

      <button class="burger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span :style="menuOpen ? 'transform:translateY(7px) rotate(45deg)' : ''"></span>
        <span :style="menuOpen ? 'transform:translateY(-7px) rotate(-45deg)' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { open: menuOpen }]" role="dialog" :aria-modal="menuOpen">
      <nav>
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        <a href="#contact" class="mobile-cta-link" @click="closeMenu">Start a project →</a>
      </nav>
      <div class="mobile-menu-bottom">
        <a href="#" class="mobile-social">Instagram</a>
        <a href="#" class="mobile-social">LinkedIn</a>
        <a href="#" class="mobile-social">Dribbble</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { isDark, toggleTheme } = useTheme()
const isScrolled = ref(false)
const scrollProgress = ref(0)
const menuOpen = ref(false)

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#team', label: 'Team' },
  { href: '#testimonials', label: 'Testimonials' }
]

const onScroll = () => {
  const y = window.scrollY
  const maxY = document.body.scrollHeight - window.innerHeight
  isScrolled.value = y > 50
  scrollProgress.value = (y / maxY) * 100
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const onKeydown = (e) => { if (e.key === 'Escape') closeMenu() }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  padding: 1.5rem 0;
  transition: all 0.4s var(--ease-out);
}
.navbar.scrolled {
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(20px);
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
}
#progress {
  position: absolute; top: 0; left: 0; height: 2px;
  background: var(--accent); transition: width 0.1s linear;
}
.navbar__inner { display: flex; align-items: center; gap: 1.5rem; }
.navbar__logo {
  display: flex; align-items: center; gap: 0.6rem;
  font-family: var(--font-display); font-weight: 700; font-size: 1rem;
}
.logo-mark {
  width: 36px; height: 36px; background: var(--ink); color: var(--paper);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.05em;
  border-radius: 8px; flex-shrink: 0;
  transition: background 0.3s, transform 0.3s;
}
.navbar__logo:hover .logo-mark { background: var(--accent); transform: rotate(-6deg); }
.navbar__nav { display: flex; gap: 2.25rem; margin-left: auto; }
.navbar__nav a {
  font-size: 0.875rem; opacity: 0.6; transition: opacity 0.2s;
  position: relative;
}
.navbar__nav a::after {
  content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
  height: 1.5px; background: var(--accent);
  transform: scaleX(0); transition: transform 0.3s var(--ease-out);
}
.navbar__nav a:hover { opacity: 1; }
.navbar__nav a:hover::after { transform: scaleX(1); }
.navbar__actions { display: flex; align-items: center; gap: 0.75rem; }
.theme-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1.5px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  opacity: 0.7; transition: all 0.25s; flex-shrink: 0;
}
.theme-toggle:hover { opacity: 1; border-color: var(--accent); color: var(--accent); }
.navbar__cta {
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--ink); color: var(--paper);
  padding: 0.625rem 1.2rem; border-radius: var(--radius-pill);
  font-size: 0.85rem; font-weight: 500;
  transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
  white-space: nowrap;
}
.navbar__cta:hover { background: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-glow); }
.burger {
  display: none; flex-direction: column; gap: 5px;
  width: 28px; padding: 4px; margin-left: auto;
}
.burger span {
  display: block; height: 2px; background: var(--ink);
  border-radius: 2px; transition: transform 0.35s var(--ease-out), opacity 0.25s;
}

/* Mobile menu */
.mobile-menu {
  display: none; position: fixed; inset: 0;
  background: var(--paper); padding: 6rem 2rem 3rem;
  flex-direction: column; opacity: 0; pointer-events: none;
  transition: opacity 0.35s; z-index: -1;
}
.mobile-menu.open { opacity: 1; pointer-events: all; z-index: 490; }
.mobile-menu nav { display: flex; flex-direction: column; gap: 1.75rem; }
.mobile-menu nav a {
  font-family: var(--font-display); font-size: 2.25rem; font-weight: 700;
  opacity: 0.35; transition: opacity 0.2s, transform 0.3s; display: inline-block;
}
.mobile-menu nav a:hover { opacity: 1; transform: translateX(8px); }
.mobile-cta-link { color: var(--accent) !important; opacity: 1 !important; }
.mobile-menu-bottom {
  margin-top: auto; padding-top: 2rem;
  border-top: 1px solid var(--border); display: flex; gap: 1.5rem;
}
.mobile-social { font-size: 0.8rem; opacity: 0.5; transition: opacity 0.2s; }
.mobile-social:hover { opacity: 1; }

@media (max-width: 900px) {
  .navbar__nav, .navbar__cta { display: none; }
  .burger { display: flex; }
  .mobile-menu { display: flex; }
  .theme-toggle { display: flex; }
}
</style>
