<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#" class="footer-logo">
            <span class="footer-logo-mark">AX</span>
            <span>Apex Studio</span>
          </a>
          <p>Building bold digital experiences<br>for ambitious brands worldwide.</p>
          <div class="socials">
            <a v-for="s in socials" :key="s.label" href="#" class="social-link" :aria-label="s.label" v-html="s.icon"></a>
          </div>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <h4>Services</h4>
            <a href="#services">Brand &amp; Strategy</a>
            <a href="#services">UI/UX Design</a>
            <a href="#services">Web Development</a>
            <a href="#services">Motion &amp; Video</a>
            <a href="#services">E-Commerce</a>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#work">Our work</a>
            <a href="#team">Team</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer__col">
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2025 Apex Studio. All rights reserved.</p>
        <div class="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
    <div class="footer__wordmark" aria-hidden="true">APEX</div>
  </footer>

  <!-- Cookie Banner -->
  <div :class="['cookie', { show: cookieVisible }]" role="dialog" aria-modal="true" aria-label="Cookie consent" v-if="!cookieDismissed">
    <p>We use cookies to enhance your experience. <a href="#">Learn more</a></p>
    <div class="cookie-btns">
      <button class="cookie-decline" @click="dismiss">Decline</button>
      <button class="cookie-accept" @click="accept">Accept all</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cookieVisible = ref(false)
const cookieDismissed = ref(true)

const accept = () => { localStorage.setItem('cookie', 'accepted'); cookieVisible.value = false; setTimeout(() => cookieDismissed.value = true, 500) }
const dismiss = () => { localStorage.setItem('cookie', 'declined'); cookieVisible.value = false; setTimeout(() => cookieDismissed.value = true, 500) }

onMounted(() => {
  if (!localStorage.getItem('cookie')) {
    cookieDismissed.value = false
    setTimeout(() => cookieVisible.value = true, 2000)
  }
})

const socials = [
  { label: 'Instagram', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
  { label: 'LinkedIn', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' },
  { label: 'Dribbble', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>' },
  { label: 'Twitter', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>' }
]
</script>

<style scoped>
.footer { background: var(--ink); color: var(--paper); padding: 5rem 0 0; position: relative; overflow: hidden; }
[data-theme="dark"] .footer { background: #060608; }
.footer__top { display: flex; gap: 4rem; padding-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,.07); flex-wrap: wrap; }
.footer__brand { flex: 0 0 280px; }
.footer-logo { display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 1.1rem; }
.footer-logo-mark { width: 36px; height: 36px; background: var(--paper); color: var(--ink); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; border-radius: 7px; flex-shrink: 0; }
.footer__brand p { font-size: 0.85rem; color: rgba(255,255,255,.4); line-height: 1.7; margin-bottom: 1.5rem; }
.socials { display: flex; gap: 0.6rem; }
.social-link { width: 36px; height: 36px; border: 1px solid rgba(255,255,255,.1); border-radius: 9px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,.5); transition: all 0.25s; }
.social-link:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.footer__cols { display: flex; gap: 4rem; flex: 1; flex-wrap: wrap; }
.footer__col { display: flex; flex-direction: column; gap: 0.7rem; }
.footer__col h4 { font-family: var(--font-display); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.3; margin-bottom: 0.35rem; }
.footer__col a { font-size: 0.85rem; color: rgba(255,255,255,.55); transition: color 0.2s, transform 0.2s; display: inline-block; }
.footer__col a:hover { color: var(--paper); transform: translateX(4px); }
.footer__bottom { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; font-size: 0.78rem; color: rgba(255,255,255,.3); flex-wrap: wrap; gap: 1rem; position: relative; z-index: 2; }
.footer__links { display: flex; gap: 2rem; }
.footer__links a { color: inherit; transition: color 0.2s; }
.footer__links a:hover { color: var(--paper); }
.footer__wordmark { position: absolute; bottom: -0.12em; left: 50%; transform: translateX(-50%); font-family: var(--font-display); font-size: 19vw; font-weight: 800; color: rgba(255,255,255,.025); white-space: nowrap; letter-spacing: -0.04em; user-select: none; pointer-events: none; line-height: 1; }

/* Cookie */
.cookie { position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%) translateY(120px); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem 1.75rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: 0 20px 50px rgba(0,0,0,.14); z-index: 400; max-width: 600px; width: calc(100% - 3rem); transition: transform 0.5s var(--ease-out); flex-wrap: wrap; }
.cookie.show { transform: translateX(-50%) translateY(0); }
.cookie p { font-size: 0.82rem; color: var(--muted); line-height: 1.5; flex: 1; }
.cookie p a { color: var(--accent); text-decoration: underline; }
.cookie-btns { display: flex; gap: 0.6rem; flex-shrink: 0; }
.cookie-accept { background: var(--ink); color: var(--paper); padding: 0.55rem 1.2rem; border-radius: var(--radius-pill); font-size: 0.8rem; font-weight: 600; transition: background 0.2s; cursor: pointer; border: none; font-family: var(--font-body); }
.cookie-accept:hover { background: var(--accent); }
.cookie-decline { padding: 0.55rem 1rem; border-radius: var(--radius-pill); font-size: 0.8rem; font-weight: 500; opacity: 0.5; transition: opacity 0.2s; cursor: pointer; border: 1.5px solid var(--border); font-family: var(--font-body); }
.cookie-decline:hover { opacity: 1; }

@media (max-width: 600px) { .footer__top { flex-direction: column; gap: 2.5rem; } .footer__brand { flex: none; } .footer__cols { gap: 2rem; } .cookie { flex-direction: column; gap: 0.75rem; } .cookie-btns { width: 100%; justify-content: flex-end; } }
</style>
