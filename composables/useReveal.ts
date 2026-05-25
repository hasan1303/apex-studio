export const useReveal = () => {
  const initReveal = () => {
    if (!import.meta.client) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left').forEach((el) => observer.observe(el))
    }, 100)
    return observer
  }

  return { initReveal }
}
