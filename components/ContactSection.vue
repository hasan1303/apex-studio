<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="container contact__inner">
      <div class="reveal-left">
        <div class="section-label"><span class="eyebrow">Get in touch</span><span class="eyebrow-line"></span></div>
        <h2 class="contact-title" id="contact-title">Ready to start<br>something <em>great?</em></h2>
        <p class="contact-sub">Tell us about your project and we'll get back to you within 24 hours.</p>
        <div class="contact-info">
          <a href="mailto:hello@apexstudio.al" class="info-item">
            <div class="info-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            hello@apexstudio.al
          </a>
          <a href="tel:+355691234567" class="info-item">
            <div class="info-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            +355 69 123 4567
          </a>
          <div class="info-item">
            <div class="info-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            Tirana, Albania
          </div>
        </div>
      </div>

      <div class="form-wrap reveal">
        <form class="contact-form" @submit.prevent="submitForm" novalidate>
          <div class="form-row">
            <div class="field">
              <label for="fname">Full name</label>
              <input id="fname" v-model="form.name" type="text" placeholder="Alex Johnson" required autocomplete="name">
            </div>
            <div class="field">
              <label for="femail">Email address</label>
              <input id="femail" v-model="form.email" type="email" placeholder="alex@company.com" required autocomplete="email">
            </div>
          </div>
          <div class="field">
            <label for="fcompany">Company / Website</label>
            <input id="fcompany" v-model="form.company" type="text" placeholder="Acme Inc." autocomplete="organization">
          </div>
          <div class="field">
            <label for="fservice">Service interested in</label>
            <select id="fservice" v-model="form.service" required>
              <option value="">Select a service...</option>
              <option>Brand &amp; Strategy</option>
              <option>UI/UX Design</option>
              <option>Web Development</option>
              <option>Motion &amp; Video</option>
              <option>E-Commerce</option>
              <option>Digital Marketing</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div class="field">
            <label for="fmsg">Tell us about your project</label>
            <textarea id="fmsg" v-model="form.message" rows="4" placeholder="Share your vision, goals, timeline, budget..."></textarea>
          </div>
          <button type="submit" :class="['submit-btn', { sent: submitted }]">
            <span v-if="!submitted">
              Send message
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
            <span v-else>✓ Message sent! We'll be in touch.</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
const submitted = ref(false)
const form = reactive({ name: '', email: '', company: '', service: '', message: '' })
const submitForm = () => {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 4000)
}
</script>

<style scoped>
.contact { padding: 8rem 0; background: var(--paper-warm); }
.contact__inner { display: grid; grid-template-columns: 1fr 1.35fr; gap: 6rem; align-items: start; }
.contact-title { font-family: var(--font-display); font-size: clamp(2.25rem, 4vw, 3.5rem); font-weight: 800; letter-spacing: -0.035em; line-height: 1.05; margin: 0.75rem 0 1.25rem; }
.contact-title em { font-style: italic; color: var(--accent); }
.contact-sub { font-size: 0.95rem; color: var(--muted); line-height: 1.65; margin-bottom: 2.5rem; font-weight: 300; }
.contact-info { display: flex; flex-direction: column; gap: 1rem; }
.info-item { display: flex; align-items: center; gap: 0.875rem; font-size: 0.875rem; transition: color 0.2s; }
a.info-item:hover { color: var(--accent); }
.info-icon { width: 40px; height: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.25s; }
a.info-item:hover .info-icon { background: var(--accent); border-color: var(--accent); color: #fff; }
.form-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 24px; padding: 2.5rem; box-shadow: var(--shadow); }
.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.field { display: flex; flex-direction: column; gap: 0.5rem; }
.field label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em; opacity: 0.6; }
.field input, .field select, .field textarea { width: 100%; padding: 0.8rem 1rem; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: var(--font-body); font-size: 0.875rem; color: var(--ink); background: var(--paper); transition: border-color 0.2s, box-shadow 0.2s; outline: none; -webkit-appearance: none; appearance: none; }
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
.field textarea { resize: vertical; min-height: 110px; }
.submit-btn { display: flex; align-items: center; justify-content: center; gap: 0.6rem; background: var(--ink); color: var(--paper); padding: 1rem 2rem; border-radius: var(--radius-pill); font-family: var(--font-body); font-size: 0.925rem; font-weight: 600; transition: all 0.28s var(--ease-out); margin-top: 0.5rem; cursor: pointer; border: none; width: 100%; position: relative; overflow: hidden; }
.submit-btn::before { content: ''; position: absolute; inset: 0; background: var(--accent); transform: translateX(-101%); transition: transform 0.35s var(--ease-out); }
.submit-btn:not(.sent):hover::before { transform: translateX(0); }
.submit-btn > span { position: relative; z-index: 1; display: flex; align-items: center; gap: 0.6rem; }
.submit-btn:not(.sent):hover { transform: translateY(-2px); box-shadow: 0 14px 36px var(--accent-glow); }
.submit-btn.sent { background: #22c55e; cursor: default; }
.submit-btn.sent::before { display: none; }

@media (max-width: 900px) { .contact__inner { grid-template-columns: 1fr; gap: 3rem; } .form-row { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .contact { padding: 5rem 0; } }
</style>
