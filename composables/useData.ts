export const useData = () => {
  const services = [
    { title: 'Brand & Strategy', desc: "We define your brand's core identity — from positioning to visual language — so every touchpoint speaks clearly.", tags: ['Identity', 'Positioning', 'Naming'] },
    { title: 'UI/UX Design', desc: 'Interfaces that are beautiful by default, intuitive by design. We obsess over every pixel and interaction pattern.', tags: ['Figma', 'Prototyping', 'Research'] },
    { title: 'Web Development', desc: 'High-performance sites and apps built with modern frameworks. Fast, accessible, and built to scale globally.', tags: ['Nuxt', 'React', 'Node.js'] },
    { title: 'Motion & Video', desc: 'Animation and motion design that breathes life into your brand — from micro-interactions to full campaigns.', tags: ['After Effects', 'Lottie', '3D'] },
    { title: 'E-Commerce', desc: 'Revenue-driven storefronts optimised for conversion. From Shopify builds to custom headless commerce.', tags: ['Shopify', 'Conversion', 'UX'] },
    { title: 'Digital Marketing', desc: 'Data-backed campaigns that grow reach and revenue. SEO, paid ads, email, and social strategy that converts.', tags: ['SEO', 'PPC', 'Analytics'] }
  ]

  const process = [
    { num: '01', title: 'Discover', desc: 'We dig deep into your goals, audience, and competitive landscape to uncover what truly matters.' },
    { num: '02', title: 'Strategise', desc: 'We map out a clear plan — content architecture, user flows, and a creative direction that aligns everyone.' },
    { num: '03', title: 'Design & Build', desc: 'Where vision meets execution. We design, prototype, test, and develop in close collaboration with you.' },
    { num: '04', title: 'Launch & Grow', desc: "We don't disappear at launch. We monitor, iterate, and optimize to ensure sustained growth and results." }
  ]

  const team = [
    { name: 'Erjon Hoxha', role: 'Founder & Creative Director', seed: 'erjon', bg: 'b6e3f4' },
    { name: 'Klaudia Marku', role: 'Lead UI/UX Designer', seed: 'klaudia', bg: 'ffdfbf' },
    { name: 'Ardit Shehu', role: 'Head of Development', seed: 'ardit', bg: 'c0aede' },
    { name: 'Mira Dushi', role: 'Brand Strategist', seed: 'mira', bg: 'd1f4e0' }
  ]

  const projects = [
    { title: 'Luminary — Brand Refresh', cat: 'Brand & Web', img: 'https://images.unsplash.com/photo-1635775017492-1eb935a082a4?w=800&q=80', size: 'large', filter: 'brand' },
    { title: 'Orchid — E-Commerce', cat: 'UI Design & Dev', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', size: 'small', filter: 'web' },
    { title: 'Vertex — SaaS Dashboard', cat: 'Product Design', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', size: 'small', filter: 'product' },
    { title: 'Nova — Mobile App', cat: 'App Design', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', size: 'medium', filter: 'product' },
    { title: 'Cedar — Architecture Studio', cat: 'Web & Motion', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80', size: 'medium', filter: 'motion' }
  ]

  const pricing = [
    {
      name: 'Starter', monthly: 2500, yearly: 2000, cta: 'Get started', featured: false,
      features: ['Brand identity package', 'Up to 5-page website', 'Mobile responsive', '3 rounds of revisions', '30-day post-launch support']
    },
    {
      name: 'Growth', monthly: 5500, yearly: 4400, badge: 'Most popular', cta: 'Start project', featured: true,
      features: ['Full brand strategy', 'Custom web platform', 'UI/UX design system', 'SEO & performance', 'Priority support 3 months', 'Analytics dashboard']
    },
    {
      name: 'Scale', monthly: 9500, yearly: 7600, cta: 'Talk to us', featured: false,
      features: ['Enterprise brand system', 'Multi-platform development', 'Dedicated team (5 people)', 'Quarterly strategy reviews', '12-month retainer option', 'Custom integrations']
    }
  ]

  const testimonials = [
    { quote: 'Apex took our vague concept and turned it into a world-class product. Their design sensibility is unmatched — they elevated every single aspect of our brand.', author: 'Sarah Chen', role: 'CEO, Luminary', seed: 'sarah', bg: 'b6e3f4', featured: false },
    { quote: 'Working with Apex was transformative. The website they built drove a 340% increase in qualified leads within the first three months. They are the real deal.', author: 'Marcus Reid', role: 'Founder, Vertex Labs', seed: 'marcus', bg: 'ffdfbf', featured: true },
    { quote: "The team is incredibly talented but also deeply strategic. They don't just make things beautiful — they make sure those things actually work for your business.", author: 'Amara Osei', role: 'CMO, Orchid', seed: 'amara', bg: 'c0aede', featured: false }
  ]

  const faqs = [
    { q: 'How long does a typical project take?', a: "Most website projects take 6–10 weeks from kickoff to launch. Brand identity projects typically run 4–6 weeks. We'll give you a precise timeline in our proposal after learning about your specific needs." },
    { q: 'What does your process look like?', a: 'We follow a four-phase process: Discover → Strategise → Design & Build → Launch & Grow. You\'re involved at every stage, with regular check-ins and clear milestones throughout.' },
    { q: 'Do you work with international clients?', a: 'Absolutely. About 60% of our clients are based outside Albania. We work across time zones via async-first communication and scheduled video calls. Geography is no barrier.' },
    { q: 'What\'s included in post-launch support?', a: 'Every project includes a 30-day post-launch support window. We monitor performance, fix any bugs, and provide a handover session so your team can manage the site confidently.' },
    { q: 'Can we start small and scale up?', a: "Yes — many of our best relationships started with a focused project. We're happy to begin with a brand audit, a landing page, or a design sprint, then grow the engagement." },
    { q: 'How do payments work?', a: 'We typically structure payments as 40% upfront, 40% at midpoint, and 20% upon delivery. For larger projects we can arrange monthly milestone billing.' }
  ]

  const brands = ['Luminary', 'Vertex Labs', 'Orchid', 'Nova Corp', 'Cedar', 'Pulse']

  const tickerItems = ['Brand Strategy', 'UI/UX Design', 'Web Development', 'Motion Design', 'Product Design', 'Digital Marketing', 'SEO Optimization', 'E-Commerce', 'Mobile Apps']

  return { services, process, team, projects, pricing, testimonials, faqs, brands, tickerItems }
}
